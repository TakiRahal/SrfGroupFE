import React from "react";
import {checkMobileDesktopBrowser} from "../../utils/utils-functions";
import {RWebShare} from "react-web-share";
import FacebookShareButton from "react-share/lib/FacebookShareButton";

class CustomShare extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return !checkMobileDesktopBrowser() ?
            <RWebShare
                data={{
                    text: "Like humans, flamingos make friends for life",
                    url: this.props.url,
                    title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")} >
                {this.props.children}
            </RWebShare> :
            <FacebookShareButton
                url={this.props.url}
                quote="quote" >
                {this.props.children}
            </FacebookShareButton>
    }
}

export default CustomShare;