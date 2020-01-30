import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './products.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions,
        private productService: ProductService) { }

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.Load) =>
            this.productService.getProducts().pipe(
                map((products: Product[]) => new productActions.LoadSuccess(products)),
                catchError(err => of(new productActions.LoadFailed(err)))
            )
        )
    );

    @Effect()
    updateProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Update),
        map((action: productActions.Update) => action.payload),
        mergeMap((product: Product) =>
            this.productService.updateProduct(product).pipe(
                map((product: Product) => new productActions.UpdateSuccess(product)),
                catchError(err => of(new productActions.UpdateFailed(err)))
            )
        )
    );

    @Effect()
    addProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Add),
        map((action: productActions.Add) => action.payload),
        mergeMap((product: Product) =>
            this.productService.createProduct(product).pipe(
                map((product: Product) => new productActions.AddSuccess(product)),
                catchError(err => of(new productActions.AddFailed(err)))
            )
        )
    );

    @Effect()
    deleteProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Delete),
        map((action: productActions.Delete) => action.payload),
        mergeMap((productId: number) =>
            this.productService.deleteProduct(productId).pipe(
                map(() => new productActions.DeleteSuccess(productId)),
                catchError(err => of(new productActions.DeleteFailed(err)))
            )
        )
    );
}