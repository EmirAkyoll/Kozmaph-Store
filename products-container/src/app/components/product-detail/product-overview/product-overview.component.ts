import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  constructor() {}

  isProductMarked: boolean = false;
  value: number = 4;
  loading: boolean = false;
  shouldScoreInformationBeShown: boolean = false;
  visible: boolean = false;
  responsiveOptions: any;
  images: any;

  showDialog() {
    this.visible = true;
  }

  closeModal(){
    this.visible = false;
  }

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
  }

  
  toggleProductMarking() {
    this.isProductMarked = !this.isProductMarked;
  }

  showScoreInformation() {
    this.shouldScoreInformationBeShown = true;
  }
  hideScoreInformation() {
    this.shouldScoreInformationBeShown = false;
  }
  ngOnInit() {
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