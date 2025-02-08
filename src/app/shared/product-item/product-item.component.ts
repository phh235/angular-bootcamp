import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItemType } from '../types/ProductItemType';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CurrencyPipe, NgFor, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() products: ProductItemType[] = [];
  @Input() decrementQuantity!: (product: ProductItemType) => void;
  @Input() incrementQuantity!: (product: ProductItemType) => void;

  @Output() dataEvent = new EventEmitter<number>();

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return sum;
  }

  handleDeleteProduct = (id: number) => {
    this.dataEvent.emit(id);
  }
}
