import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrderService){}

  orders: Order[] = []

  ngOnInit(): void {
    this.orderService.getAll().subscribe(allOrders => {
      this.orders = allOrders;
      console.log("this.orders: ", this.orders);
      
    })
  }
}
