import { Component, Input } from '@angular/core';
import { DecimalPipe, NgOptimizedImage, NgIf } from '@angular/common';

import { Product } from '../products-models';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-products-item',
  standalone: true,
  imports: [DecimalPipe, NgOptimizedImage, TruncatePipe, NgIf],
  templateUrl: './products-item.component.html',
  styleUrl: './products-item.component.scss',
})
export class ProductsItemComponent {
  @Input() product!: Product;

  showFullDescription = false;

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
