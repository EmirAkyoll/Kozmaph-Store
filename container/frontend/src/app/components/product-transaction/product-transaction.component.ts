import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.css'],
})
export class ProductTransactionComponent {
  constructor(private productService: ProductService) {}

  deleteProduct(product_id: string): void{
    this.productService.deleteById(product_id)
    console.log(product_id ," idli product is deleted");
  }
}
