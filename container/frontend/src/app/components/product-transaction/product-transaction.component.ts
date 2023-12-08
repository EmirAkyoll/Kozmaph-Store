import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.css'],
})
export class ProductTransactionComponent implements OnInit {
  @Input() product_data: any = {};

  constructor(private productService: ProductService) {
    // console.log("chosen product data: ",this.product_data);
  }

  deleteProduct(product_id: string): void{
    // this.productService.deleteById(product_id)
    console.log(product_id ," idli product is deleted");
  }

  ngOnInit() {
    console.log("chosen product data: ",this.product_data);
  }
}
