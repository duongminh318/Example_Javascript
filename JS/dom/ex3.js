// truy vấn phần tử có id =" second-item"
var secondItem= document.getElementById("second-item");
// console.log(secondItem);
 
var cha=secondItem.parentNode;
// console.log("cha của secondItem là ", cha);
  
 //3. ghi đè toàn bộ nội dung của ul thành ds mới
cha.innerHTML='<li>Mục A</li><li>Mục B</li><li>Mục C</li>'
// ;

// var previousItem=secondItem.previousElementSibling;
// console.log(previousItem);
// previousItem.textContent="Da thay doi";

// 4. Vì secondItem đã bị xóa, ta KHÔNG thể truy tiếp previousElementSibling
var newSecondItem = cha.children[1]; // Lấy <li>Mục B>
var previousItem = newSecondItem.previousElementSibling;

// console.log(previousItem);
previousItem.textContent="Da thay doi";
console.log(previousItem);

var ong=cha.parentElement;
console.log(ong);