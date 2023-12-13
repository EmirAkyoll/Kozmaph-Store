import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, Product } from 'src/interfaces/product.interface';
import { ProductService } from './products.service';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  constructor(private http: HttpClient, private productService: ProductService) {}

  addNew(product_id: string, comment: Comment){
    let productDataToUpdate: Product;
    this.productService.getById(product_id).subscribe(
      (product_data: Product) => {
        console.log('Product deleted successfully', product_id);
        productDataToUpdate = product_data;
        console.log("productDataToUpdate BEFORE: ", productDataToUpdate);
        productDataToUpdate.comments?.push(comment);
        console.log("productDataToUpdate AFTER: ", productDataToUpdate);
        this.http.put(`http://localhost:5000/api/products/update-product/${product_id}`, productDataToUpdate).subscribe();
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    )
  }
}
