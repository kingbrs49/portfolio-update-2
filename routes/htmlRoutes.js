var path = require("path");
var express = require('express')
var app = express();

module.exports = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/portfolio.html"));
    });
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"));
    });
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/about.html"));
    });
    app.get("*", function(req, res) {
        res.render("404");
    });
};