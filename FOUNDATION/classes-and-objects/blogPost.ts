/* Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
When I asked to take his picture outside one of IBM’s New York City offices, 
he told me that he wasn’t really into the whole organizer profile thing.
*/

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

let blog1 = new BlogPost('Jones', 'Insight of music production', 'this would be a long content...', '07/12/2021');
let blog2 = new BlogPost('Ármin', 'How to cook without fire', 'We can cook anything without fire...', '03/06/1277');
let blog3 = new BlogPost('Aristoteles', 'Gravity and my other observations', 'I can feel gravity everywhere...', 'i.e. 02/11/763');
let blogExample = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');

console.log(blog1);
console.log(blog2);
console.log(blog3);
console.log(blogExample);