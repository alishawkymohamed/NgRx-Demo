import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProduct from '../../state';
import * as productActions from '../../state/products.actions';
import { Product } from '../../product';

@Component({
  templateUrl: './product-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Product>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getSelectedProduct));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.IntializeSelectedProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetSelectedProduct(product));
  }

  deleteProduct(product: Product): void {
    this.store.dispatch(new productActions.Delete(product.id));
  }

  clearProduct(): void {
    this.store.dispatch(new productActions.ClearProductSelection());
  }
  saveProduct(product: Product): void {
    this.store.dispatch(new productActions.Add(product));
  }

  updateProduct(product: Product): void {
    this.store.dispatch(new productActions.Update(product));
  }
}
