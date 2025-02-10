import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './features/about/about.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LoginComponent } from './features/login/login.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'product', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
  { path: 'product/add-new', loadComponent: () => import('./product/product-add/product-add.component').then(m => m.ProductAddComponent) },
  { path: 'product/detail/:id', loadComponent: () => import('./product/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) }
];
