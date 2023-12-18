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
    const user: any = localStorage.getItem('CurrentUserData')
    const user_absolute: any = JSON.parse(user);
    this.numberOfProductsInCart = user_absolute.cart.length

    if (window.innerWidth < 750) {
        this.isMobileScreen = true
    } else {
        this.isMobileScreen = false
    }
    
    this.store.numberOfProductsInTheCart$.subscribe(data => {
      this.numberOfProductsInCart = data;
    })

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
