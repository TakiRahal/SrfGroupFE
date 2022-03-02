import * as React from 'react';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import Avatar from '@mui/material/Avatar/Avatar';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Typography from '@mui/material/Typography/Typography';
import Divider from '@mui/material/Divider/Divider';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { useFormik } from 'formik';
import IconButton from '@mui/material/IconButton/IconButton';
import { TransitionProps } from '@mui/material/transitions';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box/Box';
import {
    initialValuesAddCommentOffer,
    validationSchemaAddCommentOffer
} from "../validation/initial-values-add-comment-offer";
import {ICommentOffer} from "../../../../shared/model/comment-offer.model";
import {getUserAvatar} from "../../../../shared/utils/utils-functions";
import {IOffer} from "../../../../shared/model/offer.model";
import {IUser} from "../../../../shared/model/user.model";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialValues = initialValuesAddCommentOffer;

export default function CommentDetailsOffer({
  offerEntity,
  listCommentsByOffer,
  account,
  isAuthenticated,
  loadingListComments,
  loadingUpdateEntity,
  parentCallbackAddComment,
  parentCallbackDeleteComment,
  parentCallbackUpdateComment,
}: {
    offerEntity: IOffer | undefined,
    listCommentsByOffer: ReadonlyArray<ICommentOffer>,
    account: IUser,
    isAuthenticated: boolean,
    loadingListComments: boolean,
    loadingUpdateEntity: boolean,
    parentCallbackAddComment: any,
    parentCallbackDeleteComment: any,
    parentCallbackUpdateComment: any,
}) {
  const [commentDeleteId, setCommentDeleteId] = useState(-1);
  const [commentUpdateId, setCommentUpdateId] = useState(-1);

  const handleCallbackAddComment = (content: string) => {
    parentCallbackAddComment(content);
  };

  const handleCallbackUpdateComment = (content: string, commentId: number) => {
    parentCallbackUpdateComment(content, commentId);
    setCommentUpdateId(-1);
  };

  const [openDeleteCommentModal, setDeleteCommentModal] = React.useState(false);
  const handleClickOpenDeleteCommentModal = (cmtId: number) => {
    setCommentDeleteId(cmtId);
    setDeleteCommentModal(true);
  };
  const handleClickCancelDeleteCommentModal = () => {
    setDeleteCommentModal(false);
  };

  const handleClickDeleteDeleteCommentModal = () => {
    setDeleteCommentModal(false);
    parentCallbackDeleteComment(commentDeleteId);
  };

  const setUpdateComment = (commentId: number) => {
    setCommentUpdateId(commentId);
  };

  const parentCallbackCancelUpdateComment = () => {
    setCommentUpdateId(-1);
  };

  const renderDialogDeleteComment = () => {
    return (
      <Dialog
        open={openDeleteCommentModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickCancelDeleteCommentModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            Confirm delete operation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to delete this CommentOffer?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCancelDeleteCommentModal}>
              Cancel
          </Button>
          <Button onClick={handleClickDeleteDeleteCommentModal} color="error">
              Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div>
      <List sx={{ bgcolor: 'background.paper', mt: 2 }}>
        {loadingListComments && listCommentsByOffer.length === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          listCommentsByOffer.map((comment: ICommentOffer, index: number) => (
            <div key={`comment-${index}`}>
              <ListItem
                alignItems="flex-start"
                secondaryAction={
                  <div>
                    {isAuthenticated && comment?.user?.id === account.id ? (
                      <IconButton edge="end" aria-label="edit" color="success" onClick={() => setUpdateComment(comment.id || -1)}>
                        <ModeEditIcon />
                      </IconButton>
                    ) : null}
                    {isAuthenticated && (offerEntity?.user?.id === account.id || comment?.user?.id === account.id) ? (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        color="error"
                        onClick={() => handleClickOpenDeleteCommentModal(comment.id || -1)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    ) : null}
                  </div>
                }
              >
                <ListItemAvatar>
                  <Avatar alt="Avatar" src={getUserAvatar(comment.user?.id, comment.user?.imageUrl, comment.user?.sourceProvider)} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    (comment?.user?.firstName ? comment?.user?.firstName : '') + ' ' + (comment?.user?.lastName ? comment?.user?.lastName : '')
                  }
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ display: 'block' }} component="span" variant="body2" color="text.primary">
                        {comment.createdDate}
                      </Typography>
                      {commentUpdateId !== comment.id ? comment.content : null}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {commentUpdateId === comment.id ? (
                <Box sx={{ mr: 2, ml: 9 }}>
                  <UpdateComment
                    parentCallbackUpdateComment={(content: string) => handleCallbackUpdateComment(content, (comment.id || -1))}
                    parentCallbackCancelUpdateComment={parentCallbackCancelUpdateComment}
                    defaultValueUpdate={comment.content}
                    loadingUpdateEntity={loadingUpdateEntity}
                  />
                </Box>
              ) : null}
              <Divider variant="inset" component="li" />
            </div>
          ))
        )}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={account.imageUrl} src={getUserAvatar(account.id, account.imageUrl, account?.sourceProvider)} />
          </ListItemAvatar>
          <ListItemText>
            <AddComment parentCallbackAddComment={handleCallbackAddComment} />
          </ListItemText>
        </ListItem>
      </List>
      <div>{renderDialogDeleteComment()}</div>
    </div>
  );
}

function AddComment({ parentCallbackAddComment }: { parentCallbackAddComment: any }) {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaAddCommentOffer,
    onSubmit: values => {
      parentCallbackAddComment(values.content);
      formik.setFieldValue('content', '');
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="content"
          name="content"
          label="Add comment"
          value={formik.values.content}
          onChange={formik.handleChange}
          multiline
          fullWidth
          maxRows={4}
        />
        <LoadingButton
          loading={false}
          variant="outlined"
          size="small"
          type="submit"
          disabled={!formik.values.content}
          sx={{ my: 1 }}
          color="neutral"
        >
          comment
        </LoadingButton>
      </form>
    </React.Fragment>
  );
}

function UpdateComment({ parentCallbackUpdateComment, parentCallbackCancelUpdateComment, defaultValueUpdate, loadingUpdateEntity }:
                           { parentCallbackUpdateComment: any, parentCallbackCancelUpdateComment: any, defaultValueUpdate: any, loadingUpdateEntity: boolean }) {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemaAddCommentOffer,
    onSubmit: values => {
      parentCallbackUpdateComment(values.content);
    },
  });

  useEffect(() => {
    formik.setFieldValue('content', defaultValueUpdate);
  }, []);

  const cancelUpdate = () => {
    parentCallbackCancelUpdateComment(null);
  };

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="content"
          name="content"
          label="Add comment"
          value={formik.values.content}
          onChange={formik.handleChange}
          multiline
          fullWidth
          maxRows={4}
        />
        <Box sx={{ my: 1 }}>
          <LoadingButton
            loading={false}
            variant="outlined"
            size="small"
            type="button"
            sx={{ mr: 1 }}
            color="neutral"
            onClick={cancelUpdate}
          >
              Cancel
          </LoadingButton>
          <LoadingButton
            loading={loadingUpdateEntity}
            variant="outlined"
            size="small"
            type="submit"
            disabled={!formik.values.content}
            color="neutral"
          >
              Update
          </LoadingButton>
        </Box>
      </form>
    </React.Fragment>
  );
}
