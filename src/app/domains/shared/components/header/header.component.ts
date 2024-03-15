import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];

  total = signal(0);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cart']) {
      this.total.set(this.calculateTotal());
    }
  }

  toogleSideMenu(){
    this.hideSideMenu.update((prev) => !prev);
  }

  calculateTotal(){
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}
