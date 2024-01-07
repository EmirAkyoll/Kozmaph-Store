import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>('https://kozmaph-product-service.onrender.com/api/categories/get-all')
  }
}
