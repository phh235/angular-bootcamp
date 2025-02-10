import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './features/about/about.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'product', component: ProductComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, }
];
