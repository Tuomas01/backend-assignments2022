const apiUrl = "https://api.tvmaze.com/";
const singleSearch = "singlesearch/shows?q=";
const searchAll = "search/shows?q="

async function getFirstResult() {
  const inputSeriesName = document.getElementById("search-field").value;
  console.log("your input:", inputSeriesName);
  console.log(apiUrl + singleSearch + inputSeriesName);

  const response = await fetch(apiUrl + searchAll + inputSeriesName)
  console.log("response:", response);
  const data = await response.json();
  console.log("data:", data);
  console.log("first search:", data[0]);
  if (data[0].show.image == null) {
    document.getElementById("img").src = "https://place-puppy.com/300x300";
  } else {
    document.getElementById("img").src = data[0].show.image.medium;
  }
  document.getElementById("name").innerHTML = "Name: " + data[0].show.name;
  document.getElementById("url").innerHTML = "Url: " + data[0].show.url;
  document.getElementById("url").href = data[0].show.url;
  document.getElementById("summary").innerHTML = "Summary: " + data[0].show.summary;
  console.log("Number of tv shows:", data.length);
};

async function getAllShows() {
  const inputSeriesName = document.getElementById("search-field").value;
  console.log("your input:", inputSeriesName);

  const response = await fetch(apiUrl + searchAll + inputSeriesName)
  console.log("response:", response);
  const data = await response.json();
  console.log("data:", data);

  const element = document.getElementById("tvShowsDiv");
  for (let i = 0; i < data.length; i++) {
    const image = document.createElement("img");
    if (data[i].show.image == null) {
      image.src = "https://place-puppy.com/300x300";
    } else {
      image.src = data[i].show.image.medium;
    }

    const name = document.createElement("p");
    const nameNode = document.createTextNode("Name: " + data[i].show.name);
    name.appendChild(nameNode);

    const url = document.createElement("a");
    url.href = data[i].show.url;
    const urlNode = document.createTextNode("Url: " + data[i].show.url);
    url.appendChild(urlNode);

    const summary = document.createElement("p");
    const summaryNode = document.createTextNode("Summary: " + data[i].show.summary);
    summary.appendChild(summaryNode);

    const genres = document.createElement("p");
    const genresNode = document.createTextNode("Genres: " + data[i].show.genres)
    genresNode.slice
    genres.appendChild(genresNode);
    console.log("genres: ", genres);

    element.appendChild(image);
    element.appendChild(name);
    element.appendChild(url);
    element.appendChild(summary);
    element.appendChild(genres);
  }
};