export interface Post {
    title: string;
    content?: string;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string | null;
    _id: string;
  }