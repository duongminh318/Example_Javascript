// lấy ra button highlight
var highlightButton=document.getElementById("highlightButton");
//gán dô button

highlightButton.addEventListener("click",function(){
    var items= document.querySelectorAll(".color-item");
    console.log(items);
for(var i=0;i< items.length; i++){
    //sửa lại toàn class
    // items[i].setAttribute("class", "color-item highlight")

    // thêm class mới vẫn giữa lại class cũ
    items[i].classList.add('highlight');

}
});

  
 
var changeColor=document.getElementById("changeColor");

changeColor.addEventListener("click", function() {
    var greenItem = document.getElementById("green-item");
  var parentElement = greenItem.parentNode;
  parentElement.style.backgroundColor = "lightgreen";
});