import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box/Box";
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

export interface IChatClientProps extends StateProps, DispatchProps {}

export const Chat = (props: IChatClientProps) => {

    const {loadingEntitiesConversation,
        listConversations,
        account,
        getEntitiesCurrentUser} = props;

    React.useEffect(() => {
        getEntitiesCurrentUser(0, 20, 'id,asc');
    }, []);

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
            >
                <Grid item xs={12} sm={6} md={2}></Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Conversation loading={loadingEntitiesConversation} list={listConversations.slice()} account={account} />
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <MessageConversation />
                </Grid>
            </Grid>

        </Container>
    );
}

const mapStateToProps = ({ conversation, user }: IRootState) => ({
    loadingEntitiesConversation: conversation.loadingEntities,
    listConversations: conversation.entities,

    account: user.currentUser
});

const mapDispatchToProps = {
    getEntitiesCurrentUser
    // reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Chat);