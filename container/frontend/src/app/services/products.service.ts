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
  
  getById(product_id: any): Observable<Product>{
    return this.http.get<Product>(`http://localhost:5000/api/products/get-product/${product_id}`)
  }

  addNew(product_data: Product): Observable<Product>{
    console.log("product_data: ", product_data);
    return this.http.post<Product>('http://localhost:5000/api/products/add-product', product_data)
  }

  update(product_data: Product): Observable<any>{
    console.log("GÜNCELLENMİŞ PRODUCT DATA: ", product_data);
    // const stringifiedProductData = JSON.stringify(product_data);
    return this.http.put(`http://localhost:5000/api/products/update-product/${product_data._id}`, product_data)
  }
  
  deleteById(product_id: string): Observable<any>{
    return this.http.delete(`http://localhost:5000/api/products/delete-product/${product_id}`)
  }
}
