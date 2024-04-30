import { Injectable, inject } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { Product } from '../products/products-models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  http = inject(HttpClient);

  products$ = this.http
    .get<Product[]>(`${this.apiUrl}/products`)
    .pipe(shareReplay(1), catchError(this.handleError));

  categories$ = this.http
    .get<string[]>(`${this.apiUrl}/products/categories`)
    .pipe(shareReplay(1), catchError(this.handleError));

  getProductsByCategory(category: string) {
    return this.http
      .get<Product[]>(`${this.apiUrl}/products/category/${category}`)
      .pipe(shareReplay(1), catchError(this.handleError));
  }

  constructor() {}

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
