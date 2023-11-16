import { Component, HostListener } from '@angular/core';

export interface Category{
  category_name: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  constructor(){}
  
  // Define the classes of elements to be treated as exceptions as an array.
  exceptionClasses: string[] = ['category-item',];
  shouldSubcategoriesBeShown: boolean = false;
  categories: Category[] = [
    {category_name: 'Clothes'}, 
    {category_name: 'Accessory'}, 
    {category_name: 'House'}, 
    {category_name: 'Cosmetic'}, 
    {category_name: 'Spor'}, 
    {category_name: 'Outdoor'}, 
    {category_name: 'Market'}, 
    {category_name: 'Stationary'}, 
  ];

  showSubs(): void {
    this.shouldSubcategoriesBeShown = true;
  }

  hideSubs(): void {
    this.shouldSubcategoriesBeShown = false;
  }

  @HostListener('document:click', ['$event'])
  hideElement(event: any): void {
       // Check if the clicked element is treated as an exception.
       const isExceptionElement = this.exceptionClasses.some(
        exceptionClass => event.target.closest(`.${exceptionClass}`)
      );
  
      // If the clicked element is not an element treated as an exception and subcategories are shown, hide subcategories.
      if (!isExceptionElement && this.shouldSubcategoriesBeShown) {
        this.shouldSubcategoriesBeShown = false;
      }
  }
}
