/* 
Reuse your BlogPost class
Create a Blog class which can:
store a list of BlogPosts
and has the following methods:
add(BlogPost) -> adds a BlogPost to the list
delete(int) -> deletes the BlogPost from the given index
update(int, BlogPost) -> replaces an item at the given index with a new BlogPost
*/
import { BlogPost } from "./blogPost";

class Blog {
    public listOfBlogPosts: BlogPost [] = [];

    constructor () {
        this.listOfBlogPosts = [];
    }

    add(newPost: BlogPost): void {
        this.listOfBlogPosts.push(newPost);
    }

    delete(int: BlogPost): void {
      for (let i: number = 0; i < this.listOfBlogPosts.length; i++) {
        let postIndex: number = this.listOfBlogPosts.indexOf(int);
        if (postIndex > -1) {
          this.listOfBlogPosts.splice(i, 1);
        }
      }
    } 
    
    getListOfPosts(): BlogPost [] {
      return this.listOfBlogPosts;
    }

/* ----i am working on the update() ---- 

    update(int, BlogPost): BlogPost [] {
      for (let i: number = 0; i < this.listOfBlogPosts.length; i++) {
        let postIndex: number = this.listOfBlogPosts.indexOf(int);
        if (int === postIndex) {
          this.listOfBlogPosts.splice(i, 1);
          this.listOfBlogPosts.push(BlogPost);
        }
      }
      return this.listOfBlogPosts;
    }
*/

}


let blog1 = new BlogPost('Jones', 'Insight of music production', 'this would be a long content...', '07/12/2021');
let blog2 = new BlogPost('Ármin', 'How to cook without fire', 'We can cook anything without fire...', '03/06/1277');
let blog3 = new BlogPost('Aristoteles', 'Gravity and my other observations', 'I can feel gravity everywhere...', 'i.e. 02/11/763');
// let blogExample = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');

let myBlog = new Blog();
myBlog.add(blog1);
myBlog.add(blog2);
myBlog.add(blog3);
// myBlog.update(1,blog3);

console.log(myBlog);
