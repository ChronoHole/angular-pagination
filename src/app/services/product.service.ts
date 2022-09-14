import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  private _url = environment.apiURL;

  public getProducts() {
    return this._httpClient.get<Product[]>(this._url + '/products');
  }
}
