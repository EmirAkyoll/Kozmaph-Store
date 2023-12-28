import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment, Feature, Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { MediaService } from 'src/app/services/media.service';
import { MessageService } from 'primeng/api';
import { Store } from 'src/app/store';
import { Category } from 'src/interfaces/category.interface';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  constructor(private store: Store,
              private productService: ProductService, 
              private mediaService: MediaService,
              private messageService: MessageService) {}

  @Input() product_data: any = {};
  @Output() is_update_product_modal_visible = new EventEmitter(false);
  
  isUpdateProductModalVisible: boolean = false;
  mediaFiles: any[] = [];
  selectedImages: any[] = [];
  image_urls: string[] = [];
  isFeatureValueInputShouldBeVisible: boolean = false;
  selectedAdvantages: any = [];
  productName: string = '';
  categories: Category[] = [];
  price: number = 0;
  advantages: string[] = [];
  summaries: string[] = [];
  descriptions: string[] = [];
  features: Feature[] = [];
  feature_name: string = '';
  feature_value: string = '';
  feature: Feature = { 
    feature_name: this.feature_name, 
    feature_value: this.feature_value 
  };
  responsiveOptions: any;
  groupedCategories: any[] = [];
  selectedCategories: any[] = [];
  stepItems: any[] = [];
  activeIndex: number = 0;

  nextStep() {
    this.activeIndex++;
  };
  
  prevStep() {
    this.activeIndex--;
  };

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
    this.is_update_product_modal_visible.emit(false);
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

  getCategoriesToCategorySelection(){
    this.store.categories$.subscribe((allCategories: any) => {
      console.log("allCategories: ",allCategories);
      for (let index = 0; index < allCategories.length; index++) {
        const category_name = allCategories[index].category_name;
        const sub_categories = allCategories[index].sub_categories;
        const sub_categories_absolute: any[] = [];
        // console.log("element: ", {category_name, sub_categories});
        for (let index = 0; index < sub_categories.length; index++) {
          sub_categories_absolute.push({ label: sub_categories[index], value: sub_categories[index] })
        }
        this.groupedCategories.push({
          label: category_name,
          items: sub_categories_absolute
        })
        this.categories.push({category_name, sub_categories})
        // console.log("this.groupedCategories: ", this.groupedCategories);
        
      }
    })
  }

  ngOnInit() {
    this.getCategoriesToCategorySelection()
    console.log("chosen product data: ",this.product_data);
    this.productName = this.product_data.name;
    this.price = this.product_data.price;
    this.selectedAdvantages = this.product_data.advantages;
    this.summaries = this.product_data.summary;
    this.descriptions = this.product_data.description;
    this.features = this.product_data.features;
    this.image_urls = this.product_data.image_urls;
    this.selectedCategories = this.product_data.categories

    this.stepItems = [
      { label: 'General'},
      { label: 'Summaries & Descriptions'},
      { label: 'Features & Categories'},
    ];
  }
  
  updateProduct(){
    const updated_product_data: Product = {
      _id: this.product_data._id,
      name: this.productName,
      price: this.price,
      seller: this.product_data.seller,
      categories: this.selectedCategories,
      quantity: 0,
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
