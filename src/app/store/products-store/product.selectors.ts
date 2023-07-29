import { createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";


export const getList = createSelector(
    (state: ProductState) => state,
    (itens: ProductState) => itens.products
  );
