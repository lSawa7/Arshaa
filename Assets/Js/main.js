let menu = document.getElementById("icon");
let nav = document.querySelector("nav");
let closeBtn = document.getElementById("close");

// let dropDown = document.querySelector("nav ul li .drop");
// let drop = document.getElementById("drop");
// drop.addEventListener('click',() =>{
//   if(dropDown.style.display==="none"){
//     dropDown.style.display = "block"
//   }else{
//     dropDown.style.display = "none"
//   }
  
// })



//preLOader Togle
let preLoader = document.querySelector(".preLoader");
addEventListener("DOMContentLoaded", () => {
  preLoader.classList.add("active");
});
// Mune Button
menu.addEventListener("click", showIcon);
closeBtn.addEventListener("click", closeIcon);
function showIcon() {
  nav.classList.add("show");
}
function closeIcon() {
  nav.classList.remove("show");
}

// Filter Gallery
let lis = document.querySelectorAll(".portfolio .gallary li");

lis.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    lis.forEach((rm) => {
      rm.classList.remove("active");
      e.target.classList.add("active");
    });
  });
  ele.addEventListener("click", removeIamge);
});

let imgs = Array.from(
  document.querySelectorAll(".portfolio .gallary .item img")
);
let parentImgs = Array.from(
  document.querySelectorAll(".portfolio .gallary .item ")
);

function removeIamge(e) {
  imgs.forEach((pic) => {
    pic.style.display = "none";
    pic.parentElement.style.display = "none";
  });

  document.querySelectorAll(this.dataset.pro).forEach((fillter) => {
    fillter.style.display = "block";
    fillter.parentElement.style.display = "inline-grid";
  });
}

// let showAll =document.querySelectorAll('.wrap');
// let pToggle = document.querySelectorAll('.cou');
// showAll.addEventListener('click',() =>{
//     pToggle.forEach((e) =>{
//         e.classList.remove('active');
//     })
// })
