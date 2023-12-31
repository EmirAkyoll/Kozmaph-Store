import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/product-transaction/add-product/add-product.component';
import { ProductTransactionComponent } from './components/product-transaction/product-transaction.component';
import { ProductInDepthComponent } from './components/product-detail/product-in-depth/product-in-depth.component';
import { UpdateProductComponent } from './components/product-transaction/update-product/update-product.component';
import { ProductOverviewComponent } from './components/product-detail/product-overview/product-overview.component';
import { ProductCommentsComponent } from './components/product-detail/product-comments/product-comments.component';

import { ConfirmationService, MessageService } from 'primeng/api';

import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { GalleriaModule } from 'primeng/galleria';
import { DataViewModule } from 'primeng/dataview';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfigureDecimalPlacesPipe } from './pipes/configure-decimal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    ProductsComponent,
    FavoritesComponent,
    CategoriesComponent,
    AddProductComponent,
    ProductCardComponent,
    UpdateProductComponent,
    ProductDetailComponent,
    ProductInDepthComponent,
    ProductOverviewComponent,
    ProductCommentsComponent,
    ProductTransactionComponent,
    
    ConfigureDecimalPlacesPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    BadgeModule, GalleriaModule, DialogModule, MessagesModule,
    ButtonModule, DividerModule, TagModule, ToastModule,
    AccordionModule, RatingModule, DataViewModule,
    CheckboxModule, FileUploadModule, InputNumberModule,
    ConfirmDialogModule, MultiSelectModule, StepsModule,
    ConfirmPopupModule, 
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
