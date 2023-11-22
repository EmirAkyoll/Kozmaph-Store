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

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { OverlayModule } from 'primeng/overlay';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
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
    CardModule, ImageModule, BadgeModule, MegaMenuModule,
    MenuModule, GalleriaModule, CarouselModule, OverlayModule,
    ButtonModule, DividerModule, OverlayPanelModule, TagModule,
    AccordionModule, DialogModule, InputTextareaModule, TooltipModule,
    RatingModule, DataViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
