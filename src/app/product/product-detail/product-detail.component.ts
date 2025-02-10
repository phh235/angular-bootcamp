import { BlogService } from './../../services/BlogService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItemType } from '../../shared/types/ProductItemType';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id = '';

  productItem: ProductItemType = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: '',
    altText: '',
    quantity: 0,
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {
    this.blogService.getBlogDetail(+this.id).subscribe(({ data }: any) => {
      this.productItem.id = data.id;
      this.productItem.imageUrl = data.imageUrl;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
    });
  };
}
