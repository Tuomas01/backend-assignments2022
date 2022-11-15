"use strict";
console.log("Hello World");
const figCaptionElem = document.querySelector("figcaption")
const imageElem = document.querySelector("img");

const getData = async () => {
  const response = await fetch("pics.json");
  console.log(response);
  const data = await response.json();
  console.log(data);
  figCaptionElem.innerText = data[0].name;
  imageElem.src = data[0].url;
  imageElem.alt = data[0].description;
};

getData();
console.log("test");