 console.log("Toán Tử");

// 1. Toán tử số học
// 1.1 Các toán tử số học
// 1.1.1 Toán tử cộng (+)

// var a = 5;
// var b = 3;
// var c = a + b;
// var d= 100+1+1+999;
// console.log("a + b = " + c);
// console.log(d);

// // nối chuỗi
// var str= "Hello";
// var str2= "World";
// var str3= str + " "+ str2;
// console.log(str3);

// var str4= a +str+b ;
// console.log(str4);
// //

// // trừ 
// var e = a - b;
// console.log("a - b = " + e);

// // var f = 100 + 10 * str+10 - 80 ;
// console.log(f);
// // nhân

// var a = 5;
// var b = 3;
// var g = a * b;
// console.log("a * b = " + g);

// // // chia
// var h = a / b;
// console.log("a / b = " + h);


// prefix increment and postfix increment
// ++a, a++, --a, a--

// var x = 5;
// var y = ++x;  // x tăng lên 6 trước, rồi gán giá trị 6 cho y

// console.log(x); // 6
// console.log(y); // 6

// var a = 5;
// var b = a++;  // b lấy giá trị 5 trước, rồi a mới tăng lên 6

// console.log(a); // 6
// console.log(b); // 5


// var num = 10;
// console.log(num++); // 10 (in ra trước, rồi mới tăng lên 11)
// console.log(num);   // 11

// num = 10;
// console.log(++num); // 11 (tăng lên 11 trước, rồi mới in ra)
// console.log(num);   // 11

// chia lấy phần dư
// var a = 5;
// var b = 2;
// var c = a % b;
// console.log("a % b = " + c);
// console.log(10 % 3);


// console.log(5 !== "5");
// console.log(5 != "5");

// ex6
// var  productName = "Áo phông";
// var quantity = 3;
// var price = 150000;
// var totalPrice = quantity * price;
// var str= "Bạn đã mua " + quantity + "";

//ex 8
//discount = originalPrice * 10 / 100;
//finalPrice = originalPrice - discount;

// toán tử gán
//  var a = 5;
//  var b ;
//  b = a;
// console.log(b);

// var c=null;
// console.log(typeof c);
// c= a;
// console.log(c);

// gán cộng 
// var a = 5;
// var b = 3;
// //a = a+ b; // tương đương với a = a + b;
// a+= b; // tương đương với a = a + b;
// console.log(a);

// var currentStock = 50;
// var newOrders = 20;
// currentStock += newOrders; // Tương đương: currentStock = currentStock + newOrders;
// console.log(currentStock); // Kết quả: 70 (Tổng số lượng hàng tồn kho sau khi thêm đơn hàng mới)

// var a = 5;
//  var b = 3;
// a -= b; // tương đương với a = a -b;
// console.log(a);

// //

// var quantity = 10;
// var pricePerUnit = 25;
// quantity *= 2; // Tương đương: quantity = quantity * 2;
// var totalPrice = quantity * pricePerUnit; // Tính tổng giá sau khi tăng số lượng
// console.log(totalPrice); // Kết quả: 500 (Tổng giá trị đơn hàng sau khi tăng số lượng gấp đôi)

// chia
// var totalStudents =120;
// var numberOfGroups = 3;
// totalStudents /= numberOfGroups; //
// console.log(totalStudents); // Kết quả: 40 (Số học sinh trung bình mỗi nhóm)


// ex9
// var currentStock = 150;
// currentStock += 75;
// currentStock -= 35;
// console.log(currentStock);

// Toán tử so sánh
// so sánh chặt chẽ , nghiêm ngặt
// yêu cầu giá trị và kiểu dữ liệu phải giống nhau ===

// console.log(5 === 5); // true
// console.log(5 === Number("5")); // false
// console.log(5 === 6); // false    
// console.log("hello" === "hello"); // true
// console.log(true===true);

// so sánh lỏng lẻo, không yêu cầu kiểu dữ liệu phải giống nhau ==
// console.log(5 == "5");
// console.log(true == 1);

// khác, chặt chẽ
// console.log(5 !== "5");
// console.log(5 !== 5);

// khác,lỏng lẻo => không yêu cầu kiểu dữ liệu
// console.log(5 != "5"); // false (so sánh lỏng - có ép kiểu, giá trị sau ép kiểu bằng nhau)
// console.log(0 != true); // true (so sánh lỏng - có ép kiểu, giá trị sau ép kiểu khác nhau)


//ex 11
// var averageScore = 7.5;
// var studentCount = 25;
// var totalScore = averageScore * studentCount;
// console.log(totalScore);
// studentCount += 5;
// totalScore += 38;

// var newAverage = totalScore / studentCount;
// console.log(newAverage);

// var averageScore = 7.5; // Điểm trung bình ban đầu của lớp
// var studentCount = 25; // Tổng số học sinh ban đầu trong lớp
// var totalScore = averageScore * studentCount; // Tính tổng điểm ban đầu
// var additionalScore = 38; // Tổng điểm của 5 học sinh mới
// studentCount += 5; // Cập nhật số lượng học sinh (thêm 5 học sinh mới)
// totalScore += additionalScore; // Cập nhật tổng điểm (cộng thêm điểm của học sinh mới)
// var newAverageScore = totalScore / 30; // Tính điểm trung bình mới
// console.log("Điểm trung bình mới của lớp:", newAverageScore); // In ra điểm trung bình mới

//Giá mới = Giá gốc × (1 + Tỷ lệ giảm / 100)
// var productPrice = 280000;
// var increasePercentage = 15;
// productPrice *= (1 + increasePercentage / 100);
// console.log(productPrice);

/// Toán tử logic
// And
// console.log(true && true && true &&  true  && true  && true &&false ); // true  
// console.log(true && true); // true (cả hai vế đều đúng)
// console.log(true && false); // false (một trong hai vế sai)
// console.log(false && true); // false (một trong hai vế sai)
// console.log(false && false); // false (cả hai vế đều sai)

// var age = 20; // Tuổi
// var hasLicense = true; // Có bằng lái xe
// var result = age >= 18 && hasLicense;
// console.log(result);


// Or
// console.log(true || true); // true (cả hai vế đều đúng)
// console.log(false || false || false || false || false || false || true); // true (một trong hai vế đúng)
// console.log(true || true); // true (ít nhất một vế đúng)
// console.log(true || false); // true (ít nhất một vế đúng)
// console.log(false || true); // true (ít nhất một vế đúng)
// console.log(false || false); // false (cả hai vế đều sai)

// var temperature = -15; // Nhiệt độ
// var result = temperature < 0 || temperature > 40// Kiểm tra nhiệt độ quá thấp HOẶC quá cao
// console.log(result);

// Not

//  console.log(!true); // false (phủ định của true là false)
//  console.log(!false); // true (phủ định của false là true)

//  var isLoggedIn = false; // Biến trạng thái đăng nhập
// console.log(!isLoggedIn);

// độ ưu tiên

// var calculationResult1 = 2 + 3 * 4;
// console.log(calculationResult1); // 14 (2 + 3 * 4 = 14)

// var calculationResult2 = (2 + 3) * 4; // Ngoặc đơn thay đổi thứ tự ưu tiên
// console.log(calculationResult2); // 20 ((2 + 3) * 4 = 20)

// var arry= [1,2,3,4,[5+6],7,8,9,10];
// console.log(arry);

// toán tử 3 ngôi

var age = 2;
var message = age >= 18 ? "Người được phép bầu cử" : "Người chưa đủ tuổi bầu cử";
console.log(message);

