import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from 'src/models/Product';
import Api from 'src/utils/Api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getAllProducts(params?: any): Observable<Product> {
    return Api.get('/products/', params)
      .pipe(switchMap((result) => from(result.response)))
      .pipe(map((product: Product) => product));
  }
}
