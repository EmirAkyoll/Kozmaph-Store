import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
import { ProductQuestionsComponent } from './components/product-detail/product-questions/product-questions.component';

import { ConfirmationService, MessageService } from 'primeng/api';

import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfigureDecimalPlacesPipe } from './pipes/configure-decimal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    ProductQuestionsComponent,
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
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
