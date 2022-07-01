import {all, takeEvery} from "redux-saga/effects";
import {
    fetchPubliOffer,
    fetchSellerOffer,
    fetchRentOffer,
    fetchFindOffer
} from "../../offer/store/slice";
import {fetchPublicOfferHandler} from "./saga-handler/offer.generator";
import {fetchSellerOfferHandler} from "./saga-handler/seller.offer.generator";
import {fetchRentOfferHandler} from "./saga-handler/rent.offer.generator";
import {fetchFindOfferHandler} from "./saga-handler/find.offer.generator";


export function* offerSaga() {
    yield all([

        takeEvery(fetchPubliOffer, fetchPublicOfferHandler),
        takeEvery(fetchSellerOffer, fetchSellerOfferHandler),
        takeEvery(fetchRentOffer, fetchRentOfferHandler),
        takeEvery(fetchFindOffer, fetchFindOfferHandler),
    ]);
}

export default offerSaga;
