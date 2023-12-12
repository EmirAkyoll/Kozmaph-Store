import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  constructor(private store: Store) {}

  value: any = ""
  isMobileScreen: boolean = true;
  showUserOptions: boolean = false;
  isAddingProductModalVisible: boolean = false;
  numberOfProductsInCart: number = 0;

  showModal() {
    this.isAddingProductModalVisible = true;
  }

  closeModal(){
    this.isAddingProductModalVisible = false;
  }

  toggleUserOptions(){
    this.showUserOptions = !this.showUserOptions;
  }

  ngOnInit() {
    if (window.innerWidth < 750) {
        this.isMobileScreen = true
    } else {
        this.isMobileScreen = false
    }
    
    // console.log("numberOfProductsInCart BEFORE: ", this.numberOfProductsInCart);
    this.store.numberOfProductsInTheCart$.subscribe(data => {
      this.numberOfProductsInCart = data;
    })
    // console.log("numberOfProductsInCart AFTER: ", this.numberOfProductsInCart);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes) {
      console.log(`Önceki Değer: ${changes}`);
    }
  }

  items = [
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Angular',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                routerLink: '/fileupload'
            }
        ]
    }
];
}
