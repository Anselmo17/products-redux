import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ProductState } from '../store/products-store/product.reducer';
import { getList } from '../store/products-store/product.selectors';
import { Product, StateModel } from '../models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public item?: any;
  public products?: Product[];

  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.item = await this.store.pipe(select(getList), take(1)).toPromise();
    this.products = this.item.products;
  }
}
