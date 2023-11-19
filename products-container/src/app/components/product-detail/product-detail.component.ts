import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
constructor() {}

shouldScoreInformationBeShown: boolean = false;
responsiveOptions: any;
images: any;

showScoreInformation(){
  this.shouldScoreInformationBeShown = true;
}
hideScoreInformation(){
  this.shouldScoreInformationBeShown = false;
}

ngOnInit() {
  this.images = [
    {
      itemImageSrc: 'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
      thumbnailImageSrc: 'https://cdn.dsmcdn.com/ty986/product/media/images/20230815/0/403261825/480842529/2/2_org_zoom.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
  },
    {
      itemImageSrc: 'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
      thumbnailImageSrc: 'https://cdn.dsmcdn.com/ty1012/product/media/images/prod/PIM/20231011/07/9e63857f-350f-433e-99bc-65c1e7870665/1_org_zoom.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
  },
  //   {
  //     itemImageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSh0gYWRlzA16EF3ND5BE9GpaqTw1g4rsfttcC4h9MMlKR5gbJ2KDATeNYGLZ7Ta23FSdEmvTuDLQBEdJ_Df0yAUXMQrOMpIL9NbhqSklMQMdm5gPVdUdGo2w&usqp=CAE',
  //     thumbnailImageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSh0gYWRlzA16EF3ND5BE9GpaqTw1g4rsfttcC4h9MMlKR5gbJ2KDATeNYGLZ7Ta23FSdEmvTuDLQBEdJ_Df0yAUXMQrOMpIL9NbhqSklMQMdm5gPVdUdGo2w&usqp=CAE',
  //     alt: 'Description for Image 1',
  //     title: 'Title 1'
  // },
  
  ]
  this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
}
}
