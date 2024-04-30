import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { Product } from '../products-models';
import { ProductsItemComponent } from '../products-item/products-item.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductsItemComponent, NgFor],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  @Input() products!: Product[];

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
