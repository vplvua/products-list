import { Injectable, computed, inject, signal } from '@angular/core';

import { ApiService } from '../api/api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Product } from './products-models';
import { switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiService = inject(ApiService);

  categories = toSignal(this.apiService.categories$, {
    initialValue: [] as string[],
  });

  selectedCategory = signal<string>('electronics');

  selectCategory(categoryTitle: string) {
    this.selectedCategory.set(categoryTitle);
  }

  categoryProducts$ = toObservable(this.selectedCategory).pipe(
    switchMap((category) => this.apiService.getProductsByCategory(category))
  );

  selectedCategoryProducts = toSignal(this.categoryProducts$, {
    initialValue: [] as Product[],
  });

  constructor() {}
}
