import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductOverviewComponent } from './components/product-detail/product-overview/product-overview.component';
import { ProductInDepthComponent } from './components/product-detail/product-in-depth/product-in-depth.component';
import { ProductCommentsComponent } from './components/product-detail/product-comments/product-comments.component';
import { ProductQuestionsComponent } from './components/product-detail/product-questions/product-questions.component';

import { BadgeModule } from 'primeng/badge';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    FavoritesComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductDetailComponent,
    ProductOverviewComponent,
    ProductInDepthComponent,
    ProductCommentsComponent,
    ProductQuestionsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    BadgeModule, GalleriaModule, 
    ButtonModule, DividerModule, TagModule,
    AccordionModule, RatingModule, DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
