import { Component } from '@angular/core';
import { Comment, Feature, Product, Question } from 'src/interfaces/product.interface';
import { ProductService } from 'src/app/services/products.service';
import { MediaService } from 'src/app/services/media.service';
import { v4 as generate_random_id } from "uuid";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductService, private mediaService: MediaService) {}
  
  isAddProductModalVisible: boolean = true;
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
    this.isAddProductModalVisible = true;
  }

  closeModal(): void {
    this.isAddProductModalVisible = false;
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
  
          // Promise'i tamamla
          resolve();
        },
        (error) => {
          console.error('Upload error:', error);
  
          // Promise'i hata durumuyla tamamla
          reject(error);
        }
      );
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  async addNewProduct(product_name: string, 
                price: number, 
                sellerName: string, 
                advantages: string[], 
                allSummaries: string[], 
                allDescriptions: string[], 
                allFeatures: Feature[], 
                allQuestions: Question[], 
                allComments: Comment[]): Promise<void>{
    await this.uploadMedia();

    console.log("image_urls: ",this.image_urls);
    const product_data: Product = {
      _id: generate_random_id(),
      name: product_name,
      price: price,
      image_urls: this.image_urls,
      seller: sellerName,
      advantages: advantages,
      summary: allSummaries,
      description: allDescriptions,
      features: allFeatures,
      questions: allQuestions,
      comments: allComments,
    }
    console.log("product_data: ",product_data);

    this.productService.addNew(product_data).subscribe(data => {console.log("DATTOO: ",data)});
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
