import React from "react";
import {getBaseImageUrl} from "../utils/utils-functions";
import {AllAppConfig} from "../../core/config/all-config";

const placeHolder = getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING);
const defaultErrorImg = getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE);

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    placeholderImg?: string;
    errorImg?: string;
}
export const LazyImageLoading0 = ({ src, placeholderImg, errorImg, ...props }: ImageProps) => {
    const [imgSrc, setSrc] = React.useState(placeholderImg || placeHolder || src);
    React.useEffect(() => {
        let observer: any;
        if (src) {
            const img = new Image();
            img.src = src as string;
            img.addEventListener("load", () => {
                setSrc(src);
            });
            img.addEventListener("error", () => {
                setSrc(errorImg || defaultErrorImg);
            });
        }

    }, [src, placeholderImg, errorImg]);
    return <img {...props} src={imgSrc} className="img-lazy-loading" alt="Image SrfGroup"/>;
};