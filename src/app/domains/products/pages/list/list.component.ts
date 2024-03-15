import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../../domians/shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: 1,
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=11',
        creationAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=13',
        creationAt: new Date().toISOString()
      },
      {
        id: 4,
        title: 'Producto 4',
        price: 400,
        image: 'https://picsum.photos/640/640?r=14',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
