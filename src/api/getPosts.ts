import fetcher from './fetcher';
import { Post } from '../types'

async function getPosts () {
    return fetcher.get<Post[]>('/v1/posts');
  }
  
  
export { getPosts };
export type { Post };