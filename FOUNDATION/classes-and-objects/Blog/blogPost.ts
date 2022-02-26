
class BlogPost {
    authorName: string;
    blogTitle: string;
    blogText: string;
    publicationDate: string;
  
    constructor (authorName: string, blogTitle: string, blogText: string, publicationDate: string) {
      this.authorName = authorName;
      this.blogTitle = blogTitle;
      this.blogText = blogText;
      this.publicationDate = publicationDate;
    }
  }
  
  export { BlogPost }; 
  
  let blog1 = new BlogPost('Jones', 'Insight of music production', 'this would be a long content...', '07/12/2021');
  let blog2 = new BlogPost('Ármin', 'How to cook without fire', 'We can cook anything without fire...', '03/06/1277');
  let blog3 = new BlogPost('Aristoteles', 'Gravity and my other observations', 'I can feel gravity everywhere...', 'i.e. 02/11/763');
  let blogExample = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
  