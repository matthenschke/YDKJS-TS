var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Publication = /** @class */ (function () {
    function Publication(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    Publication.prototype.print = function () {
        console.log("\n        Title : " + this.title + "\n        Author : " + this.author + "\n        Published On: " + this.pubDate + "\n        ");
    };
    return Publication;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(bookDetails) {
        var _this = _super.call(this, bookDetails.title, bookDetails.author, bookDetails.pubDate) || this;
        _this.publisher = bookDetails.publisher;
        _this.ISBN = bookDetails.ISBN;
        return _this;
    }
    Book.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Publisher : " + this.publisher + "\n                   ISBN : " + this.ISBN);
    };
    return Book;
}(Publication));
var BlogPost = /** @class */ (function (_super) {
    __extends(BlogPost, _super);
    function BlogPost(blogDetails) {
        var _this = _super.call(this, blogDetails.title, blogDetails.author, blogDetails.pubDate) || this;
        _this.url = blogDetails.url;
        return _this;
    }
    BlogPost.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("URL: " + this.url);
    };
    return BlogPost;
}(Publication));
var pub1;
pub1 = new Publication("Matt's First Book", "M.H", "September 6th, 2020");
pub1.print();
var book1;
book1 = new Book({
    author: "Matt H.",
    title: "Best Book Ever",
    pubDate: "September 6th, 2020",
    publisher: "MEEEEEEE",
    ISBN: "7777-777-777"
});
book1.print();
var blogPost;
blogPost = new BlogPost({
    title: "First Blog Post",
    author: "Matt H.",
    pubDate: "September 6th, 2020",
    url: "www.mattisthegoat.com"
});
