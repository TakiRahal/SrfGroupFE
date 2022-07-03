import {combineReducers} from "redux";
import {userSlice} from "../../../main-features/user/store/slice";
import {categorySlice} from "../../../main-features/category/store/slice";
import {addressSlice} from "../../../main-features/address/store/slice";
import {homeSlice} from "../../../main-features/home/store/slice";
import {offerSlice} from "../../../main-features/offer/store/slice";
import {contactUsSlice} from "../../../main-features/contact-us/store/slice";
import {faqSlice} from "../../../main-features/faq/store/slice";
import {aboutUsSlice} from "../../../main-features/aboutus/store/slice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    category: categorySlice.reducer,
    address: addressSlice.reducer,
    home: homeSlice.reducer,
    offer: offerSlice.reducer,
    contactus: contactUsSlice.reducer,
    faq: faqSlice.reducer,
    aboutus: aboutUsSlice.reducer
})

export default rootReducer;
