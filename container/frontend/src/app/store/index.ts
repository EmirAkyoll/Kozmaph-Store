import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Store {
    // The state where the number of products in the cart is kept.
  private numberOfProductsInTheCart = new BehaviorSubject<number>(0);
  numberOfProductsInTheCart$ = this.numberOfProductsInTheCart.asObservable();
  increaseCart(): void {
    const currentCount = this.numberOfProductsInTheCart.value;
    this.numberOfProductsInTheCart.next(currentCount + 1);
  }
  decreaseCart(): void {
    const currentCount = this.numberOfProductsInTheCart.value;
    this.numberOfProductsInTheCart.next(currentCount - 1);
  }
  
//   private sharedData = new BehaviorSubject<string>('Initial Data');
}
