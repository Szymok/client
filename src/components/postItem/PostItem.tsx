import { FC } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Post} from '../../types'

interface IPostItemProps extends Post {
    handleDelete: () => void;
}

const PostItem: FC<IPostItemProps> = ({ _id, createdAt, deletedAt, title, updatedAt, content, handleDelete}) => {
    return <Card sx={{minWidth: 275 }}>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" component="div">
                {content}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                {createdAt}
            </Typography>
            <Typography variant="body2">
                {updatedAt}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="error" onClick={handleDelete}>Delete</Button>
            <Button size="small">Update</Button>

        </CardActions>
        </Card>;
};

export default PostItem;