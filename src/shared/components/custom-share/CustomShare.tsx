import React from "react";
import {checkMobileDesktopBrowser} from "../../utils/utils-functions";
import FacebookShareButton from "react-share/lib/FacebookShareButton";
import {SourceProvider} from "../../enums/source-provider";
import IconButton from "@mui/material/IconButton/IconButton";

class CustomShare extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            shareData: {
                title: 'MDN',
                text: 'Learn web development on MDN!',
                url: 'https://developer.mozilla.org'
            }
        }
        this.handleShare = this.handleShare.bind(this);
    }

    handleShare(){
        navigator.share(this.state.shareData).then((result) => {});
    }

    render() {
        return checkMobileDesktopBrowser()===SourceProvider.MOBILE_BROWSER ?
            <IconButton onClick={this.handleShare}>
                {this.props.children}
            </IconButton>
            :
            <FacebookShareButton
                url={this.props.url}
                quote="quote" >
                {this.props.children}
            </FacebookShareButton>
    }
}

export default CustomShare;