import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products-container/products-container.component').then(
        (c) => c.ProductsContainerComponent
      ),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
