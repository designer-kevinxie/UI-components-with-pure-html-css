var cards = document.querySelectorAll(".card-item");

for(var i = 0 ;i<cards.length;i++){
  console.log(cards[i]);

   cards[i].addEventListener("mouseenter",function(){
  this.classList.toggle("card-hover");
});

cards[i].addEventListener("mouseleave",function(){
this.classList.toggle("card-hover");
});

}
