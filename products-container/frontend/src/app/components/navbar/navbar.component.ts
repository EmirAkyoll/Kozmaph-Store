import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value: any = ""
  isMobileScreen: boolean = true;
  showUserOptions: boolean = false;
  isAddingProductModalVisible: boolean = false;

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
