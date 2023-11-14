import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CardModule,
    TableModule
  ],
  exports: [NavbarComponent]
})

export class NavbarModule { }
