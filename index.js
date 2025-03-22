console.log("Xin chào bạn nhé");

// khai báo biến var
// var name = "Alex Win"
// var age= 25;
// var address= "Can Tho City";

// console.log(name);
// console.log(age);
// console.log(address);

// cú pháp
// var message= "hello Ngọc";
// var age= 24;
// console.log(message);

// thay đổi giá trị biến
// message= "hello Minh";
// age= 18;

// console.log(message);

// bài tâp 2
// câu 1
// console.log("biến trước khi thay đổi giá trị");
// var ten = "John";
// var tuoi = 25;
// var laHocVien = true;
// console.log(ten);
// console.log(tuoi);
// console.log(laHocVien);

// console.log("biến sau khi thay đổi giá trị");
// ten= "Win";
// tuoi= 26;
// laHocVien= false;

// console.log(ten);
// console.log(tuoi);
// console.log(laHocVien);

// bai 3: 
// var data= 10;
// console.log(data);

// data= "hello Ngoc";
// console.log(data);

// Ký tự đầu tiên chỉ được thuộc một trong các 
// ký tự sau: bảng chữ cái (A đến Z hoặc a đến z), 
//  _ (dấu gạch dưới) hoặc $ (dấu đô la).

//Các ký tự còn lại chỉ được thuộc một trong các 
// ký tự sau: bảng chữ cái (A đến Z hoặc a đến z),
//   _ (dấu gạch dưới), $ (dấu đô la) hoặc chữ số 
// (0 đến 9).

// var n8me= "Teo";
// var _age= 25;
// var $gia= 24000;

// ví dụ không hợp lệ

// var 1name= "tun";

// Không được trùng với từ khóa trong
//  JavaScript (var, let, if, function...).

// var var= 12;

// Camel Case
//bình luận cái gì đó
// console.log("hello");

// var tenBan= "Khánh Ngọc";
// //console.log(tenBan);
// var namSinh= 2007; 
// var laHocSinh= true; 
// var laHocSinh2; 

//console.log("hello coco");

// typeof - kiểm tra kiểu dữ liệu của biến
// shift+option+ mũi tên chỉ xuống = copy y chang dong bên trên
/* console.log(typeof tenBan); //string
console.log(typeof namSinh); //number
console.log(typeof laHocSinh); //boolean
console.log(typeof undefined);  //undefined
console.log(typeof laHocSinh2);  //undefined
console.log(typeof null);   // object (null)
console.log(typeof {name: "Alice"}); // "object"
console.log(typeof [1, 2, 3]);   // "object" (Array là một object)


var numbers = [1, "haha", 3, 4, 5, true];
console.log(typeof numbers); //array 
 */

/* var numbers = [1, "haha", 3, 4, 5, true];
var danhSachBan= ["tuấn", 3, "tèo", null ];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[10]);

console.log(danhSachBan[2]);

numbers[0]= 2; // 2  "haha", 3, 4, 5, true]
numbers[1]= "hoho";
console.log(numbers);

console.log(numbers[0]); */

// var complexArray = [
//     42,                 // Phần tử thứ nhất: Number
//     ["Táo", "Cam", "xoai", ["meo", "cho", "ga"] ],     // Phần tử thứ hai: Mảng con
//     true             // Phần tử thứ ba: Boolean
     
// ];
// console.log(complexArray[1][3][1]); // "cho"
// console.log(complexArray[0]);
// console.log(complexArray[1]);
// console.log(complexArray[1][1[0]]);
// //console.log(complexArray[3][1]);

// var nestedArray = [
//     1, 
//     [2, 3, 
//         [4, 5, 
//             [6, 7, 
//                 [8, 9]
//             ]
//         ]
//     ]
// ];
// console.log(nestedArray[1][2][2][1]);
// var complexArray = [
//     42,                 // Phần tử thứ nhất: Number
//     ["Táo", "Cam"],     // Phần tử thứ hai: Mảng con
//     true               // Phần tử thứ ba: Boolean
// ];

// console.log(complexArray.length);
// console.log(complexArray[1].length);


// var numbers = [1, 2, 3];

// numbers[5] = 10;
// // 1,2,3, emty, emty, 10
// console.log(numbers);
// console.log(numbers.length);

// var animal = {
//     name: "tom",     // Key: name, Value: "Alice" (string)
//     age: 2,           // Key: age, Value: 20 (number)
//     isEnrolled: true ,  // Key: isEnrolled, Value: true (boolean)
//     height: 179,   // Key: isEnrolled, Value: true (boolean)
//     isEnrolled: true   // Key: isEnrolled, Value: true (boolean)
// };

// console.log(animal["name"]);
// console.log(animal.age);
// console.log(animal.height);
// console.log(animal.height);
// console.log(animal.dkhasfdafk);

// // thêm sửa thuộc tính trong object
// animal.name= "Jerry";
// animal.age= 3;
// // thêm thuộc tính mới
// animal.weight= 20;

// console.log(animal.weight);

//console.log(Object.keys(animal).length); 
// console.log(animal.length);

// var course = {
//     name: "JavaScript",
//     students: ["Alice", "Bob", "Charlie"], // Key: students, Value: Mảng
//     duration: 3
// };

// console.log(course.students);      // ["Alice", "Bob", "Charlie"]
// console.log(course.students[1]);   // "Alice"


// var company = {
//     name: "TechCorp",
//     address: {
//         city: "Hà Nội",      // Key: city, Value: "Hà Nội"
//         country: "Vietnam" ,  // Key: country, Value: "Vietnam"
//         district: {
//             name: "Ba Đình",
//             street: "Kim Mã"
//         },
//     },
//     employees: 100
// };

// console.log(company.address.city); // "Hà Nội"
// console.log(company.address.district.name); // "Ba Đình"

// var car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2023
// };
// console.log(car);

// exercise 11
// var  = {
   
// };
// console.log(car);

// exercise 12
// var library = {
//     name: "Central Library",
//     books: ["JavaScript Basics", "Python for Beginners", "Data Structures"]
// };

// console.log(library.books[1]); // "Python for Beginners"
// library.books[3] = "Web Development";
// console.log(library);

//undifined
// var ten;
// console.log(ten);
// console.log(typeof ten);

// var arr= [1, 2, 3, 4, 5];
// console.log(arr.length);
// console.log(arr[5]);

// var obj = { name: "Alice" };
// console.log(obj.age); // undefined (thuộc tính 'age' không tồn tại)


//null
// var b = null;
// console.log(b); // null
// console.log(typeof b); // "object"

// NaN

//  var result = "Hello" / 5;
//  console.log(result);
//  console.log(0 / 0);  // NaN
//  console.log("abc" - 10); 
// console.log(undefined + 10); // NaN

// var bien ="Hello";
// console.log(bien/5);
// bien= 3;
// console.log(bien/5);

// var bien2= "Hello"/5;
// console.log(bien2);
// bien2= "hello2"/3;
// console.log(bien2);

//Các hàm chuyển đổi kiểu dữ liệu

// console.log(Number("123")); // 123 (chuỗi số thành số)


// console.log(Number("123abc")); // NaN (Không thể chuyển đổi)

//  var so= "123";
// // console.log(typeof so); // 123 (chuỗi số thành số)
//  console.log(so+1);
//  var soDaChuyenDoi= Number(so);
//  console.log(typeof soDaChuyenDoi); // 123 (chuỗi số thành số)
//  console.log(soDaChuyenDoi+1);
// var boll= true;
// console.log(Number(boll)); // 1
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

// console.log(Number("123ac")); // 0

// var str = "456";
// Number(str);
// console.log(str); // "456" (Vẫn giữ nguyên giá trị gốc)

// str = Number(str); // Gán lại giá trị mới
// console.log(str); // 456 (Bây giờ str đã thành số)

//Boolean() – Chuyển đổi sang kiểu boolean
//  console.log(Boolean(1)); // true
//  console.log(Boolean(0)); // false
//  console.log(Boolean(2));
//  console.log(Boolean(2));

//  console.log(Boolean("Hello dkafkal")); // true
//  console.log(Boolean("")); // false
//  console.log(Boolean(null)); // true

// var num = 10;
// Boolean(num);
// console.log(num); // 10 (Vẫn giữ nguyên)

// var num2 = Boolean(num2); // Gán lại giá trị mới
// console.log(num2); // true (Bây giờ num đã thành boolean)

//String() – Chuyển đổi sang kiểu string
// console.log(String(123)); // "123"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// console.log(String([1, 2, 3])); // "1,2,3" (Mảng thành chuỗi)

// var num = 10;
// String(num);
// console.log(num); // 10 (Vẫn giữ nguyên)
// console.log(typeof num); // number

// var num = 10;
// num = String(num);  // Gán lại giá trị
// console.log(num);        // 👉 "10"
// console.log(typeof num); // 👉 "string"

// var num= null
// Boolean(num);
// console.log(num);

// console.log(Boolean([])); 
// console.log(Boolean(null));
//console.log(String([1, 2, 3]));

// var typeof = 20;
// var name;
// var numbers = [];
// console.log(numbers);
// console.log(typeof numbers);

// var bienChuaChuyen= "123";
// console.log(Number(bienChuaChuyen));
// var bienDaChuyen= Number(bienChuaChuyen);
// var tinhToan= bienDaChuyen+1;

// console.log(tinhToan);

