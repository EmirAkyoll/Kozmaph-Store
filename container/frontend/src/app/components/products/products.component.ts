import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {
    
  }
  isMobileScreen: boolean = true;
  products: Product[] = [];

  ngOnInit() {
    this.productService.getAll().subscribe((product: any) => {
      this.products = product
    })
    console.log("products: ", this.products);
  }
}
