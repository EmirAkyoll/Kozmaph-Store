import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Toast } from 'src/classes/toast.class';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  constructor(private store: Store, private toast: Toast) {}

  @Input() overviewData: any;
  @Input() productRateAverage: any = 5;

  images: any[] = [];
  ratingValue: number = 4;
  responsiveOptions: any;
  loading: boolean = false;
  visible: boolean = false;
  isProductMarked: boolean = false;
  estimatedDeliveryDate: string = '';
  advantagesToShow: string[]= [];
  freeShipping: boolean = false;        
  installments: boolean = false;
  securePayment: boolean = false;
  currentCart: any[] = [];

  showDialog() {
    this.visible = true;
  }

  closeModal(){
    this.visible = false;
  }

  determineTheAdvantagesToShow(){
    this.overviewData.advantages.map((advantage: any) => {
      switch (advantage) {
        case 'Free Shipping':
          this.freeShipping = true;
          break;

        case 'Installments':
          this.installments = true;
          break;

        case 'Secure Payment':
          this.securePayment = true;
          break;
      
        default:
          break;
      }
    })
  }

  transferImagesToGallery(){
    for (let index = 0; index < this.overviewData.image_urls.length; index++) {
      this.images.push({itemImageSrc: this.overviewData.image_urls[index]})      
    }
    // console.log("IMAGES: ", this.images);
  }

  addToCart() {
    if (!this.markCheckingCart(this.overviewData.product_id)) {
      const user: any = localStorage.getItem('CurrentUserData')
      const user_absolute = JSON.parse(user)
      const cartItem: any = {
        productId: this.overviewData.product_id,
        productName: this.overviewData.product_name,
        productPrice: this.overviewData.price,
        productImage: this.overviewData.image_urls[0],
      }
      user_absolute?.cart.push(cartItem)
      console.log("user_absolute: ",user_absolute);
      localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
    }
    this.toast.show("Added to CART.", "success");
  }

  addToFavorites() {
    if (!this.markCheckingFavorites(this.overviewData.product_id)) {
      const user: any = localStorage.getItem('CurrentUserData')
      const user_absolute = JSON.parse(user)
      const favorite: any = {
        productId: this.overviewData.product_id,
        productName: this.overviewData.product_name,
        productPrice: this.overviewData.price,
        productImage: this.overviewData.image_urls[0],
      }
      user_absolute?.favorites.push(favorite)
      console.log("user_absolute: ",user_absolute);
      localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
    }
    this.toast.show("Added to FAVORITES.", "success");
    // console.log("product_data: ", product_data);
  }

  markCheckingFavorites(product_id: string){
    const favoriteProductIds: string[] = [];
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);
    for (let index = 0; index < user_absolute?.favorites.length; index++) {
      const favorite_product_id = user_absolute?.favorites[index].productId;
      favoriteProductIds.push(favorite_product_id);
    }
    // console.log("favoriteProductIds: ", favoriteProductIds);
  
    return favoriteProductIds.includes(product_id)
  }
 
  markCheckingCart(product_id: string){
    const productIds: string[] = [];
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);
    for (let index = 0; index < user_absolute?.cart.length; index++) {
      const product_id = user_absolute?.cart[index].productId;
      productIds.push(product_id);
    }
    // console.log("favoriteProductIds: ", favoriteProductIds);
  
    return productIds.includes(product_id)
  }
  
  createEstimatedDeliveryDay(daysToAdd: number): string {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysToAdd);

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = monthNames[futureDate.getMonth()];
    const day = futureDate.getDate();

    return `${month} ${day}`;
  }

  getEstimatedDeliveryDay() {
    const firstDeliveryDate = this.createEstimatedDeliveryDay(3)
    const secondDeliveryDate = this.createEstimatedDeliveryDay(5)
    this.estimatedDeliveryDate = `${firstDeliveryDate} - ${secondDeliveryDate}`;
  }

  ngOnInit() {
    this.getEstimatedDeliveryDay();
    this.transferImagesToGallery();
    this.determineTheAdvantagesToShow()

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
