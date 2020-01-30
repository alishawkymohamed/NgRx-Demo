import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromProducts from './products.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.appState {
    products: fromProducts.ProductState;
}

const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
)

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.productsList
)

export const getSelectedProductId = createSelector(
    getProductFeatureState,
    state => state.selectedProductId
)

export const getSelectedProduct = createSelector(
    getProductFeatureState,
    getSelectedProductId,
    (state, selectedProductId) => {
        if (selectedProductId === 0) {
            return {
                id: 0,
                description: '',
                productCode: 'New',
                productName: '',
                starRating: 0
            }
        } else {
            return selectedProductId ? state.productsList.find(product => product.id == selectedProductId) : null;
        }
    }
)

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
)