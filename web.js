let icon = document.querySelector(".icon");
let ul   = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showdata");

  const bar = document.getElementById("bar");
  if (ul.classList.contains("showdata")) {
    bar.className = "fa-solid fa-xmark";
  } else {
    bar.className = "fa-solid fa-bars";
  }
});
