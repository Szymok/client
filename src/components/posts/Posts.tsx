import Grid from '@mui/material/Grid'

import usePosts from "../../hooks/usePosts";

import PostItem from '../postItem/PostItem';
import AddPostTile from '../addPostTile/AddPostTile';
import usePostDelete from '../../hooks/usePostDelete'

const Posts = () => {
    const {isLoading, isError, data} = usePosts();
    const postDeleteMutation = usePostDelete();


    return <div>
        {isLoading ? <div>Loading...</div> : null}
        {isError ? <div>Error</div> : null}
        <Grid container={true}>
            {data?.map((post) => (
                <Grid item={true} xs={12} sm={6} md={4} key={post._id}>
                    <PostItem {...post} handleDelete={ () => postDeleteMutation.mutate(post._id)}/>
                </Grid>
            ))}
            <Grid item={true} xs={12} sm={6} md={4}>
                <AddPostTile />
                </Grid>

        </Grid>
    </div>;
};

export default Posts;