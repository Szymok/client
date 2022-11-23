import fetcher from './fetcher';

async function removePost(data: string) {
  return fetcher.delete('/v1/posts/${id}');
}

export { removePost };