import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store';
import { Toast } from 'src/classes/toast.class';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor(private store: Store, private toast: Toast){}
  favorite_products: any[] = [];

  addToCart(product_data: any, event: Event) {
    
    event.stopPropagation();
    if (!this.markCheckingCart(product_data.productId)) {
      console.log("product_data: ", product_data);
      const user: any = localStorage.getItem('CurrentUserData')
      const user_absolute = JSON.parse(user)
      const cartItem: any = {
        productId: product_data.productId,
        productName: product_data.productName,
        productPrice: product_data.productPrice,
        productImage: product_data.productImage,
        productSeller: product_data.productSeller,
        productQuantity: 1
      }
      user_absolute?.cart.push(cartItem)
      console.log("user_absolute: ",user_absolute);
      localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
      this.store.increaseCart()
    }
    this.toast.show("Added to CART.", "success");
  }

  removeFromFavorites(product_data: any, event: Event) {  
    event.stopPropagation();
    const user: any = localStorage.getItem('CurrentUserData')
    let user_absolute = JSON.parse(user)
    user_absolute.favorites = user_absolute?.favorites.filter((favorite: any) => favorite.productId !== product_data.productId)
    this.favorite_products = user_absolute?.favorites;
    localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
    this.toast.show("Added to FAVORITES.", "success");
  }
 
  markCheckingCart(product_id: string){
    const productIds: string[] = [];
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);
    for (let index = 0; index < user_absolute?.cart.length; index++) {
      const product_id = user_absolute?.cart[index].productId;
      productIds.push(product_id);
    }
    // console.log("favoriteProductIds: ", favoriteProductIds);
  
    return productIds.includes(product_id)
  }

  ngOnInit() {
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);

    this.favorite_products = user_absolute?.favorites;
    console.log("favorite_products: ", this.favorite_products);
  }
}
