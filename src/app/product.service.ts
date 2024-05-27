import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: 'Cactus Jack T-shirt For Men', price: 750, sellingPrice: 1000, image: '/assets/shirt.jpg'},
    { id: 2, name: 'Cadbury Dairy Milk', price: 150, sellingPrice: 250, image: '/assets/choc.jpg' },
    { id: 3, name: 'New Comfortable Winter Wool Boot For Women', price: 1550, sellingPrice: 2200, image: '/assets/shoes.webp' },
    { id: 4, name: 'Fix DERMA Shadow SPF 50+ Cream 75g', price: 799, sellingPrice: 880, image: '/assets/skin.jpeg' },
    { id: 5, name: 'Atomic Habits By James Clear', price: 150, sellingPrice: 600, image: '/assets/ah.webp'},
    { id: 6, name: 'Storage Box Foldable Large Capacity', price: 639, sellingPrice: 1000, image: '/assets/sb.jpg' },
    { id: 7, name: 'Ultima Atom 192 Bluetooth Truly Wireless Earbuds', price: 2100, sellingPrice: 3600, image: '/assets/ultima.png' },
    { id: 8, name: 'Cetaphil Baby Daily Lotion 400 Ml', price: 975, sellingPrice: 1300, image: '/assets/cetaphil.jpeg' },
    { id: 9, name: 'Bagmati Blue Plastic Hanger (12 Pieces)', price: 279, sellingPrice: 375, image: '/assets/hanger.jpg' },
    { id: 10, name: 'Smart Watch Strape Belt For Ultra Watch T800', price: 199, sellingPrice: 399, image: '/assets/apple.jpg' }
  ]

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
