import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { OverlayModule } from 'primeng/overlay';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    FavoritesComponent,
    ProductsComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CardModule, 
    ImageModule,
    BadgeModule,
    MegaMenuModule,
    MenuModule,
    GalleriaModule,
    CarouselModule,
    OverlayModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
