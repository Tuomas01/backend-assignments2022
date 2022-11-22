// Put code of task B here
// Put code of task A here
const main = document.querySelector("main");

const article = document.createElement("article");
const header = document.createElement("header");
const h2 = document.createElement("h2");
const h2Node = document.createTextNode("Article header");
const figure = document.createElement("figure");
const image = document.createElement("img");
image.src = "http://placekitten.com/320/160";
image.alt = "title";
const figcaption = document.createElement("figcaption");
const figcapNode = document.createTextNode("Caption");
const para = document.createElement("p");
const paraNode = document.createTextNode("Here is some text. Here is some text. Here is some text. Here is some text.");

header.appendChild(h2);
h2.appendChild(h2Node);
figure.appendChild(image);
figure.appendChild(figcaption);
figcaption.appendChild(figcapNode);
para.appendChild(paraNode);
article.appendChild(header);
article.appendChild(figure);
article.appendChild(para);

main.appendChild(article);