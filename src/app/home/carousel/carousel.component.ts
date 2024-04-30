import { Component } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgOptimizedImage],
  providers: [NgbCarouselConfig],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = [
    '/assets/carousel/1.webp',
    '/assets/carousel/2.webp',
    '/assets/carousel/3.webp',
  ];

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }
}
