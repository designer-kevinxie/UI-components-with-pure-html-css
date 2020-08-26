var cards = document.querySelectorAll(".card-item");

for(var i = 0 ;i<cards.length;i++){

   document.querySelectorAll(".card-item")[i].addEventListener("mouseenter",function(){
  this.classList.toggle("card-hover");
});

document.querySelectorAll(".card-item")[i].addEventListener("mouseleave",function(){
this.classList.toggle("card-hover");
});

}
