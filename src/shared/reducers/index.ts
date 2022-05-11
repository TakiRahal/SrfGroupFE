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
import category, {CategoryState} from "./category.reducer";
import locale, {LocaleState} from "./locale.reducer";
import reportOffer, {ReportOfferState} from "./report-offer.reducer";
import reportCommentOffer, {ReportCommentOfferState} from "./report-comment-offer.reducer";
import message, {MessageState} from "./message.reducer";
import descriptionAddOffer, {DescriptionAddOfferState} from "./description-add-offer.reducer";
import newsLetter, {NewsLetterState} from "./news-letter.reducer";
import topHomeSlidesImages, {TopHomeSlidesImagesState} from "./top-home-slides-image";
import postHomeFeature, {PostHomeFeatureState} from "./post-home-feature.reducer";
import reportProbleme, {ReportProblemeState} from "./report-probleme.reducer";
import webSocketState, {WebSocketState} from "./web-socket.reducer";

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
    readonly category: CategoryState;
    readonly locale: LocaleState;
    readonly reportOffer: ReportOfferState;
    readonly reportCommentOffer: ReportCommentOfferState;
    readonly message: MessageState;
    readonly descriptionAddOffer: DescriptionAddOfferState;
    readonly newsLetter: NewsLetterState;
    readonly topHomeSlidesImages: TopHomeSlidesImagesState;
    readonly postHomeFeature: PostHomeFeatureState;
    readonly reportProbleme: ReportProblemeState;
    readonly webSocketState: WebSocketState;
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
    notification,
    category,
    locale,
    reportOffer,
    reportCommentOffer,
    message,
    descriptionAddOffer,
    newsLetter,
    topHomeSlidesImages,
    postHomeFeature,
    reportProbleme,
    webSocketState
});

export default rootReducer;
