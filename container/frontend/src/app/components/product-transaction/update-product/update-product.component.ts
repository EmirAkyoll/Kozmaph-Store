import { Component, Input } from '@angular/core';
import { Comment, Feature, Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { MediaService } from 'src/app/services/media.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private productService: ProductService, 
    private mediaService: MediaService,
    private messageService: MessageService) {}

  @Input() product_data: any = {};
  
  isUpdateProductModalVisible: boolean = false;
  mediaFiles: any[] = [];
  selectedImages: any[] = [];
  image_urls: string[] = [];
  isFeatureValueInputShouldBeVisible: boolean = false;
  selectedAdvantages: any = [];
  productName: string = '';
  price: number = 0;
  advantages: string[] = [];
  summaries: string[] = [];
  descriptions: string[] = [];
  features: Feature[] = [];
  feature_name: string = '';
  feature_value: string = '';
  feature: Feature = { feature_name: this.feature_name, feature_value: this.feature_value };
  responsiveOptions: any;

  showToast(message: string) {
    this.messageService.add({
    severity: 'success',
    detail: message
  });
  }

  onFileSelected(event: any): void {
    this.selectedImages = Array.from(event.target.files);
    console.log("selectedImages: ",this.selectedImages);
  }
  
  showFeatureValueInput(): void{
    this.isFeatureValueInputShouldBeVisible = true;
  }

  hideFeatureValueInput(): void{
    this.isFeatureValueInputShouldBeVisible = false;
  }

  showModal(): void {
    this.isUpdateProductModalVisible = true;
  }

  closeModal(): void {
    this.isUpdateProductModalVisible = false;
  }

  async uploadMedia(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const mediaData = new FormData();
  
      for (const file of this.selectedImages) {
        mediaData.append('images', file);
      }
  
      this.mediaService.upload(mediaData).subscribe(
        (response) => {
          console.log('Upload successful:', response.data);
          const uploaded_media_data = response.data;
  
          for (let index = 0; index < uploaded_media_data.length; index++) {
            this.image_urls.push(uploaded_media_data[index].secure_url);
          }
          
          console.log("image urls: ", this.image_urls);
          resolve();
        },
        (error) => {
          console.error('Upload error:', error);
          reject(error);
        }
      );
    });
  }

  ngOnInit() {
    console.log("chosen product data: ",this.product_data);
    this.productName = this.product_data.name;
    this.price = this.product_data.price;
    this.advantages = this.product_data.advantages;
    this.summaries = this.product_data.summary;
    this.descriptions = this.product_data.description;
    this.features = this.product_data.features;
    this.image_urls = this.product_data.image_urls;
  }
  
  updateProduct(){
    const updated_product_data: Product = {
      _id: this.product_data._id,
      name: this.productName,
      price: this.price,
      seller: this.product_data.seller,
      description: this.descriptions,
      image_urls: this.image_urls,
      advantages: this.advantages,
      features: this.features,
      summary: this.summaries,
      comments: this.product_data.comments,
    }
    this.productService.update(updated_product_data).subscribe(
      (response: any) => {
        console.log("Response data:", response);
        this.showToast('Product is updated!'); 
        this.closeModal();
      },
      (error: any) => {
        console.error("Error:", error);
      }
    );
  }

  enterFeatureField(event: any, field: string): void {
      switch (field) {
        case 'feature_name':
          this.feature_name = event.target.value;
          break;

        case 'feature_value':
          this.feature_value = event.target.value;
          break;

        default:
          break;
      }
  }

  addContent(array_name: string, content: any): void {
    switch (array_name) {
      case 'summaries':
        this.summaries.push(content);
        break;

      case 'descriptions':
        this.descriptions.push(content);
        break;

      case 'features':
        this.feature = { feature_name: this.feature_name, feature_value: this.feature_value }
        this.features.push(this.feature);
        break;

      default:
        break;
    }
  }

  removeContent(array_name: string, index: number): void {
    switch (array_name) {
      case 'summaries':
        this.summaries.splice(index, 1);
        break;

      case 'descriptions':
        this.descriptions.splice(index, 1);
        break;

      case 'features':
        this.features.splice(index, 1);
        break;

      default:
        break;
    }
  }
}
