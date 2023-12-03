import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/category.interface';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5000/api/products/get-all')
  }
  
  addNew(product_data: Product): Observable<Product[]>{
    return this.http.post<Product[]>('http://localhost:5000/api/products/add-product', product_data)
  }
}
