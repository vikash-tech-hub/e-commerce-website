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

// i am removing the fucntions from here and put the things direclty as he done in the video

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

// crd js

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");

console.log(crd);


crd.forEach(function(curValue){
        curValue.addEventListener("click",function(){
          itempage.style.display ="flex";
          container.style.display =" none";

           let imgsrc = curValue.firstElementChild.src;
           itemimg.src=imgsrc;

        
          //console.log(curValue);
        })    

    })
