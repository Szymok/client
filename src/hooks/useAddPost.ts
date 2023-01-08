import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

import { addPost, AddPostProps } from '../api/addPost'
import { queryKey } from './usePosts'

function useAddPost({onSuccess}: UseMutationOptions<unknown, Error, AddPostProps>) {
    const queryClient = useQueryClient();
    return useMutation(["addPost"], addPost, {
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

export default useAddPost;