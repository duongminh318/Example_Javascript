var hinh= document.getElementById("hinh");
var thongBao= document.getElementById("thongBao");
// console.log(thongBao);
console.log(hinh);
// thay đổi

hinh.setAttribute('src', 'hinhmoi.jpg')
hinh.setAttribute('alt', 'Hình mới');

thongBao.textContent=" thông báo mới thay đổi"

// console.log(thongBao);

thongBao.innerHTML= "<span>viết cái gì đó vào đây</span>";


// var secondItem= document.getElementById("second-item");
// console.log(secondItem);
 
// var cha=secondItem.parentNode;
// console.log(cha);
 
// cha.innerHTML='<li>Mục A</li><li>Mục B</li><li>Mục C</li>'
// ;
 
 
// var previousItem=secondItem.previousElementSibling;
// previousItem.textContent="Da thay doi";
 
// var ong=cha.parentElement;
// console.log(ong);