import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ProductState } from '../store/products-store/product.reducer';
import { getList } from '../store/products-store/product.selectors';
import { Product, StateModel } from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  formProduct: FormGroup;

  public item?: any;
  public products?: Product[];

  constructor(private store: Store<ProductState>, private form: FormBuilder) { 
    this.formProduct = this.form.group({
      name: ['', Validators.required],
      preco: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.item = await this.store.pipe(select(getList), take(1)).toPromise();
    this.products = this.item.products;
  }

  sendData(){
    console.log('----------',this.formProduct.value);
  }

  removeProduct(id?:number){
    console.log('---- remove id ------',id);
  }


  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
