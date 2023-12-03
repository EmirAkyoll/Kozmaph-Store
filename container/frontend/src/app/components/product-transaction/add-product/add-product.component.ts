import { Component } from '@angular/core';
import { Comment, Feature, Question } from 'src/interfaces/product.interface';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private productService: ProductService) {}
  
  selectedFiles: File[] = [];
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
  images: any;

  showFeatureValueInput(){
    this.isFeatureValueInputShouldBeVisible = true;
  }

  hideFeatureValueInput(){
    this.isFeatureValueInputShouldBeVisible = false;
  }

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
    console.log(this.selectedFiles);
    this.images = this.selectedFiles
    console.log("images: ", this.images);
    
  }

  uploadImages(): void {
    if (this.selectedFiles.length > 0) {
      console.log(this.selectedFiles.length);
      
      this.selectedFiles.forEach(file => {
        console.log("file: ", file);
        
      });
    } else {
      console.log('Lütfen dosya seçin.');
    }
  }

  ngOnInit() {
    this.images = [
      {
        itemImageSrc: 'https://res.cloudinary.com/dcuexe6p4/image/upload/v1701551258/lu9x7fyudqcdyaosa4me.jpg',
      },
      // {
      //   itemImageSrc:
      //     'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
      //   thumbnailImageSrc:
      //     'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
      //   alt: 'Description for Image 1',
      //   title: 'Title 1',
      // },
      // {
      //   itemImageSrc:
      //     'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
      //   thumbnailImageSrc:
      //     'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
      //   alt: 'Description for Image 1',
      //   title: 'Title 1',
      // },
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


  addNewProduct(product_name: string, 
                images: string[], 
                price: number, 
                sellerName: string, 
                advantages: string[], 
                allSummaries: string[], 
                allDescriptions: string[], 
                allFeatures: Feature[], 
                allQuestions: Question[], 
                allComments: Comment[]){
    const product_data = {
      name: product_name,
      image_urls: images,
      price: price,
      seller: sellerName,
      advantages: advantages,
      summary: allSummaries,
      description: allDescriptions,
      features: allFeatures,
      questions: allQuestions,
      comments: allComments,
    }

    this.productService.addNew(product_data)
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
    console.log(this.feature_name, this.feature_value, this.features);

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
    // console.log(this.feature,this.features);
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

  isAddProductModalVisible: boolean = true;

  showModal() {
    this.isAddProductModalVisible = true;
  }

  closeModal() {
    this.isAddProductModalVisible = false;
  }
  
}
