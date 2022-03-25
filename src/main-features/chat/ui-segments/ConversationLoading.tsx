import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import Skeleton from '@mui/material/Skeleton/Skeleton';


export function ConversationLoading() {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                    <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText primary={<Skeleton variant="text" />} secondary={<Skeleton variant="text" />} />
            </ListItemButton>
            <Divider variant="inset" component="li" />
            <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                    <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText primary={<Skeleton variant="text" />} secondary={<Skeleton variant="text" />} />
            </ListItemButton>
            <Divider variant="inset" component="li" />
            <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                    <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText primary={<Skeleton variant="text" />} secondary={<Skeleton variant="text" />} />
            </ListItemButton>
        </List>
    );
}