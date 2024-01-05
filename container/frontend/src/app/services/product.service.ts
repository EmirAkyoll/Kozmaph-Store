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
    return this.http.get<Product[]>('https://kozmaph-product-service.onrender.com/api/products/get-all')
  }
  
  getById(product_id: any): Observable<Product>{
    return this.http.get<Product>(`https://kozmaph-product-service.onrender.com/api/products/get-product/${product_id}`)
  }
  
  getAllById(product_id: any): Observable<Product>{
    return this.http.get<Product>(`https://kozmaph-product-service.onrender.com/api/products/get-all-by/${product_id}`)
  }

  addNew(product_data: Product): Observable<Product>{
    console.log("product_data: ", product_data);
    return this.http.post<Product>('https://kozmaph-product-service.onrender.com/api/products/add-product', product_data)
  }

  update(product_data: Product): Observable<any>{
    console.log("Updated PRODUCT DATA: ", product_data);
    // const stringifiedProductData = JSON.stringify(product_data);
    return this.http.put(`https://kozmaph-product-service.onrender.com/api/products/update-product/${product_data._id}`, product_data)
  }
  
  deleteById(product_id: string): Observable<any>{
    return this.http.delete(`https://kozmaph-product-service.onrender.com/api/products/delete-product/${product_id}`)
  }
}
