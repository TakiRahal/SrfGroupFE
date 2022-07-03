import { all, fork } from "redux-saga/effects";


import userSaga from '../../../main-features/user/store/saga';
import categorySaga from "../../../main-features/category/store/saga";
import addressSaga from "../../../main-features/address/store/saga";
import topHomeSlidesImagesSaga from "../../../main-features/home/store/saga";
import offerSaga from "../../../main-features/offer/store/saga";
import contactUsSaga from "../../../main-features/contact-us/store/saga";
import faqSaga from "../../../main-features/faq/store/saga";
import aboutUsSaga from "../../../main-features/aboutus/store/saga";
export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(categorySaga),
        fork(addressSaga),
        fork(topHomeSlidesImagesSaga),
        fork(offerSaga),
        fork(contactUsSaga),
        fork(faqSaga),
        fork(aboutUsSaga)
    ]);
}
