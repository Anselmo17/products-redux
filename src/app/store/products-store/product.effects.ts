import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as productsActions from "./product.actions";

@Injectable()
export class ProductEffects {
    loadProduct$ = createEffect(() =>
        this.action$.pipe(
            ofType(productsActions.getList)
        )
    );


    constructor(private action$: Actions) { }
}