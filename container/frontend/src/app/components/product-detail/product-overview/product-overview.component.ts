import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Toast } from 'src/classes/toast.class';

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
  shouldScoreInformationBeShown: boolean = false;
  advantagesToShow: string[]= [];
  freeShipping: boolean = false;        
  installments: boolean = false;
  securePayment: boolean = false;

  toggleProductMarking() {
    this.isProductMarked = !this.isProductMarked;
    
    if (this.isProductMarked === true) {
      this.toast.show("Product added to favorites.", "info")
    } else {
      this.toast.show("Product remove from favorites", "info")
    }
  }

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
    this.loading = true;

    this.toast.show("Product added to cart.", "success");
    this.store.increaseCart();

    setTimeout(() => {
        this.loading = false
    }, 400);
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

  showScoreInformation() {
    this.shouldScoreInformationBeShown = true;
  }
  hideScoreInformation() {
    this.shouldScoreInformationBeShown = false;
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
