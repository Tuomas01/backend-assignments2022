"use strict";

// creating the express framework using localhost:3000
const express = require('express');
const app = express();
const port = 3000;

let requestCounter = 0;

app.use(express.static("public"));
app.set("view engine", "pug");

//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

// The info about the cat in json format, which is given as a response when /catinfo is requested
app.get("/catinfo", (req, res) => {
    const cat = {
        name: "cat",
        birthdate: "2021-12-01",
        weight: 7,
      };
    res.json(cat);
});

// page for testing pug, pug is an easy way to create html code
app.get("/test", (request, response) => {
    console.log("testing");
    requestCounter++;
    // Example of using pug
    response.render("test", {
        title: "Pug test page",
        header1: "Pug test page",
        header2: "Counter",
        exampleText: "Page requested " + requestCounter + " times",
    });
    // basic html as string
    //response.send("<h1>TEXT page</h1><p>" + requestCounter + "<p>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});