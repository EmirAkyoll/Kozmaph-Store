import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-in-depth',
  templateUrl: './product-in-depth.component.html',
  styleUrls: ['./product-in-depth.component.css'],
})

export class ProductInDepthComponent implements OnInit {
  constructor(){}

  @Input() inDepthData: any;

  payment_options = [
    { image_url_endpoint: 'whdsbzztawpcazddizmo.webp'},
    { image_url_endpoint: 'e1r7dpkl951sgsjgguq5.webp'},
    { image_url_endpoint: 'r3la1xrlcm7unjwboach.webp'},
    { image_url_endpoint: 'dtkv9b4zbz3rejjtdhmd.png'},
    { image_url_endpoint: 'rmmq94lfhifsto605tea.png'},
    { image_url_endpoint: 'qojtjkaii0iawd5aedcw.jpg'},
    { image_url_endpoint: 'ascblbxbkcop17xiaiea.png'},
  ];

  summaries = [
    {summary_content: 'The promotional sale of this product is limited to stocks. A consumer can purchase a maximum of 10 units of this campaign stock.'},
    {summary_content: 'Kozmaph reserves the right to change the campaign conditions.'},
    {summary_content: 'Click to learn the return policy of the product.'},
    {summary_content: 'This product will be sent by X.'},
    {summary_content: 'View All Products from This Seller'},
    {summary_content: 'The price information you see on the product page is determined by the seller.'}
  ];

  descriptions = [
    {description_content: 'It offers a fast and delicious filter coffee machine with 750W Performance.'},
    {description_content: 'Your fresh coffee is always with you with the 450mL capacity travel cup.'},
    {description_content: 'Easily cleanable with removable filter housing and reusable filter.'},
    {description_content: 'Convenience of safe use with waterless operation and two-step protection against overheating.'},
    {description_content: '750W Performance. Take&Away travel mug.'},
    {description_content: '450 ml water tank. Easy to clean and washable filter.'},
    {description_content: 'Fast coffee in 4 minutes. Waterless operation protection.'},
    {description_content: 'Safe start button. 220-240V AC'},
  ];

  features = [
    {feature_name: 'Color', value: 'Anthracite'},
    {feature_name: 'Brand', value: 'Goldmaster'},
    {feature_name: 'Body Material', value: 'Steel'},
    {feature_name: 'Warranty Period', value: '2 Years'},
  ];

  ngOnInit() {
    console.log("in depth: ", this.inDepthData);
    
  }

  activeIndex: number | null = null;

  toggleItem(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
