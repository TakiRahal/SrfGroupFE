import {all, takeEvery} from "redux-saga/effects";
import {fetchConversationHandler} from "./saga-handler/conversation.generator";
import {fetchConversation} from './slice';

export function* chatSaga() {
    yield all([
        takeEvery(fetchConversation, fetchConversationHandler),
    ]);
}

export default chatSaga;
