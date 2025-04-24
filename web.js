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
})
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts"); // ✅ FIXED spelling

function resetColors() {
  shops.style.color = "white";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
}

shops.addEventListener("click", () => {
  resetColors();
  shops.style.color = "rgb(10, 191, 247)";
});

reviews.addEventListener("click", () => {
  resetColors();
  reviews.style.color = "rgb(10, 191, 247)";
});

blogs.addEventListener("click", () => {
  resetColors();
  blogs.style.color = "rgb(10, 191, 247)";
});

contacts.addEventListener("click", () => {
  resetColors();
  contacts.style.color = "rgb(10, 191, 247)";
});
