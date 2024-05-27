import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface'; // Import the Product interface
import { ProductService } from '../product.service'; // Import the ProductService
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  showFull: boolean = false;
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  getDetails(product: any){
    this.router.navigate(['/details-component'], {state : { product }});
  }

  
}


