import { createReducer, on } from '@ngrx/store';
import { getList, reset } from './product.actions';
import { Product, StateModel } from 'src/app/models/product.model';
import { productsMock } from 'src/app/mocks/product';



export interface ProductState {
  products: Array<Product>;
}

const initialState: StateModel = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(getList, (state) => {
    return { products: productsMock };
  }),
  on(reset, (state) => state),
);