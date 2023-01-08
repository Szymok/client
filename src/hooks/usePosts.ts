import {useQuery, QueryKey} from '@tanstack/react-query';

import {getPosts} from '../api/getPosts'

const queryKey: QueryKey = ['get-posts'];

function usePosts() {
    return useQuery(queryKey, getPosts, {
        placeholderData: [],
   });
}
export {queryKey};
export default usePosts;