import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/interfaces/product.interface';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { Toast } from 'src/classes/toast.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private toast: Toast,
              private productService: ProductService, 
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {}
  isMobileScreen: boolean = true;
  products: Product[] = [];
  isUpdateProductModalOpen: any = false;
  dataOfTheProductToBeUpdated: any = {};
  isItMarked: boolean = true;
  
  showToast(message: string) {
    this.messageService.add({
    severity: 'success',
    detail: message
   });
  }
  
  removeFromFavorites(product_data: Product, event: Event) {
    event.stopPropagation();
    console.log("VUTUTUUTU");
    product_data.is_marked = false;
    console.log("product_data: ", product_data.is_marked);
  }

  addToFavorites(product_data: Product, event: Event) {
    event.stopPropagation();
    if (product_data.is_marked === false) {
      const user: any = localStorage.getItem('CurrentUserData')
      const user_absolute = JSON.parse(user)
      const favorite: any = {
        productId: product_data._id,
        productName: product_data.name,
        productPrice: product_data.price,
        productImage: product_data.image_urls[0],
      }
      // user_absolute?.favorites.push(favorite)
      console.log("user_absolute: ",user_absolute);
      this.toast.show("Product added to favorites.", "success");
      // localStorage.setItem('CurrentUserData', JSON.stringify(user_absolute))
      // product_data.is_marked = true
    } else {
      // product_data.is_marked = false
      console.log("RATATORRR");
      // this.markChecking(product_data)
    }
    console.log("product_data: ", product_data.is_marked);
  }

  markChecking(product_data: Product){
    const favoriteProductIds: string[] = [];
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);
    for (let index = 0; index < user_absolute?.favorites.length; index++) {
      const favorite_product_id = user_absolute?.favorites[index].productId;
      favoriteProductIds.push(favorite_product_id);
    }
    // console.log("favoriteProductIds: ", favoriteProductIds);
  
    const isExist = favoriteProductIds.includes(product_data._id)
    if (isExist) {
      product_data.is_marked = true
    } else {
      product_data.is_marked = false
    }

    return product_data.is_marked
  }

  closeModal(value: boolean): void {
    this.isUpdateProductModalOpen = value;
  }
  
  openUpdateModal(product_data: Product) {
    this.dataOfTheProductToBeUpdated = product_data;
    console.log("this.dataOfTheProductToBeUpdated: ",this.dataOfTheProductToBeUpdated);
    
    this.isUpdateProductModalOpen = true
  }
  
  deleteProduct(product_id: string): void {
    console.log(product_id, " id'li product is deleted");
    
    this.productService.deleteById(product_id).subscribe(
      (response: any) => {
        console.log('Product deleted successfully', response);
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
      );
      
    this.products = this.products.filter(product => product._id !== product_id);
  }

    productDeletionConfirm(product_id: string) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete this product?',
          header: 'Deletion Confirmation',
          icon: 'pi pi-danger-circle',
          acceptLabel: 'Delete', 
          rejectLabel: 'No',   
          acceptButtonStyleClass: 'p-button-danger',
          rejectButtonStyleClass: 'p-button-info p-button-outlined',  
          accept: () => {
              this.deleteProduct(product_id)
              this.messageService.add({ severity: 'success', detail: 'Product deleted' });
          },
          reject: (type: any) => {
              switch (type) {
                  case ConfirmEventType.REJECT:
                      this.messageService.add({ severity: 'info', detail: 'Deletion have rejected' });
                      break;
                  case ConfirmEventType.CANCEL:
                      this.messageService.add({ severity: 'info', detail: 'Deletion have cancelled' });
                      break;
              }
          }
      });
  }

  ngOnInit() {
    this.productService.getAll().subscribe((product: any) => {
      this.products = product
      console.log("products: ", this.products);
    })
  }
}
