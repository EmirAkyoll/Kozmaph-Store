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

  isMobileScreen: boolean = false;
  orders: Order[] = []

  getOrders(){
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);

    this.orderService.getAllById(user_absolute.id).subscribe(allOrders => {
      this.orders = allOrders;
      console.log("this.orders: ", this.orders);
      
    })
  }

  ngOnInit(): void {
    if (window.innerWidth < 650) {
      this.isMobileScreen = true
    } else {
      this.isMobileScreen = false
    }

    this.getOrders();
  }
}
