import {PayloadAction} from "@reduxjs/toolkit";

const reducer = {
    fetchTopHomeSlidesImages: (state: any) => {
        state.topHomeSlidesImages.loading = true;
    },
    fetchTopHomeSlidesImagesSuccess: (state: any, action: PayloadAction) => {
        state.topHomeSlidesImages.loading = false;
        state.topHomeSlidesImages.entities = action.payload;
    },
    fetchTopHomeSlidesImagesFailure: (state: any, action: PayloadAction) => {
        state.topHomeSlidesImages.loading = false;
    },
}

export default reducer;
