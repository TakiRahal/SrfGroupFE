import {all, takeEvery} from "redux-saga/effects";
import {fetchCart} from './slice';
import {fetchCartHandler} from "./saga-handler/cart.generator";

export function* cartSaga() {
    yield all([
        takeEvery(fetchCart, fetchCartHandler),
    ]);
}

export default cartSaga;
