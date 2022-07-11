import {all, takeEvery} from "redux-saga/effects";
import {
    fetchFavoriteUsers
} from "./slice";
import {fetchFavoriteUsersHandler} from "./saga-handler/favorite-user.generator";


export function* favoriteSaga() {
    yield all([
        takeEvery(fetchFavoriteUsers, fetchFavoriteUsersHandler),
    ]);
}

export default favoriteSaga;
