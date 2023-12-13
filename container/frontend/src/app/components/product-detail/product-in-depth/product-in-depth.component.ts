import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-in-depth',
  templateUrl: './product-in-depth.component.html',
  styleUrls: ['./product-in-depth.component.css'],
})

export class ProductInDepthComponent implements OnInit {
  constructor(){}

  @Input() inDepthData: any;

  summaries: any;
  descriptions: any;
  features: any;

  payment_options = [
    { image_url_endpoint: 'whdsbzztawpcazddizmo.webp'},
    { image_url_endpoint: 'e1r7dpkl951sgsjgguq5.webp'},
    { image_url_endpoint: 'r3la1xrlcm7unjwboach.webp'},
    { image_url_endpoint: 'dtkv9b4zbz3rejjtdhmd.png'},
    { image_url_endpoint: 'rmmq94lfhifsto605tea.png'},
    { image_url_endpoint: 'qojtjkaii0iawd5aedcw.jpg'},
    { image_url_endpoint: 'ascblbxbkcop17xiaiea.png'},
  ];

  ngOnInit() {
    this.summaries = this.inDepthData.summary
    this.descriptions = this.inDepthData.description
    this.features = this.inDepthData.features
    
    console.log("in depth: ", this.inDepthData);
  }

  activeIndex: number | null = null;

  toggleItem(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
