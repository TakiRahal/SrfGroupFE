import { all, fork } from "redux-saga/effects";


import userSaga from '../../../main-features/user/store/saga';
import categorySaga from "../../../main-features/category/store/saga";
import addressSaga from "../../../main-features/address/store/saga";
import topHomeSlidesImagesSaga from "../../../main-features/home/store/saga";
import offerSaga from "../../../main-features/offer/store/saga";
export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(categorySaga),
        fork(addressSaga),
        fork(topHomeSlidesImagesSaga),
        fork(offerSaga)
    ]);
}
