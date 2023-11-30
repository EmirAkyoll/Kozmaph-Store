import { Component } from '@angular/core';

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.css'],
})
export class ProductTransactionComponent {
  constructor() {}

  advantages: string[] = [];
  summaries: string[] = [];
  descriptions: string[] = [];
  features: any[] = [];

  addContent(array_name: string, content: any): void {
    switch (array_name) {
      case "summaries":
        this.summaries.push(content);
        break;
        
        case "descriptions":
        this.descriptions.push(content);
        break;

      case "features":
        this.features.push(content);
        break;
    
      default:
        break;
    }
  }

  removeContent(array_name: string, index: number): void {
    switch (array_name) {
      case "summaries":
        this.summaries.splice(index, 1);
        break;
        
        case "descriptions":
        this.descriptions.splice(index, 1);
        break;

      case "features":
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
