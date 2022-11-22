let balloon = document.querySelector("p");
let size = 100;

document.body.addEventListener("keydown", growShrink);

function growShrink(event) {
  if (event.key == "ArrowUp") {
    console.log("up", event.key);
    balloon.style.fontSize = `${size += 10}%`;
      if (size > 200) {
        balloon.textContent = "💥";
        document.body.removeEventListener("keydown", growShrink);
      }
  } else if (event.key == "ArrowDown") {
    console.log("down", event.key);
    balloon.style.fontSize = `${size -= 10}%`;
  }
}
console.log(":D");