"use strict";
exports.__esModule = true;
var publication_1 = require("./publication");
function printDetails(pub, url) {
    pub.print();
    console.log("URL: " + url);
}
function create(title, author, pubDate, url) {
    var pub = publication_1.create(title, author, pubDate);
    var publicAPI = {
        print: function () {
            printDetails(pub, url);
        }
    };
    return publicAPI;
}
exports.create = create;
