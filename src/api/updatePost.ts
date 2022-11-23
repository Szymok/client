import fetcher from './fetcher';
import { Post } from '../types';

interface UpdatePostData extends Partial<Pick<Post, 'title' | 'content'>> {}

async function updatePost(id: string, data: UpdatePostData) {
  return fetcher.patch<Post>('/v1/posts/${id}');
}

export { updatePost };