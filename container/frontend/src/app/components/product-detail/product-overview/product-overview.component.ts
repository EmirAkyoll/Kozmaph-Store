import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Toast } from 'src/classes/toast.class';

@Component({
  selector: 'product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  constructor(private store: Store, private toast: Toast) {}

  estimatedDeliveryDate: string = '';
  isProductMarked: boolean = false;
  value: number = 4;
  loading: boolean = false;
  shouldScoreInformationBeShown: boolean = false;
  visible: boolean = false;
  responsiveOptions: any;
  images: any;

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

  addToCart() {
    this.loading = true;

    this.toast.show("Product added to cart.", "success");
    this.store.increaseCart();

    setTimeout(() => {
        this.loading = false
    }, 500);
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

    this.images = [
      {
        itemImageSrc:
          'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
        thumbnailImageSrc:
          'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc:
          'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
        thumbnailImageSrc:
          'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
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
}
