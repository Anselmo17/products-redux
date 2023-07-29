import { createAction, props } from '@ngrx/store';

export const getList = createAction('[Products] Get products');

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');