class Publication {
  public title: string;
  public author: string;
  public pubDate: string;
  constructor(title: string, author: string, pubDate: string) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
  public print(): void {
    console.log(`
        Title : ${this.title}
        Author : ${this.author}
        Published On: ${this.pubDate}
        `);
  }
}

class Book extends Publication {
  public publisher: string;
  public ISBN: string;
  constructor(bookDetails: {
    title: string;
    author: string;
    pubDate: string;
    publisher: string;
    ISBN: string;
  }) {
    super(bookDetails.title, bookDetails.author, bookDetails.pubDate);
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }
  public print(): void {
    super.print();
    console.log(`Publisher : ${this.publisher}
                   ISBN : ${this.ISBN}`);
  }
}

class BlogPost extends Publication {
  public url: string;
  constructor(blogDetails: {
    title: string;
    author: string;
    pubDate: string;
    url: string;
  }) {
    super(blogDetails.title, blogDetails.author, blogDetails.pubDate);
    this.url = blogDetails.url;
  }

  public print(): void {
    super.print();
    console.log(`URL: ${this.url}`);
  }
}

let pub1: Publication;
pub1 = new Publication("Matt's First Book", "M.H", "September 6th, 2020");
pub1.print();

let book1: Book;
book1 = new Book({
  author: "Matt H.",
  title: "Best Book Ever",
  pubDate: "September 6th, 2020",
  publisher: "MEEEEEEE",
  ISBN: "7777-777-777"
});
book1.print();

let blogPost: BlogPost;
blogPost = new BlogPost({
  title: "First Blog Post",
  author: "Matt H.",
  pubDate: "September 6th, 2020",
  url: "www.mattisthegoat.com"
});
