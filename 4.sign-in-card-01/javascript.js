
//this need update and improve after learning javascript!

var classListOfApple = document.querySelector(".apple_button").classList;
var classListOfGoogle = document.querySelector(".google_button").classList;
document.querySelector(".apple_button").addEventListener("mouseenter", () => {
if (classListOfApple.contains("short_button")){
  classListOfApple.toggle("short_button");
  classListOfApple.toggle("long_button");
  classListOfGoogle.toggle("long_button");
  classListOfGoogle.add("short_button");
}
else{
  console.log("0");
}

});


document.querySelector(".google_button").addEventListener("mouseenter", () => {


if (classListOfGoogle.contains("short_button")){
  classListOfGoogle.toggle("short_button");
  classListOfGoogle.toggle("long_button");
  classListOfApple.toggle("long_button");
  classListOfApple.add("short_button");
}
else{
  console.log("1");
}

});




/*
for(var i = 0 ;i<input_infos.length;i++;){
  input_infos[i].addEventListener("focus",() =>{
    input_infos[i].parentNode.classList.toggle("focus_border");
    input_infos[i].parentNode.children[i].classList.toggle("filter_color");
  });

  input_infos[i].addEventListener("blur",() =>{
    input_infos[i].parentNode.classList.toggle("focus_border");
    input_infos[i].parentNode.children[i].classList.toggle("filter_color");
  });
}
*/


document.querySelector(".input_info01").addEventListener("focus", () => {
01
document.querySelector(".input_info01").parentNode.classList.toggle("focus_border");
document.querySelector(".input_info01").parentNode.children[0].classList.toggle("filter_color");
01
});01
01
document.querySelector(".input_info01").addEventListener("blur", () => {
01
document.querySelector(".input_info01").parentNode.classList.toggle("focus_border");
document.querySelector(".input_info01").parentNode.children[0].classList.toggle("filter_color");

});

document.querySelector(".input_info02").addEventListener("focus", () => {
01
document.querySelector(".input_info02").parentNode.classList.toggle("focus_border");
document.querySelector(".input_info02").parentNode.children[0].classList.toggle("filter_color");
01
});01
01
document.querySelector(".input_info02").addEventListener("blur", () => {
01
document.querySelector(".input_info02").parentNode.classList.toggle("focus_border");
document.querySelector(".input_info02").parentNode.children[0].classList.toggle("filter_color");

});
