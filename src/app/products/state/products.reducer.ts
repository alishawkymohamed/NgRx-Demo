import { Product } from 'src/app/products/product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './products.actions';

export interface ProductState {
    showProductCode: boolean,
    selectedProductId: number,
    productsList: Product[],
    error: string
}

const intialState: ProductState = {
    productsList: [],
    selectedProductId: null,
    showProductCode: true,
    error: ''
}

export function reducer(state: ProductState = intialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            }
        case ProductActionTypes.ClearProductSelection:
            return {
                ...state,
                selectedProductId: null
            }
        case ProductActionTypes.IntializeSelectedProduct:
            return {
                ...state,
                selectedProductId: 0
            }
        case ProductActionTypes.SetSelectedProduct:
            return {
                ...state,
                selectedProductId: action.payload.id
            }
        case ProductActionTypes.LoadSuccess: {
            return {
                ...state,
                productsList: action.payload,
                error: ''
            }
        }
        case ProductActionTypes.LoadFailed: {
            return {
                ...state,
                productsList: [],
                error: action.payload
            }
        }
        case ProductActionTypes.UpdateSuccess: {
            const updatedProducts = state.productsList.map(p => p.id == action.payload.id ? action.payload : p);
            return {
                ...state,
                productsList: updatedProducts,
                selectedProductId: action.payload.id,
                error: ''
            }
        }
        case ProductActionTypes.UpdateFailed: {
            return {
                ...state,
                error: action.payload
            }
        }
        case ProductActionTypes.AddSuccess: {
            const newProductsList = [...state.productsList, action.payload];
            return {
                ...state,
                productsList: newProductsList,
                selectedProductId: action.payload.id,
                error: ''
            }
        }
        case ProductActionTypes.AddFailed: {
            return {
                ...state,
                error: action.payload
            }
        }
        case ProductActionTypes.DeleteSuccess: {
            // const index = state.productsList.findIndex(p => p.id == action.payload);
            // const newProductsList = state.productsList.slice(0, index).concat(state.productsList.slice(index + 1));
            return {
                ...state,
                productsList: state.productsList.filter(product => product.id !== action.payload),
                selectedProductId: null,
                error: ''
            }
        }
        case ProductActionTypes.DeleteFailed: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}