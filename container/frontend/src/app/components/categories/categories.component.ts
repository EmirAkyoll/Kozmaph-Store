import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})

export class CategoriesComponent implements OnInit {
  constructor(private store: Store, private categoryService: CategoryService) {}

  isMobileScreen: boolean = true;
  exceptionClasses: string[] = ['category-item'];
  hideSubsTimer: any;
  shouldSubcategoriesBeShown: boolean = false;
  sub_categories: any = [];
  categories: Category[] = [];

  ngOnInit() {
    if (window.innerWidth < 750) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }

    this.categoryService.getAll().subscribe(allCategories => {      
      this.categories = allCategories;
      console.log("categories: ", this.categories);

      this.store.saveCategories(this.categories)
    })
    
  }

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
    const foundCategory = this.categories.find(
      (category) => category.category_name === event.target.innerText
    );

    if (foundCategory) {
      const subcategoriesOfFoundCategory = foundCategory.sub_categories;
      this.sub_categories = subcategoriesOfFoundCategory;
      console.log("categories: ",subcategoriesOfFoundCategory);
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
