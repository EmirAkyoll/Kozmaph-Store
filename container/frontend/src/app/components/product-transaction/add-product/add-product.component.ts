import { Component } from '@angular/core';
import { Comment, Feature, Product } from 'src/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { MediaService } from 'src/app/services/media.service';
import { MessageService } from 'primeng/api';
import { v4 as generate_random_id } from "uuid";
import { Store } from 'src/app/store';
import { Category } from 'src/interfaces/category.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private store: Store,
              private productService: ProductService, 
              private mediaService: MediaService,
              private messageService: MessageService) {}
  
  isAddProductModalVisible: boolean = false;
  mediaFiles: any[] = [];
  selectedImages: any[] = [];
  image_urls: string[] = [];
  selectedAdvantages: any = [];
  productName: string = '';
  price: number = 0;
  categories: Category[] = [];
  advantages: string[] = [];
  summaries: string[] = [];
  descriptions: string[] = [];
  features: Feature[] = [];
  feature_name: string = '';
  feature_value: string = '';
  feature: Feature = { feature_name: this.feature_name, feature_value: this.feature_value };
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

    this.stepItems = [
      { label: 'General'},
      { label: 'Summaries & Descriptions'},
      { label: 'Features & Categories'},
    ];

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
                categories: string [],
                allComments: Comment[]): Promise<void>{
    await this.uploadMedia();
    console.log("image_urls: ",this.image_urls);
    console.log("picked categories: ",categories);
    const product_data: Product = {
      _id: generate_random_id(),
      name: product_name,
      price: price,
      image_urls: this.image_urls,
      seller: sellerName,
      categories: categories,
      quantity: 0,
      advantages: advantages,
      summary: allSummaries,
      description: allDescriptions,
      features: allFeatures,
      comments: allComments,
    }
    console.log("product_data: ",product_data);

    this.productService.addNew(product_data).subscribe(
      (response: any) => {
        console.log("Response data:", response);
        this.closeModal();
        this.showToast('Product is added!'); 
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
