import {
  Component,
  OnInit,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { ProductsService } from '../products.service';
import { Product } from '../products-models';
import { ProductCategoriesComponent } from '../product-categories/product-categories.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductSortingComponent } from '../product-sorting/product-sorting.component';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [
    NgIf,
    ProductCategoriesComponent,
    ProductsListComponent,
    ProductSortingComponent,
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss',
})
export class ProductsContainerComponent {
  productsService = inject(ProductsService);
  pageTitle = 'Products';
  errorMessage = '';

  sortingMethod = signal<string>('priceAsc');

  categories = computed(() => {
    try {
      return this.productsService.categories();
    } catch (error) {
      this.errorMessage = typeof error === 'string' ? error : 'Error';
      return [];
    }
  });

  selectedCategoryProducts = computed(() => {
    try {
      return this.productsService.selectedCategoryProducts();
    } catch (error) {
      this.errorMessage = typeof error === 'string' ? error : 'Error';
      return [];
    }
  });

  onSelectedCategory(category: string): void {
    this.productsService.selectCategory(category);
  }

  onSortingMethod(sorting: string): void {
    this.sortingMethod.set(sorting);
  }

  sortedCategoryProducts = computed(() => {
    let products = this.productsService.selectedCategoryProducts();

    switch (this.sortingMethod()) {
      case 'priceAsc':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  });
}
