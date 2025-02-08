import { Component } from '@angular/core';
import { ProductItemType } from '../shared/types/ProductItemType';
import { ProductItemComponent } from '../shared/product-item/product-item.component';
import { isBuffer } from 'util';

@Component({
  selector: 'product',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: ProductItemType[] = [
    {
      "id": 1,
      "name": "PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24\" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT",
      "price": 1499,
      "imageUrl": "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
      "altText": "Apple iMac 2023",
      "quantity": 1
    },
    {
      "id": 2,
      "name": "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
      "price": 598,
      "imageUrl": "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg",
      "altText": "Apple Watch Series 8",
      "quantity": 1
    },
    {
      "id": 3,
      "name": "Apple - MacBook Pro 16\" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black",
      "price": 1799,
      "imageUrl": "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg",
      "altText": "Apple MacBook Pro 16\"",
      "quantity": 1
    },
    {
      "id": 4,
      "name": "Tablet APPLE iPad Pro 12.9\" 6th Gen, 128GB, Wi-Fi, Gold",
      "price": 699,
      "imageUrl": "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg",
      "altText": "Apple iPad Pro 12.9\"",
      "quantity": 1
    },
    {
      "id": 5,
      "name": "APPLE iPhone 15 5G phone, 256GB, Gold",
      "price": 2997,
      "imageUrl": "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
      "altText": "Apple iPhone 15",
      "quantity": 1
    }
  ];

  totalPrice(product: any): number {
    return product.price * product.quantity;
  }

  decrementQuantity(product: any): void {
    product.quantity--;
  }

  incrementQuantity(product: any): void {
    product.quantity++;
  }

  handleDeleteProduct = (id: number) => {
    this.products = this.products.filter(product => product.id !== id);
  }
}
