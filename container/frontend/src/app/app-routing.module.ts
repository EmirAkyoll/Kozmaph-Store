import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart-micro-app/cart-micro.component';
import { AuthComponent } from './auth-micro-app/auth-micro.component';
import { ProductsComponent } from './components/products/products.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'transactions',
    component: ProductTransactionComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
