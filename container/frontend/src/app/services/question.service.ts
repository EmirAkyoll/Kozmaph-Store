import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Question } from 'src/interfaces/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  constructor(private http: HttpClient, private productService: ProductService) {}

  addNewQuestionOrAnswer(product_id: string, question: Question){
    let productDataToUpdate: Product;
    this.productService.getById(product_id).subscribe(
      (product_data: Product) => {
        productDataToUpdate = product_data;
        productDataToUpdate.questions?.push(question);
        this.productService.update(productDataToUpdate).subscribe()
      },
      (error: any) => {
        console.error('Error adding product:', error);
      }
    )
  }

  update(){}
  delete(){}
}
