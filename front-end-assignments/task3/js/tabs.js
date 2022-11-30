const main = document.querySelector("main");
const one = document.getElementById("tab-one");
const two = document.getElementById("tab-two");
const three = document.getElementById("tab-three");

for (let i = 1; i <= 3; i++) {
  let tabs = document.createElement("button");
  let buttontext = document.createTextNode("Tab " + [i]);
  tabs.addEventListener("click", () => {
    console.log("Tab " + [i] + " clicked");
    if ([i] == 1) {
      one.style.display = "block";
      two.style.display = "none";
      three.style.display = "none";
    } else if ([i] == 2) {
      two.style.display = "block";
      three.style.display = "none";
      one.style.display = "none";
    } else {
      three.style.display = "block";
      one.style.display = "none";
      two.style.display = "none";
    }
  });
  tabs.appendChild(buttontext);
  main.appendChild(tabs);
}