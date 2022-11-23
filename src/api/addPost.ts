import fetcher from './fetcher';
import { Post } from '../types'

interface AddPostProps extends Pick<Post, 'title' | 'content'>{}

async function addPost (data: any) {
  return fetcher.post<Post>('/v1/posts', data);
}

export { addPost };