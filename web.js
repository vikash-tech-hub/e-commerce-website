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
let buyBtn=document.getElementById("buyBtn");

console.log(crd);
crd.forEach(function(curValue){
  curValue.addEventListener("click", function(){
      itempage.style.display = "flex";
      container.style.display = "none";

      let imgsrc = curValue.firstElementChild.src;
      itemimg.src = imgsrc;

      // Set content immediately
      document.querySelector(".buyText").innerHTML = `
          <h3>Enter details</h3>
          <input type="text" placeholder="Enter your name"id="name"><br>
          <input type="text" placeholder="Enter your Address"id="address"><br>
          <input type="text" placeholder="Enter your Mobile no"id="number"><br>
          <h3>Payment option :</h3>
          <select>
              <option value="Googlepay">Googlepay</option>
              <option value="Phonepe">Phonepe</option>
              <option value="Bharatpe">Bharatpe</option>
              <option value="Paytm">Paytm</option>
          </select><br>
          
      `;
    
      // Add event listener only once
      buyBtn.onclick = function(){
          document.querySelector(".buypage").style.display = "block";
      };
      let buyText = document.querySelector(".buyText");

      let button=document.createElement("button")
      button.innerText="submit"
      buyText.append(button)
      button.addEventListener("click",function(){
        let name =document.getElementById("name");
        let address =document.getElementById("address");
        let number =document.getElementById("number");
        if (name.value=="" && address.value=="" && number.value==""){
          alert("please enter detail")
        }else{
          alert("your response recorded")
        }
      })

      let cross = document.querySelector(".cross");
      cross.addEventListener("click", function(){
          document.querySelector(".buypage").style.display = "none";
      });
  });
  // console.log(curValue);
});


// connect
function connect(){
  let names=document.getElementById("name");
  let num=document.getElementById("number");
  if (name.value=="" && num.value=="" ){
    alert("fill detail")
  }
  else{
    alert("thanks for connect")
  }


}