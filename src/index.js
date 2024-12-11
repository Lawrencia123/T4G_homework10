// let dom = document.getElementById("dom");
// dom.style.backgroundColor = "gray";
// dom.style.color = "black";
// dom.innerHTML = "I know now what the DOM is 🙌 ";
function greynblack(){
    dom.style.backgroundColor ="grey";
    dom.style.color = "black";
    dom.innerHTML = "I know now what the DOM is 🙌";
}
let dom = document.getElementById("dom");
dom.addEventListener("click",greynblack);

// let para2 = document.getElementById("para2");
// para2.style.backgroundColor = "yellow";
// para2.style.color ="black"
// para2.innerHTML = "I now know how to access / select elements in the DOM 👊🏼"

   function yellownblack(){
    para2.style.backgroundColor = "yellow";
    para2.style.color = "black";
    para2.innerHTML = "I know now how to access / select element in the DOM 👊🏼"
   }
  let para2 = document.getElementById("para2");
  para2.addEventListener("click", yellownblack);

// let para3 = document.getElementById("para3");
// para3.style.backgroundColor = "green";
// para3.style.color = "black";
// para3.innerHTML = "I know how to use the style methods to change the stle of the element in the DOM ✔️";

function greennblack(){
    para3.style.backgroundColor = "green";
    para3.style.color = "black";
    para3.innerHTML = "I now know how to use the style methods to change the style of the element in the DOM ✔️"
}
let para3 = document.getElementById("para3");
para3.addEventListener("click", greennblack);
// let para4 = document.getElementById("para4");
// para4.style.backgroundColor = "blueviolet";
// para4.style.color = "white";
// para4.innerHTML = "I know how the styling properties differ in JS from CSS 👍 "

function bluenviolet(){
    para4.style.backgroundColor = "blueviolet";
    para4.style.color = "white";
    para4.innerHTML = "I know how the stying properties differ in JS from CSS 👍"
}
let para4 = document.getElementById("para4");
para4.addEventListener("click",bluenviolet);
// let para5 = document.getElementById("para5");
// para5.style.backgroundColor = "black";
// para5.style.color = "white";
// para5.innerHTML = "Yes i did it! I manipulated the DOM and styled my elemets 🤩🤩🤩🤩"

 function blacknwhite (){
    para5.style.backgroundColor = "black";
    para5.style.color = "white";
    para5.innerHTML = "Yes i did it! I manipulated the Dom and styled my elements 🤩🤩🤩🤩"
}
let para5 = document.getElementById("para5");
para5.addEventListener("click",blacknwhite);
// let heading1 = document.getElementById("heading1");
// heading1.style.backgroundColor = "blue"

function appear(){
let img = document.querySelector(".butimg");
img.style.display = "block";
}
let image = document.getElementById("button");
image.addEventListener("click",appear);



