import React  from 'react';
import './test.scss';
import Box from "@mui/material/Box/Box";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import IconButton from "@mui/material/IconButton/IconButton";
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import {useFormik} from "formik";
import {initialValuesMessage, validationSchemaMessage} from "../validation/initial-values-message";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import {IMessage} from "../../../shared/model/message.model";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {IConversation} from "../../../shared/model/conversation.model";
import {IUser} from "../../../shared/model/user.model";
import {convertDateTimeToServer, getUserAvatar} from "../../../shared/utils/utils-functions";
import {ConvertReactTimeAgo} from "../../../shared/pages/react-time-ago";

const initialValues = initialValuesMessage;

export function MessageConversation({account, conversation, callbackAddMessage, loading, listMessages}:
                                    {account: any, conversation: IConversation, callbackAddMessage: any, loading: boolean, listMessages: IMessage[]}) {

    const [listCurrentMessages, setListCurrentMessages] = React.useState<IMessage[]>([]);

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaMessage,
        onSubmit: values => {
            const entity: IMessage = {
                content: values.content,
                dateCreated: convertDateTimeToServer(new Date()),
                isRead: false,
                senderUser: {
                    id: account.id
                },
                receiverUser: {
                    id: getReceiverUser()?.id,
                    email: getReceiverUser()?.email
                },
                conversation: {
                    id: conversation.id
                }
            }
            setListCurrentMessages([
                ...listCurrentMessages,
                entity
            ]);
            callbackAddMessage(entity);
            formik.resetForm();
        },
    });

    const getReceiverUser = (): IUser | null | undefined => {
        if(conversation?.senderUser?.id ===account.id){
            return conversation?.receiverUser;
        }
        return conversation?.senderUser;
    }

    React.useEffect(() => {
        setListCurrentMessages(listMessages);
    }, [listMessages]);

    const isMe = (message: IMessage) => {
        if(message?.senderUser?.id === account?.id){
            return true;
        }
        return false
    }

    const getAvatar = (message: IMessage): string => {
        if( message?.senderUser?.id === account?.id){
            return getUserAvatar(message?.receiverUser?.id, message?.receiverUser?.imageUrl, message?.receiverUser?.sourceRegister);
        }
        return getUserAvatar(message?.senderUser?.id, message?.senderUser?.imageUrl, message?.senderUser?.sourceRegister);
    }

    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a data-toggle="modal" data-target="#view_info">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                        </a>
                                        <div className="chat-about">
                                            <h6 className="m-b-0">Aiden Chavez</h6>
                                            <small>Last seen: 2 hours ago</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 hidden-sm text-right">
                                        <a className="btn btn-outline-secondary">
                                            <i className="fa fa-camera"></i>
                                        </a>
                                        <a className="btn btn-outline-primary">
                                            <i className="fa fa-image"></i>
                                        </a>
                                        <a className="btn btn-outline-info">
                                            <i className="fa fa-cogs"></i>
                                        </a>
                                        <a className="btn btn-outline-warning">
                                            <i className="fa fa-question"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history">

                                {
                                    loading ? <Box sx={{ pt: 5, textAlign: 'center' }}>
                                        <CircularProgress color="inherit"  />
                                    </Box> : null
                                }


                                <ul className="m-b-0">
                                    {
                                        listCurrentMessages.map((message: IMessage, index: number) => (
                                            <li className="clearfix" key={`message-${index}-${message.id}`}>
                                                <div className={isMe(message) ? 'message-data text-right' : 'message-data message-data-other'}>
                                                    {
                                                        !isMe(message) ? <img src={getAvatar(message)} alt="avatar" /> : null
                                                    }
                                                    <div className="message-data-time">
                                                        <ConvertReactTimeAgo convertDate={message?.dateCreated} />
                                                    </div>
                                                </div>
                                                <div className={isMe(message) ? 'message my-message float-right' : 'message other-message'} >
                                                    {message?.content}
                                                </div>
                                            </li>
                                        ))
                                    }






                                    {/*<hr />*/}
                                    {/*<li className="clearfix">*/}
                                        {/*<div className="message-data text-right">*/}
                                            {/*<span className="message-data-time">10:10 AM, Today</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="message my-message float-right"> Hi Aiden, how are you? How is the project coming along?</div>*/}
                                    {/*</li>*/}
                                    {/*<li className="clearfix">*/}
                                        {/*<div className="message-data">*/}
                                            {/*<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />*/}
                                            {/*<span className="message-data-time">10:12 AM, Today</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="message other-message">Are we meeting today?</div>*/}
                                    {/*</li>*/}
                                    {/*<li className="clearfix">*/}
                                        {/*<div className="message-data">*/}
                                            {/*<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />*/}
                                            {/*<span className="message-data-time">10:15 AM, Today</span>*/}
                                        {/*</div>*/}
                                        {/*<div className="message other-message">Project has been already finished and I have results to show you.</div>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="chat-message clearfix">
                                <Box sx={{ flexGrow: 1 }}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <AppBar position="static" color="transparent">
                                            <Toolbar>
                                                <IconButton
                                                    size="large"
                                                    edge="start"
                                                    color="inherit"
                                                    aria-label="open drawer"
                                                    sx={{ mr: 2 }}
                                                >
                                                    <EmojiEmotionsIcon />
                                                </IconButton>

                                                <FormControl variant="standard"
                                                             fullWidth
                                                             error={formik.touched.content && Boolean(formik.errors.content)}>
                                                    <TextField id="content"
                                                               name="content"
                                                               label="Write your message..."
                                                               variant="standard"
                                                               autoComplete="off"
                                                               value={formik.values.content}
                                                               onChange={formik.handleChange}/>
                                                    <FormHelperText id="component-helper-text-message">{formik.touched.content && formik.errors.content}</FormHelperText>
                                                </FormControl>

                                                <Box sx={{ flexGrow: 1 }} />
                                                <Box>
                                                    <IconButton
                                                        size="large"
                                                        edge="end"
                                                        aria-label="account of current user"
                                                        aria-haspopup="true"
                                                        color="inherit"
                                                        type="submit"
                                                    >
                                                        <SendIcon />
                                                    </IconButton>
                                                </Box>
                                            </Toolbar>
                                        </AppBar>
                                    </form>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}