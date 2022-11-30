const picArray = [
  {
    'title': 'Title 1',
    'caption': 'Caption 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'filename': 'img/pic1.jpg',
  },
  {

    'title': 'Title 2',
    'caption': 'Caption 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'filename': 'img/pic2.jpg',
  },
  {
    'title': 'Title 3',
    'caption': 'Caption 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'filename': 'img/pic3.jpg',
  },
  {
    'title': 'Title 4',
    'caption': 'Caption 4',
    'description': 'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'filename': 'img/pic4.jpg',
  },
  {

    'title': 'Title 5',
    'caption': 'Caption 5',
    'description': 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    'filename': 'img/pic5.jpg',
  },
  {
    'title': 'Title 6',
    'caption': 'Caption 6',
    'description': 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    'filename': 'img/pic6.jpg',
  }, {
    'title': 'Title 7',
    'caption': 'Caption 7',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'filename': 'img/pic7.jpg',
  },
  {

    'title': 'Title 8',
    'caption': 'Caption 8',
    'description': 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    'filename': 'img/pic8.jpg',
  },
  {
    'title': 'Title 9',
    'caption': 'Caption 9',
    'description': 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    'filename': 'img/pic9.jpg',
  },
];

// Put code of task C here
//console.log(picArray.length);
const main = document.querySelector("main");
for (let i = 0; i < picArray.length; i++) {
  const article = document.createElement("article");
  const header = document.createElement("header");
  const h2 = document.createElement("h2");
  const h2Node = document.createTextNode(picArray[i].title);
  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = picArray[i].filename;
  image.alt = picArray[i].title;
  const figcaption = document.createElement("figcaption");
  const figcapNode = document.createTextNode(picArray[i].caption);
  const para = document.createElement("p");
  const paraNode = document.createTextNode(picArray[i].description);

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
}

