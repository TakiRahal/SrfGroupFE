import {combineReducers} from "redux";
import user, {UserState} from "./user-reducer";
import offer, {OfferState} from "./offer.reducer";
import address, {AddressState} from "./address.reducer";
import sellOffer, {SellOfferState} from "./seller-offer.reducer";
import rentOffer, {RentOfferState} from "./rent-offer.reducer";
import findOffer, {FindOfferState} from "./find-offer.reducer";
import comment, {CommentOfferState} from "./comment-offer.reducer";
import faq, {FaqState} from "./faq.reducer";
import aboutUs, {AboutUsState} from "./about-us.reducer";
import contactUs, {ContactUsState} from "./contact-us.reducer";
import favoriteUser, {FavoriteUserState} from "./favorite-user.reducer";
import offerImages, {OfferImagesState} from "./offer-images.reducer";
import conversation, {ConversationState} from "./conversation.reducer";
import notification, {NotificationState} from "./notification.reducer";

export interface IRootState {
    readonly user: UserState;
    readonly offer: OfferState;
    readonly address: AddressState;
    readonly sellOffer: SellOfferState;
    readonly rentOffer: RentOfferState;
    readonly findOffer: FindOfferState;
    readonly comment: CommentOfferState;
    readonly faq: FaqState;
    readonly aboutUs: AboutUsState;
    readonly contactUs: ContactUsState;
    readonly favoriteUser: FavoriteUserState;
    readonly offerImages: OfferImagesState;
    readonly conversation: ConversationState;
    readonly notification: NotificationState;
}

const rootReducer = combineReducers<IRootState>({
    user,
    offer,
    address,
    sellOffer,
    rentOffer,
    findOffer,
    comment,
    faq,
    aboutUs,
    contactUs,
    favoriteUser,
    offerImages,
    conversation,
    notification
});

export default rootReducer;
