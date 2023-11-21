import { Component } from '@angular/core';

@Component({
  selector: 'product-in-depth',
  templateUrl: './product-in-depth.component.html',
  styleUrls: ['./product-in-depth.component.css'],
})

export class ProductInDepthComponent {
  // items = [
  //   { header: 'Payment Options', content: 'Content for item 1' },
  //   { header: 'Summary', content: 'Content for item 2' },
  //   { header: 'Description', content: 'Content for item 3' },
  //   { header: 'Features', content: 'Content for item 3' },
  // ];

  activeIndex: number | null = null;

  toggleItem(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
