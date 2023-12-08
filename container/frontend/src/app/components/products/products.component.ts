import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  isMobileScreen: boolean = true;
  products: Product[] = [];
  isUpdateProductModalOpen: boolean = false;
  dataOfTheProductToBeUpdated: any = {};
  
  openUpdateModal(product_data: Product) {
    this.dataOfTheProductToBeUpdated = product_data;
    console.log("this.dataOfTheProductToBeUpdated: ",this.dataOfTheProductToBeUpdated);
    
    this.isUpdateProductModalOpen = true
  }

  deleteProduct(product_id: string): void {
    console.log(product_id, " id'li product is deleted");
    
    this.productService.deleteById(product_id).subscribe(
      (response: any) => {
        console.log('Product deleted successfully', response);
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  ngOnInit() {
    this.productService.getAll().subscribe((product: any) => {
      this.products = product
    })
    console.log("products: ", this.products);
  }
}
