import { FC, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useAddPost from "../../hooks/useAddPost";

import {Post} from '../../types'

const AddPostTile = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const mutation = useAddPost({
        onSuccess: handleClose,
    });

    const handleSubmit = () => {
        mutation.mutate({title, content});
    };
    


    return (
        <>
            <Card sx={{minWidth: 275, minHeight: 200, cursor: 'pointer' }} onClick={handleClickOpen}>
                <CardContent>Add Post</CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum add post
                    </DialogContentText>
                    <TextField
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Post title"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        autoFocus
                        margin="dense"
                        id="content"
                        label="Content"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default AddPostTile;