"use strict";
exports.__esModule = true;
function printDetails(title, author, pubDate) {
    console.log("Title: " + title + "\n                 Author: " + author + "\n                 Published Date: " + pubDate);
}
function create(title, author, price) {
    var publicAPI = {
        print: function () {
            printDetails(title, author, price);
        }
    };
    return publicAPI;
}
exports.create = create;
