import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOverviewComponent } from './components/product-detail/product-overview/product-overview.component';
import { ProductInDepthComponent } from './components/product-detail/product-in-depth/product-in-depth.component';
import { ProductCommentsComponent } from './components/product-detail/product-comments/product-comments.component';
import { ProductQuestionsComponent } from './components/product-detail/product-questions/product-questions.component';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';

import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { DataViewModule } from 'primeng/dataview';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FavoritesComponent,
    CategoriesComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductInDepthComponent,
    ProductOverviewComponent,
    ProductCommentsComponent,
    ProductQuestionsComponent,
    ProductTransactionComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    BadgeModule, GalleriaModule, DialogModule,
    ButtonModule, DividerModule, TagModule,
    AccordionModule, RatingModule, DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
