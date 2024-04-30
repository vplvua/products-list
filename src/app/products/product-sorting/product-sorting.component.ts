import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sorting',
  standalone: true,
  imports: [],
  templateUrl: './product-sorting.component.html',
  styleUrl: './product-sorting.component.scss',
})
export class ProductSortingComponent {
  pageTitle = 'Sorting';
  @Output() sortingMethod = new EventEmitter<string>();

  onSortingMethod(sorting: string): void {
    this.sortingMethod.emit(sorting);
  }
}
