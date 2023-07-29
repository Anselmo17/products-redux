import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productsActions from './store/products-store/product.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'produtos-redux';


  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.store.dispatch(productsActions.getList());
  }
}
