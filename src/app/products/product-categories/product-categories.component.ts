import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  onSelected(category: string): void {
    this.categorySelected.emit(category);
  }
}
