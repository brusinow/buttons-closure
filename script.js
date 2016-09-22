var myButtons = document.querySelectorAll("button");
for (var i = 0; i < myButtons.length; i++){
  (function(index){
    myButtons[index].onclick = function(){
    console.log(index);
    }
  }(i))
}