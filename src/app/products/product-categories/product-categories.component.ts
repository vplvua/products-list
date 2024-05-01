import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
})
export class ProductCategoriesComponent {
  pageTitle = 'Categories';
  @Input() categories!: string[];
  @Output() categorySelected = new EventEmitter<string>();
  productsService = inject(ProductsService);

  selectedCategory = this.productsService.selectedCategory;

  onSelected(category: string): void {
    this.categorySelected.emit(category);
  }
}
