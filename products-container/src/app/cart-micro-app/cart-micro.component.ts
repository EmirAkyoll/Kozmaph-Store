import { AfterContentInit, Component } from '@angular/core';
import { mount } from 'cartMicro/cartApp';
  
@Component({
  selector: 'app-react-app',
  templateUrl: './cart-micro.component.html',
  styleUrls: ['./cart-micro.component.css']
})
export class CartComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const fetch_el= document.getElementById('cart')
    mount(fetch_el);
  }
}
