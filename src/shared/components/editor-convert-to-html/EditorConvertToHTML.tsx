import React, { Component } from 'react';
import {EditorState, convertToRaw, ContentState, convertFromHTML} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './EditorConvertToHTML.scss';

interface MyProps {
    callBackParent: any;
    placeholder: string;
    defaultValue: string | null | undefined;
}

interface MyState {
    // defaultEditorState: any;
    editorState: any
}

export default class EditorConvertToHTML extends Component <MyProps, MyState>{

    constructor (props: any) {
        super(props);
        this.state = {
            editorState:  this.props.defaultValue ? EditorState.createWithContent(
                ContentState.createFromBlockArray(convertFromHTML(this.props.defaultValue || '').contentBlocks)
            ) :  EditorState.createEmpty()
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        // this.handleToUpdate = this.handleToUpdate.bind(this);
        // console.log('this.props.defaultValue ', this.props.defaultValue);
    }

    componentDidUpdate(previousProps: any, previousState: any) {
        // if(!this.props.defaultValue){
        //     setTimeout(() => {
        //         this.handleToUpdate();
        //     }, 1000);
        // }
    //
    //     console.log('this.props.defaultValue ', this.props.defaultValue);
    //
    //     if( !this.props.defaultValue && !this.state.editorState.getCurrentContent()){
    //         console.log('this.props.defaultValue ', this.props.defaultValue);
    //     }
    //     // if(!this.props.defaultValue){
    //     //     this.state = {
    //     //         editorState:  EditorState.createWithContent(
    //     //             ContentState.createFromBlockArray(convertFromHTML('').contentBlocks)
    //     //         ),
    //     //     }
    //     // }
    }


    handleToUpdate(){
        this.setState({
            editorState: EditorState.createEmpty()
        });

        // this.state = {
        //     editorState:  EditorState.createWithContent(
        //         ContentState.createFromBlockArray(convertFromHTML(newContent || '').contentBlocks)
        //     ), // EditorState.createEmpty()
        // }
    }

    onEditorStateChange = (editorState: any) => {
        this.setState({
            editorState,
        });
        this.props.callBackParent(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    };

    render() {

        // if(!this.props.defaultValue){
        //     // setTimeout(() => {
        //     //     // this.handleToUpdate();
        //     // }, 1000);
        // }

        // console.log('this.props.defaultValue ', this.props.defaultValue);

        return (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="custom-wrapper-container"
                    editorClassName="custom-editor-container"
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}