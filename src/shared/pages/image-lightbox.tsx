import React, { Component } from 'react';
// import Lightbox from 'react-image-lightbox';
// In your own app, you would need to use import styles once in the app
// import 'react-image-lightbox/styles.css';
// import './stylesheets/vendor/stylesheet.css';
// import './stylesheets/vendor/github-light.css';
// import './stylesheets/app.css';
// import image1 from './images/1.jpg';
// import image2 from './images/2.jpg';
// import image3 from './images/3.jpg';
// import image4 from './images/4.jpg';
// import image1Thumb from './images/1_thumb.jpg';
// import image2Thumb from './images/2_thumb.jpg';
// import image3Thumb from './images/3_thumb.jpg';
// import image4Thumb from './images/4_thumb.jpg';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
//
// const images = [image1, image2, image3, image4];
// const thumbs = [image1Thumb, image2Thumb, image3Thumb, image4Thumb];

const images = ['//placekitten.com/1500/500', '//placekitten.com/4000/3000', '//placekitten.com/800/1200', '//placekitten.com/1500/1500'];
const thumbs = ['//placekitten.com/4000/3000', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random', 'https://source.unsplash.com/random'];

const titles = [
    '',
    <span>
    by&nbsp;
        <a className="creditLink" href="http://flickr.com/photos/titrans/">
      quatre mains
    </a>
        &nbsp; (
    <a
        className="creditLink"
        href="http://creativecommons.org/licenses/by/2.0/"
        title="Attribution License"
    >
      Some rights reserved
    </a>
    )
  </span>,
    <span>
    by&nbsp;
        <a className="creditLink" href="http://flickr.com/photos/lachlanrogers/">
      latch.r
    </a>
        &nbsp; (
    <a
        className="creditLink"
        href="http://creativecommons.org/licenses/by-sa/2.0/"
        title="Attribution-ShareAlike License"
    >
      Some rights reserved
    </a>
    )
  </span>,
    <span>
    by&nbsp;
        <a className="creditLink" href="http://flickr.com/photos/fazen/">
      fazen
    </a>
        &nbsp; (
    <a
        className="creditLink"
        href="http://creativecommons.org/licenses/by/2.0/"
        title="Attribution License"
    >
      Some rights reserved
    </a>
    )
  </span>,
];

const captions = [
    'Cat in the snow',
    '',
    <p>
        .. not in the&nbsp;
        <em>mood</em>
        &nbsp;for games right now
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        ...
        <br />
        C&#39;mon. Seriously.
    </p>,
    '',
];

interface IImageLightBox {
    images: string[];
    thumbs: string[];
    titles: (string | JSX.Element)[];
    captions: (string | JSX.Element)[];
}

const listImagesLightBox: IImageLightBox = {
    images: images,
    thumbs: thumbs,
    titles: titles,
    captions: captions
}

class ImageLightbox extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            index: 0,
            isOpen: false,
        };

        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.moveNext = this.moveNext.bind(this);
        this.movePrev = this.movePrev.bind(this);

    }

    static onImageLoadError(): void {
        // console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
    }

    openLightbox() {
        this.setState({ isOpen: true });
    }

    closeLightbox() {
        this.setState({ isOpen: false });
        this.props.callbackClose();
    }

    moveNext() {
        this.setState((prevState: any) => ({
            index: (prevState.index + 1) % images.length,
        }));
    }

    movePrev() {
        this.setState((prevState: any) => ({
            index: (prevState.index + images.length - 1) % images.length,
        }));
    }

    render() {
        let lightbox;
        if (this.props.openLightBox) {
            lightbox = (
                <Lightbox
                    mainSrc={listImagesLightBox.images[this.state.index]}
                    nextSrc={listImagesLightBox.images[(this.state.index + 1) % images.length]}
                    prevSrc={
                        listImagesLightBox.images[(this.state.index + images.length - 1) % images.length]
                    }
                    mainSrcThumbnail={listImagesLightBox.thumbs[this.state.index]}
                    nextSrcThumbnail={listImagesLightBox.thumbs[(this.state.index + 1) % images.length]}
                    prevSrcThumbnail={
                        listImagesLightBox.thumbs[(this.state.index + images.length - 1) % images.length]
                    }
                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}
                    onImageLoadError={ImageLightbox.onImageLoadError}
                    imageTitle={listImagesLightBox.titles[this.state.index]}
                    imageCaption={listImagesLightBox.captions[this.state.index]}
                />
            );
        }

        return (
            <div>
                {lightbox}
            </div>
        );
    }
}

export default ImageLightbox;