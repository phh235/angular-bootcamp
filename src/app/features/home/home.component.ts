import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnChanges {
  constructor() {
    console.log('Intializing Home Component');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges: Input property name thay đổi.');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component đã khởi tạo.');
  }
}
