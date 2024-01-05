import { Component, Input, OnInit } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.css'],
})
export class ProductTransactionComponent implements OnInit {
  @Input() product_data: any = {};

  isUpdateProductModalOpen: any = false;
  dataOfTheProductToBeUpdated: any = {};
  products: Product[] = [];

  constructor(private productService: ProductService, 
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
    // console.log("chosen product data: ",this.product_data);
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
    const user: any = localStorage.getItem('CurrentUserData');
    const user_absolute = JSON.parse(user);
    this.productService.getAll().subscribe((product: any) => {
      this.products = product
      this.products = this.products.filter((product: Product) => product.seller === user_absolute?.full_name)
    })
    console.log("products: ", this.products);
  }
}
