import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { ProductItemType } from '../../types/ProductItemType';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CurrencyPipe, NgFor, FormsModule, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges, OnDestroy {
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['products'].currentValue);
    console.log(changes['products'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('Component is remove');
  }

  handleDeleteProduct = (id: number) => {
    this.dataEvent.emit(id);
  }
}
