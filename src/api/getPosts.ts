import fetcher from './fetcher';
import { Post } from '../types'

async function getPosts () {
    return (await fetcher.get<Post[]>('/v1/posts')).data;
  }
  
  
export { getPosts };
export type { Post };