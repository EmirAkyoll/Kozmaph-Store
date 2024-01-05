import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class Store {
    // The state where the number of products in the cart is kept.
  private user: any = localStorage.getItem('CurrentUserData')
  private user_absolute: any = JSON.parse(this.user);
  private currentCount = this.user_absolute?.cart.length;
  private numberOfProductsInTheCart = new BehaviorSubject<number>(this.currentCount);
  numberOfProductsInTheCart$ = this.numberOfProductsInTheCart.asObservable();
  increaseCart(): void {
    console.log("currentCount: ", this.currentCount);
    this.numberOfProductsInTheCart.next(this.currentCount + 1);
  }
  decreaseCart(): void {
    this.numberOfProductsInTheCart.next(this.currentCount - 1);
  }

  // categories data
  private categories = new BehaviorSubject<Category[]>([]);
  categories$ = this.categories.asObservable();
  saveCategories(categories_data: Category[]): void {
    this.categories.next(categories_data);
  }
}
