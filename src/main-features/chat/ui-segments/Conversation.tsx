import React from 'react';
import Box from "@mui/material/Box/Box";
import {IConversationMessage} from "../../../shared/model/conversation-message.model";
import {IUser} from "../../../shared/model/user.model";
import Paper from "@mui/material/Paper/Paper";
import IconButton from "@mui/material/IconButton/IconButton";
import InputBase from "@mui/material/InputBase/InputBase";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {ConversationLoading} from "./ConversationLoading";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import {getUserAvatar} from "../../../shared/utils/utils-functions";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider/Divider";


export function Conversation({ loading, list, account }: { loading: boolean, list: IConversationMessage[], account: IUser }) {

    const getAvatar = (conversatioinMessage: IConversationMessage) => {
        if (conversatioinMessage?.conversation?.senderUser?.id === account.id) {
            return getUserAvatar(
                conversatioinMessage?.conversation?.receiverUser?.id,
                conversatioinMessage?.conversation?.receiverUser?.imageUrl,
                conversatioinMessage?.conversation?.receiverUser?.sourceRegister
            );
        } else {
            return getUserAvatar(
                conversatioinMessage?.conversation?.senderUser?.id,
                conversatioinMessage?.conversation?.senderUser?.imageUrl,
                conversatioinMessage?.conversation?.senderUser?.sourceRegister
            );
        }
    };

    const getFullname = (conversatioinMessage: IConversationMessage) => {
        if (conversatioinMessage?.conversation?.senderUser?.id === account.id) {
            return conversatioinMessage?.conversation?.receiverUser?.firstName
                ? conversatioinMessage?.conversation?.receiverUser?.firstName
                : '' + conversatioinMessage?.conversation?.receiverUser?.lastName
                    ? conversatioinMessage?.conversation?.receiverUser?.lastName
                    : '';
        } else {
            return conversatioinMessage?.conversation?.senderUser?.firstName
                ? conversatioinMessage?.conversation?.senderUser?.firstName
                : '' + conversatioinMessage?.conversation?.senderUser?.lastName
                    ? conversatioinMessage?.conversation?.senderUser?.lastName
                    : '';
        }
    };

    return(
        <Box>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search .." inputProps={{ 'aria-label': 'search conversation' }} />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <br />

            {loading ? (
                <ConversationLoading />
            ) : (
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {list.map((conversatioinMessage: IConversationMessage, index: number) => (
                        <Box key={`conversation-${index}`}>
                            <ListItemButton alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="User avatar" src={getAvatar(conversatioinMessage)} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={getFullname(conversatioinMessage)}
                                    secondary={
                                        <React.Fragment>
                                            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                {conversatioinMessage?.conversation?.dateCreated}
                                            </Typography>
                                            {` — ${conversatioinMessage?.message?.content}`}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                            <Divider variant="inset" component="li" />
                        </Box>
                    ))}

                    <ListItemButton alignItems="flex-start">
                        {!loading && list.length === 0 ? (
                            <>No Conversations found</>
                        ) : null}
                    </ListItemButton>
                </List>
            )}

        </Box>
    );
}