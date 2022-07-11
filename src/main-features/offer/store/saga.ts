import {all, takeEvery} from "redux-saga/effects";
import {
    fetchPublicOffers,
    fetchDetailsPublicOffer,
    fetchSellerOffer,
    addSellerOffer,
    fetchRentOffer,
    addRentOffer,
    fetchFindOffer,
    addFindOffer,
    updateRentOffer,
    updateSellerOffer,
    updateFindOffer,
    fetchMyOffers,
    fetchCommentsOffer,
    addCommentOffer,
    fetchOffersByUser,
    fetchRecentlyOffer,
    fetchImagesOffer
} from "../../offer/store/slice";
import {
    fetchDetailsPublicOfferHandler,
    fetchOffersByUserHandler,
    fetchPublicOffersHandler, fetchRecentlyOfferHandler
} from "./saga-handler/offer.generator";
import {
    addSellerOfferHandler,
    fetchSellerOfferHandler,
    updateSellerOfferHandler
} from "./saga-handler/seller.offer.generator";
import {addRentOfferHandler, fetchRentOfferHandler, updateRentOfferHandler} from "./saga-handler/rent.offer.generator";
import {addFindOfferHandler, fetchFindOfferHandler, updateFindOfferHandler} from "./saga-handler/find.offer.generator";
import {myOffersHandler} from "./saga-handler/my-offer.generator";
import {addCommentOfferHandler, fetchCommentsOfferHandler} from "./saga-handler/comment-offer.generator";
import {fetchImagesOfferHandler} from "./saga-handler/images-offer.generator";


export function* offerSaga() {
    yield all([
        takeEvery(fetchPublicOffers, fetchPublicOffersHandler),
        takeEvery(fetchDetailsPublicOffer, fetchDetailsPublicOfferHandler),
        takeEvery(fetchSellerOffer, fetchSellerOfferHandler),
        takeEvery(addSellerOffer, addSellerOfferHandler),
        takeEvery(updateSellerOffer, updateSellerOfferHandler),
        takeEvery(fetchRentOffer, fetchRentOfferHandler),
        takeEvery(addRentOffer, addRentOfferHandler),
        takeEvery(updateRentOffer, updateRentOfferHandler),
        takeEvery(fetchFindOffer, fetchFindOfferHandler),
        takeEvery(addFindOffer, addFindOfferHandler),
        takeEvery(updateFindOffer, updateFindOfferHandler),
        takeEvery(fetchMyOffers, myOffersHandler),
        takeEvery(fetchCommentsOffer, fetchCommentsOfferHandler),
        takeEvery(addCommentOffer, addCommentOfferHandler),
        takeEvery(fetchOffersByUser, fetchOffersByUserHandler),
        takeEvery(fetchRecentlyOffer, fetchRecentlyOfferHandler),
        takeEvery(fetchImagesOffer, fetchImagesOfferHandler),
    ]);
}

export default offerSaga;
