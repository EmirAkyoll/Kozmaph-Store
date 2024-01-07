import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient) {}

  getAllById(buyer_id: string): Observable<Order[]>{
    return this.http.get<Order[]>(`http://localhost:8080/api/orders/get-all/${buyer_id}`)
  }
}
