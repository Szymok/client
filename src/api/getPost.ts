import fetcher from './fetcher';
import { Post } from '../types'

async function getPost(id: string) {
    return fetcher.get<Post[]>('/v1/posts/${id}');
  }
  
  
export { getPost };
