// lấy element bên html qua
// var btn= document.getElementById("btn");
// var kq= document.getElementById("kq");

// // gán sự kiện cho button, nếu click thì chạy phần { chạy lệnh gì đó}
// btn.addEventListener('click', function(){

//     kq.textContent= " bạn đã bấm";
// });

// var form= document.getElementById('formDangKy');
// var xuat= document.getElementById('xuat');

// form.addEventListener('submit', function(event){
//      event.preventDefault();

//     var ten= document.getElementById('ten').value;
//     var email= document.getElementById('email').value;

//     xuat.textContent= 'tên : ' + ten +' email :'+email;


// })


// var nut = document.getElementById('submit');

// var xuat= document.getElementById('xuat');

// nut.addEventListener('click', function(event){
//       event.preventDefault();

//     var ten= document.getElementById('ten').value;
//     var email= document.getElementById('email').value;

//     xuat.textContent= 'tên : ' + ten +' email :'+email;


// });
// lấy bên html
// var nhap= document.getElementById('nhap');
// var hienthi= document.getElementById('hienthi');

// // gán sự kiện
// nhap.addEventListener('change', function(){
//     // 
//     hienthi.textContent= "Bạn đã nhập " +nhap.value;
//     // alert("bạn đã thay đổi ô input "+nhap.value )

// })


var city = document.getElementById("city");
var citySelected = document.getElementById("citySelected");
city.addEventListener("change", function () {
    citySelected.textContent = "Thành phố bạn chọn là: " + city.value;
});

