import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {getEntitiesCurrentUser} from "../../shared/reducers/conversation.reducer";
import {Conversation} from "./ui-segments/Conversation";
import Container from "@mui/material/Container/Container";
import {MessageConversation} from "./ui-segments/MessageConversation";
import './Chat.scss';
import {IConversation} from "../../shared/model/conversation.model";
import {addMessage, getMessagesByConversation} from "../../shared/reducers/message.reducer";
import {IMessage} from "../../shared/model/message.model";
import isEmpty from 'lodash/isEmpty';
import Box from "@mui/material/Box/Box";
import Alert from "@mui/material/Alert/Alert";
import {AllAppConfig} from "../../core/config/all-config";

export interface IChatClientProps extends StateProps, DispatchProps {}

export const Chat = (props: IChatClientProps) => {

    const [currentConversation, setCurrentConversation] = React.useState<IConversation>({});
    const [listCurrentMessages, setListCurrentMessages] = React.useState<IMessage[]>([]);
    const [activePageMessages, setActivePageMessages] = React.useState(-1);
    const [openCntainerMessagesMobile, setOpenCntainerMessagesMobile] = React.useState<boolean>(false);

    const {loadingEntitiesConversation,
        listConversations,
        account,
        getEntitiesCurrentUser} = props;

    React.useEffect(() => {
        getEntitiesCurrentUser(0, 20, '');
    }, []);

    const addMessage = (value: IMessage) => {
        props.addMessage(value)
    }

    const getListMessages = (conversation: IConversation) => {
        setCurrentConversation(conversation);
        setActivePageMessages(activePageMessages+1);
        setOpenCntainerMessagesMobile(true)
    }

    React.useEffect(() => {
        if(props.listMessageByConversation){

            let tmpListCurrentMessages: IMessage[] = [];
            props.listMessageByConversation.forEach((message: IMessage, index: number) => {
                tmpListCurrentMessages.unshift(message);
            })
            console.log('tmpListCurrentMessages ', tmpListCurrentMessages);


            setListCurrentMessages([
                ...tmpListCurrentMessages,
                ...listCurrentMessages,
            ]);
        }
    }, [props.listMessageByConversation])


    React.useEffect(() => {
        if( activePageMessages>=0 ){
            props.getMessagesByConversation(activePageMessages, AllAppConfig.MESSAGES_PER_PAGE, '', currentConversation.id);
        }
    }, [activePageMessages])

    const loadMoreMessages = () => {
        setActivePageMessages(activePageMessages+1);
    }

    const backToConversations = () => {
        setOpenCntainerMessagesMobile(false);
    }

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
                    paddingTop: 50,
                }}
                className="container-chat"
            >
                <Grid item xs={12} sm={6} md={2} sx={{display: { xs: 'none', md: 'flex' }}}></Grid>

                <Grid item xs={12} sm={6} md={3} className="container-chat-conversation">
                    <Conversation loading={loadingEntitiesConversation} list={listConversations.slice()} account={account} listMessages={getListMessages} />
                </Grid>

                <Grid item xs={12} sm={12} md={5} className={openCntainerMessagesMobile ? 'container-chat-message open': 'container-chat-message'}>
                    {
                        !isEmpty(currentConversation) ? <MessageConversation account={account}
                                                                   conversation={currentConversation}
                                                                   callbackAddMessage={addMessage}
                                                                   loadingListMessages={props.loadingMessageByConversation}
                                                                   listMessages={listCurrentMessages}
                                                                   loadingAddMessage={props.loadingEntityMessage}
                                                                   totalPagesMessages={props.totalPagesMessages}
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

const mapStateToProps = ({ conversation, user, message }: IRootState) => ({
    loadingEntitiesConversation: conversation.loadingEntities,
    listConversations: conversation.entities,

    account: user.currentUser,

    loadingMessageByConversation: message.loadingEntities,
    listMessageByConversation: message.entities,
    loadingEntityMessage: message.loadingEntity,
    addSuccessMessage: message.addSuccess,
    totalPagesMessages: message.totalPages
});

const mapDispatchToProps = {
    getEntitiesCurrentUser,
    getMessagesByConversation,
    addMessage
    // reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Chat);