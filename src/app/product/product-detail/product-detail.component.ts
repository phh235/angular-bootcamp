import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }
}
