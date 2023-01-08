import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

import { removePost } from '../api/removePost'
import { queryKey } from './usePosts'

function useDeletePost({onSuccess}: UseMutationOptions<unknown, Error, any> = {}) {
    const queryClient = useQueryClient();
    return useMutation(["delete-post"], removePost, {
        onSuccess: async (data, variables, context) => {
            onSuccess && onSuccess(data, variables, context);
            console.log('Post added successfully');
            await queryClient.invalidateQueries(queryKey);
    },
    onError: () => {
        console.log('Error adding post');
        },
    });
        
}

export default useDeletePost;