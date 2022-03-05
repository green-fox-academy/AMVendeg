export interface Post {
  id: number;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  owner: null;
  vote: number;
}


// const POSTS: Post[] = [];

// export class PostDatabase {
//   posts: Post[] = POSTS;

//   addPost(post: Post): void {
//     this.posts.push(post);
//   }

//   getPosts(): Post[] {
//     return this.posts;
//   }

//   getPostById(id: number): Post | undefined  {
//     return this.posts.find(post => post.id === id);
//   }

//   getBiggestId(): number {
//     return Math.max(...this.posts.map(user => user.id));
//   }

// }