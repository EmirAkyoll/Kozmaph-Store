import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  constructor(private store: Store, private router: Router) {}

  value: any = ""
  isMobileScreen: any;
  showUserOptions: boolean = false;
  isAddingProductModalVisible: boolean = false;
  numberOfProductsInCart: number = 0;
  exceptionClasses: string[] = ['dropdown', 'account-nav'];
  shouldDropdownMenuBeShown: boolean = false;
  isUserASeller: boolean = false;
  isUserExist: boolean = false;
  searchInputValue: string = '';

  onSearchInputChange(value: string) {
    // console.log('Input değeri değişti:', value);
    // Burada başka işlemler yapabilirsiniz.
    this.store.setSearchTerm(value);
    this.store.searchTerm$.subscribe(term => {console.log("term: ", term)});
  }

  logOut(){
    this.isUserExist = false;
    
    this.router.navigate(['/auth']);

    setTimeout(() => {
      localStorage.removeItem('CurrentUserData')
    }, 1000);
  }

  showModal() {
    this.isAddingProductModalVisible = true;
  }

  closeModal(){
    this.isAddingProductModalVisible = false;
  }

  toggleUserOptions(){
    this.shouldDropdownMenuBeShown = !this.shouldDropdownMenuBeShown;
  }

  ngOnInit() {
    if (window.innerWidth < 750) {
      this.isMobileScreen = true
    } else {
      this.isMobileScreen = false
    }
    const user: any = localStorage.getItem('CurrentUserData')
    const user_absolute: any = JSON.parse(user);
    this.numberOfProductsInCart = user_absolute?.cart.length | 0

    this.isUserExist = !!user_absolute;
    console.log("this.isUserExist: ", this.isUserExist);
    
    if (user_absolute.title === 'Seller') {
      this.isUserASeller = true;
    } else {
      this.isUserASeller = false;
    } 
    
    this.store.numberOfProductsInTheCart$.subscribe(data => {
      this.numberOfProductsInCart = data;
    })
  }

  @HostListener('document:click', ['$event'])
  hideElement(event: any): void {
    // Check if the clicked element is treated as an exception.
    const isExceptionElement = this.exceptionClasses.some((exceptionClass) =>
      event.target.closest(`.${exceptionClass}`)
    );

    // If the clicked element is not an element treated as an exception and subcategories are shown, hide subcategories.
    if (!isExceptionElement) {
      this.shouldDropdownMenuBeShown = false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log(`before: ${changes}`);
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
