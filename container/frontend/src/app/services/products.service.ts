import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5000/api/products/get-all')
  }

  addNew(product_data: Product): Observable<Product>{
    console.log("product_data: ", product_data);
    return this.http.post<Product>('http://localhost:5000/api/products/add-product', product_data)
  }
  
  uploadMediaFiles(media_files: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/media/upload', media_files)
  }
}
