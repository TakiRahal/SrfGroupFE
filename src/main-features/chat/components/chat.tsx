import React from 'react';
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import Container from "@mui/material/Container/Container";
import './chat.scss';
import isEmpty from 'lodash/isEmpty';
import Box from "@mui/material/Box/Box";
import Alert from "@mui/material/Alert/Alert";
import {IConversation} from "../../../shared/model/conversation.model";
import {IMessage} from "../../../shared/model/message.model";
import {AllAppConfig} from "../../../core/config/all-config";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useDispatch, useSelector} from "react-redux";
import {
    entitiesMyNotifications, fetchMyNotifications,
    loadingEntitiesMyNotifications,
    totalItemsMyNotifications, totalPagesMyNotifications
} from "../../notification/store/slice";
import {
    addSuccessMessage,
    deleteSuccessConversation,
    entitiesConversation,
    entitiesMessage,
    entityMessage,
    fetchConversation,
    fetchMessages,
    addMessage,
    loadingEntitiesConversation,
    loadingEntitiesMessage,
    loadingMessage,
    resetMessage,
    totalItemsConversation, totalItemsMessage,
    totalPagesConversation, totalPagesMessage, deleteConversation
} from "../store/slice";
import {allSessionSelector} from "../../user/store/slice";
import {Conversation} from "./ui-segments/Conversation";
import {MessageConversation} from "./ui-segments/MessageConversation";


export default function Chat(){
    const [currentConversation, setCurrentConversation] = React.useState<IConversation>({});
    const [listCurrentMessages, setListCurrentMessages] = React.useState<IMessage[]>([]);
    const [activePageMessages, setActivePageMessages] = React.useState(-1);
    const [openCntainerMessagesMobile, setOpenCntainerMessagesMobile] = React.useState<boolean>(false);

    const dispatch = useDispatch();

    const loadingEntitiesConversationSelector = useSelector(loadingEntitiesConversation) ?? false;
    const entitiesConversationSelector = useSelector(entitiesConversation) ?? [];
    const totalItemsConversationSelector = useSelector(totalItemsConversation) ?? -1;
    const totalPagesConversationSelector = useSelector(totalPagesConversation) ?? 0;
    const deleteSuccessConversationSelector = useSelector(deleteSuccessConversation) ?? 0;

    const loadingMessageSelector = useSelector(loadingMessage) ?? [];
    const entityMessageSelector = useSelector(entityMessage) ?? [];
    const addSuccessMessageSelector = useSelector(addSuccessMessage) ?? [];
    const loadingEntitiesMessageSelector = useSelector(loadingEntitiesMessage) ?? [];
    const entitiesMessageSelector = useSelector(entitiesMessage) ?? [];
    const totalItemsMessageSelector = useSelector(totalItemsMessage) ?? [];
    const totalPagesMessageSelector = useSelector(totalPagesMessage) ?? [];

    const {currentUser} = useSelector(allSessionSelector);
    
    // const {loadingEntitiesConversation,
    //     entitiesConversationSelector,
    //     account,
    //     getEntitiesCurrentUser} = props;

    React.useEffect(() => {
        dispatch(fetchConversation({
            page: 0,
            size: 20,
            queryParams: ''
        }));
        // getEntitiesCurrentUser(0, 20, '');
    }, []);

    const addNewMessage = (message: IMessage) => {
        dispatch(addMessage({...message}))
        // props.addMessage(value)
    }

    const getListMessages = (conversation: IConversation) => {
        console.log('getListMessages ');
        dispatch(resetMessage({}));

        // props.resetMessages();
        setListCurrentMessages([]);
        setCurrentConversation(conversation);
        setActivePageMessages(0);
        setOpenCntainerMessagesMobile(true);

        dispatch(resetMessage({}));
        dispatch(fetchMessages({
            conversationId: conversation.id,
            page: 0,
            size: AllAppConfig.MESSAGES_PER_PAGE
        }));
        // props.getMessagesByConversation(0, AllAppConfig.MESSAGES_PER_PAGE, '', conversation.id);
    }

    React.useEffect(() => {
        if(entitiesMessageSelector){

            let tmpListCurrentMessages: IMessage[] = [];
            entitiesMessageSelector.forEach((message: IMessage, index: number) => {
                tmpListCurrentMessages.unshift(message);
            });

            setListCurrentMessages([
                ...tmpListCurrentMessages,
                ...listCurrentMessages,
            ]);
        }
    }, [entitiesMessageSelector])


    React.useEffect(() => {
        if(activePageMessages > 0){ // Just for load more not first time
            dispatch(fetchMessages({
                conversationId: currentConversation.id,
                page: activePageMessages,
                size: AllAppConfig.MESSAGES_PER_PAGE
            }));
            // props.getMessagesByConversation(activePageMessages, AllAppConfig.MESSAGES_PER_PAGE, '', currentConversation.id);
        }
    }, [activePageMessages])

    const loadMoreMessages = () => {
        setActivePageMessages(activePageMessages+1);
    }

    const backToConversations = () => {
        setOpenCntainerMessagesMobile(false);
    }

    const isOnLine = (email: string) => {
        // return props.listConnectedUsers.findIndex(item => item.principal.email==email) >=0;
    }

    const actionDeleteConversation = (conversation?: IConversation) => {
        dispatch(deleteConversation({
            id: conversation?.id
        }))
        // props.deleteConversation(conversation?.id);
    }

    React.useEffect(() => {
        if(deleteSuccessConversationSelector){
            dispatch(fetchConversation({
                page: 0,
                size: 20,
                queryParams: ''
            }));
            // getEntitiesCurrentUser(0, 20, '');
        }
    }, [deleteSuccessConversationSelector])

    return (
        <Container maxWidth="xl">
            <Grid
                container
                style={{
                    paddingTop: 10,
                }}
            >
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">Chat</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={6}
                style={{
                    marginTop: 50,
                }}
                className="container-chat"
            >
                <Grid item xs={12} sm={6} md={2} sx={{display: { xs: 'none', md: 'flex' }}}></Grid>

                <Grid item xs={12} sm={6} md={3} className="container-chat-conversation">
                    <Conversation
                        loading={loadingEntitiesConversationSelector}
                        list={entitiesConversationSelector.slice()}
                        account={currentUser}
                        listMessages={getListMessages}
                        isOnLine={isOnLine}
                        deleteConversation={actionDeleteConversation}/>
                </Grid>

                <Grid item xs={12} sm={12} md={5} className={openCntainerMessagesMobile ? 'container-chat-message open': 'container-chat-message'}>
                    {
                        !isEmpty(currentConversation) ? <MessageConversation account={currentUser}
                                                                             conversation={currentConversation}
                                                                             callbackAddMessage={addNewMessage}
                                                                             loadingListMessages={loadingEntitiesMessageSelector}
                                                                             listMessages={listCurrentMessages}
                                                                             loadingAddMessage={loadingMessageSelector}
                                                                             totalPagesMessages={totalItemsMessageSelector}
                                                                             activePage={activePageMessages}
                                                                             callbackLoadMoreMessages={loadMoreMessages}
                                                                             calbackBackToConversations={backToConversations}/> :
                            <Box>
                                <Alert severity="warning">Please select a conversation</Alert>
                            </Box>
                    }
                </Grid>
            </Grid>

        </Container>
    );
}
