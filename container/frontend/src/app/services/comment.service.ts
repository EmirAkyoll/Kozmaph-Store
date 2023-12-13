import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        productDataToUpdate = product_data;
        productDataToUpdate.comments?.push(comment);
        this.productService.update(productDataToUpdate).subscribe()
        // this.http.put(`http://localhost:5000/api/products/update-product/${product_id}`, productDataToUpdate).subscribe();
      },
      (error: any) => {
        console.error('Error adding product:', error);
      }
    )
  }

  update(){}
  delete(){}
}
