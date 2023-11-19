import { Component, HostListener } from '@angular/core';
import { categoryTree } from './category-tree';

export interface Category {
  category_name?: string;
  subcategory_name?: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent {
  constructor() {
    console.log(categoryTree);
  }
  
  // Define the classes of elements to be treated as exceptions as an array.
  exceptionClasses: string[] = ['category-item'];
  hideSubsTimer: any;
  shouldSubcategoriesBeShown: boolean = false;
  subcategories: Category[] = [];
  categories: Category[] = [
    { category_name: 'Clothes' },
    { category_name: 'Accessory' },
    { category_name: 'House' },
    { category_name: 'Electronic' },
    { category_name: 'Cosmetic' },
    { category_name: 'Spor' },
    { category_name: 'Outdoor' },
    { category_name: 'Market' },
    { category_name: 'Stationary' },
  ];

  showSubs(event: any): void {
    // If the user is not on the same category, cancel showing subcategories.
    this.hideSubsTimer = setTimeout(() => {
      this.shouldSubcategoriesBeShown = true;
      this.bringSubcategories(event);
    }, 250);
  }

  hideSubs(): void {
    clearTimeout(this.hideSubsTimer);
  }

  cancelHideSubsTimer(): void {
    clearTimeout(this.hideSubsTimer);
  }

  bringSubcategories(event: any): void {
    const foundCategory = categoryTree.find(
      (category) => category.category_name === event.target.innerText
    );

    if (foundCategory) {
      const subcategoriesOfFoundCategory = foundCategory.subcategories;
      this.subcategories = subcategoriesOfFoundCategory;
      // console.log("categories: ",subcategoriesOfFoundCategory);
    } else {
      console.log('The specified category was not found.');
    }
  }

  @HostListener('document:click', ['$event'])
  hideElement(event: any): void {
    // Check if the clicked element is treated as an exception.
    const isExceptionElement = this.exceptionClasses.some((exceptionClass) =>
      event.target.closest(`.${exceptionClass}`)
    );

    // If the clicked element is not an element treated as an exception and subcategories are shown, hide subcategories.
    if (!isExceptionElement && this.shouldSubcategoriesBeShown) {
      this.shouldSubcategoriesBeShown = false;
    }
  }
}
