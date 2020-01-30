import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetSelectedProduct = '[Product] Set Selected Product',
    ClearProductSelection = '[Product] Clear Product Selection',
    IntializeSelectedProduct = '[Product] Intialize Selected Product',
    Load = '[Product] Load Products',
    LoadSuccess = '[Product] Load Products Success',
    LoadFailed = '[Product] Load Products Failed',
    Update = '[Product] Load Products',
    UpdateSuccess = '[Product] Update Product Success',
    UpdateFailed = '[Product] Update Product Failed',
    Add = '[Product] Add Product',
    AddSuccess = '[Product] Add Product Success',
    AddFailed = '[Product] Add Product Failed',
    Delete = '[Product] Delete Product',
    DeleteSuccess = '[Product] Delete Product Success',
    DeleteFailed = '[Product] Delete Product Failed'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode
    constructor(public payload: boolean) { }
}

export class SetSelectedProduct implements Action {
    readonly type = ProductActionTypes.SetSelectedProduct
    constructor(public payload: Product) { }
}

export class ClearProductSelection implements Action {
    readonly type = ProductActionTypes.ClearProductSelection
}

export class IntializeSelectedProduct implements Action {
    readonly type = ProductActionTypes.IntializeSelectedProduct
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) { }
}

export class LoadFailed implements Action {
    readonly type = ProductActionTypes.LoadFailed;
    constructor(public payload: string) { }
}

export class Update implements Action {
    readonly type = ProductActionTypes.Update;
    constructor(public payload: Product) { }
}

export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess;
    constructor(public payload: Product) { }
}

export class UpdateFailed implements Action {
    readonly type = ProductActionTypes.UpdateFailed;
    constructor(public payload: string) { }
}

export class Add implements Action {
    readonly type = ProductActionTypes.Add;
    constructor(public payload: Product) { }
}

export class AddSuccess implements Action {
    readonly type = ProductActionTypes.AddSuccess;
    constructor(public payload: Product) { }
}

export class AddFailed implements Action {
    readonly type = ProductActionTypes.AddFailed;
    constructor(public payload: string) { }
}

export class Delete implements Action {
    readonly type = ProductActionTypes.Delete;
    constructor(public payload: number) { }
}

export class DeleteSuccess implements Action {
    readonly type = ProductActionTypes.DeleteSuccess;
    constructor(public payload: number) { }
}

export class DeleteFailed implements Action {
    readonly type = ProductActionTypes.DeleteFailed;
    constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
    | SetSelectedProduct
    | ClearProductSelection
    | IntializeSelectedProduct
    | Load
    | LoadSuccess
    | LoadFailed
    | Update
    | UpdateFailed
    | UpdateSuccess
    | Add
    | AddSuccess
    | AddFailed
    | Delete
    | DeleteSuccess
    | DeleteFailed;