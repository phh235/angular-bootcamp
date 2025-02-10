import { BlogItem } from './../../shared/types/ProductItemType';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BlogService } from '../../services/BlogService';

@Component({
  selector: 'app-product-add',
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }

  constructor(private blogService: BlogService, private router: Router) { }

  handleAddProduct() {
    this.product.markAllAsTouched(); // Đánh dấu tất cả các field là touched để kích hoạt validation

    if (this.product.invalid) return;

    const blogItem: BlogItem = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'phh235'
    }
    this.blogService.postBlog(blogItem).subscribe(({ data }: any) => {
      if (data.id) {
        this.router.navigate(['/product']);
      }
      console.log(data);
    });

    console.log(this.name?.value);
    console.log(this.price?.value);
  }

  handleReset() {
    this.product.reset();
  }
}
