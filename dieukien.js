// var month = parseInt(prompt("Mời Thím Nhập số tháng (1-12):"));

// switch (month) {
//   case 1:
//     alert("Tháng 1 là tháng Một");
//     break;
//   case 2:
//     alert("Tháng 2 là tháng Hai");
//     break;
//   case 3:
//     alert("Tháng 3 là tháng Ba");
//     break;
//   case 4:
//     alert("Tháng 4 là tháng Tư");
//     break;
//   case 5:
//     alert("Tháng 5 là tháng Năm");
//     break;
//   case 6:
//     alert("Tháng 6 là tháng Sáu");
//     break;
//   case 7:
//     alert("Tháng 7 là tháng Bảy");
//     break;
//   case 8:
//     alert("Tháng 8 là tháng Tám");
//     break;
//   case 9:
//     alert("Tháng 9 là tháng Chín");
//     break;
//   case 10:
//     alert("Tháng 10 là tháng Mười");
//     break;
//   case 11:
//     alert("Tháng 11 là tháng Mười Một");
//     break;
//   case 12:
//     alert("Tháng 12 là tháng Mười Hai");
//     break;
//   default:
//     alert("Số tháng không hợp lệ.");
// }


// IF
// if (điều_kiện) {
//     // Khối lệnh sẽ được thực hiện nếu điều_kiện là đúng (true)
//     // ... các câu lệnh ...
//    }

//// ví dụ
// var number = -10;
// if (number > 0) {
//   console.log("số " + number + " là sô dương");
// }else{
//   console.log("số " + number + " là sô âm");
// }

// IF ELSE
// if (điều_kiện) {
//     // Khối lệnh JavaScript 1: Thực hiện nếu điều_kiện là true
//    } else {
//     // Khối lệnh JavaScript 2: Thực hiện nếu điều_kiện là false
//    }
   
// var number = 7; // Sử dụng var để khai báo biến number
// if (number % 2 === 0) { // Điều kiện: number chia hết cho 2 (số dư bằng 0)?
//  console.log("Số này là số chẵn."); // Nếu điều kiện đúng, in ra "chẵn"
// } else { // Nếu điều kiện trên sai
//  console.log("Số này là số lẻ."); // In ra "lẻ"
// }

// if.. else if.. else
// if (điều_kiện_1) {
//     // Khối lệnh JavaScript 1
//    } else if (điều_kiện_2) {
//     // Khối lệnh JavaScript 2
//    } else if (điều_kiện_3) {
//     // Khối lệnh JavaScript 3
//    } else {
//     // Khối lệnh JavaScript 4 (mặc định)
//    }
// var diem = 5; // Sử dụng var để khai báo biến diem
// if (diem >= 9) { // Điều kiện 1: điểm >= 9?
//     console.log("Xuất sắc"); // Nếu đúng, in ra "Xuất sắc"
// } else if (diem >= 8) { // Điều kiện 2 (chỉ kiểm tra nếu ĐK 1 sai): điểm >= 8?
//      console.log("Giỏi"); // Nếu đúng, in ra "Giỏi"
// } else if (diem >= 6.5) { // Điều kiện 3 (chỉ kiểm tra nếu ĐK 1 & 2 sai): điểm >= 6.5?
//     console.log("Khá"); // Nếu đúng, in ra "Khá"
// } else { // Nếu tất cả các điều kiện trên sai
//     console.log("Trung bình hoặc yếu"); // In ra "Trung bình hoặc yếu"
// }

// var hour = 10;
// if (hour >= 6 && hour < 12) {
//     console.log("Chào buổi sáng!");
//   }
// else if (hour >= 12 && hour < 18) {
//     console.log("Chào buổi chiều!");
//   } 
// else if (hour >= 18 && hour <= 23) {
//     console.log("Chào buổi tối!");
//   }
// else {
//     console.log("Khuya rồi, ngủ đi!");
//   }

// ex4
// var number1 = 10;  // Số thứ nhất
// var number2 = 5;   // Số thứ hai
// var operator = "+"; // Phép toán


// if (operator === "+") {
//     var result = number1 + number2;
//     console.log(`Kết quả phép cộng: ${result}`);
//   } 
// else if (operator === "-") { // true
//     var result = number1 - number2;
//     console.log(`Kết quả phép trừ: ${result}`);
//   }
// else {
//     console.log("thím nhâp sai phép toán rồi");
// }

// Truthy Và Falsy

// false
// console.log(Boolean(false)); // false
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// var x = "";

// if (x) {
//   console.log("x là Truthy");
// } else {
//   console.log("x là Falsy"); // Vì "" là falsy
// }


// if (0) {
//     console.log("Truthy");
//   } else {
//     console.log("Falsy"); // In ra "Falsy"
//   }
  

// Truthy
// console.log(Boolean(true))
// console.log(Boolean("dafdaf"))
// console.log(Boolean(-1))
// console.log(Boolean( []))
// console.log(Boolean( {}))


// ví dụ
// var username = ""; // Chuỗi rỗng (falsy) - Sử dụng var để khai báo biến username

// if (username) { // Kiểm tra truthy/falsy của username
//  console.log("Chào mừng, " + username); // Khối lệnh này KHÔNG thực hiện vì username là falsy
// } else { // Nếu username là falsy
//  console.log("Bạn chưa đăng nhập!"); // Khối lệnh này được thực hiện vì username là falsy
// }


// var chatLuong= "good";
// var count = 0; // Số 0 (falsy) - Sử dụng var để khai báo biến count
// if (count) { // Kiểm tra truthy/falsy của count
//  console.log("Có " +count+ " sản phẩm "+chatLuong); // Khối lệnh này KHÔNG thực hiện vì count là falsy
// } else { // Nếu count là falsy
//  console.log("Giỏ hàng trống."); // Khối lệnh này được thực hiện vì count là falsy
// }


// var myArray = []; // Mảng rỗng (truthy) - Sử dụng var để khai báo myArray
// if (myArray) { // Kiểm tra truthy/falsy của myArray
//  console.log("Mảng tồn tại (truthy)"); // Khối lệnh này được thực hiện vì mảng rỗng [] là truthy trong JavaScript
// } else { // Nếu myArray là falsy
//  console.log("Mảng không tồn tại (falsy)"); // Khối lệnh này KHÔNG thực hiện
// }


// var myObject = {}; // Đối tượng rỗng (truthy) - Sử dụng var để khai báo myObject

// if (myObject) { // Kiểm tra truthy/falsy của myObject
//      console.log("Đối tượng tồn tại (truthy)"); // Khối lệnh này được thực hiện vì đối tượng rỗng {} là truthy trong Jav
// } else { // Nếu myObject là falsy
//     console.log("Đối tượng không tồn tại (falsy)"); // Khối lệnh này KHÔNG thực hiện
// }


// Swich case
// switch (biểu_thức) {
//     case giá_trị_1:
//     // Khối lệnh JavaScript 1: Thực hiện nếu biểu_thức === giá_trị_1
//     break; // Lệnh break rất quan trọng!
//     case giá_trị_2:
//     // Khối lệnh JavaScript 2: Thực hiện nếu biểu_thức === giá_trị_2
//     break;
//     case giá_trị_3:
//     // Khối lệnh JavaScript 3: Thực hiện nếu biểu_thức === giá_trị_3
//     break;
//     // ... có thể có nhiều case khác ...
//     default: // Trường hợp tùy chọn
//     // Khối lệnh JavaScript mặc định: Thực hiện nếu biểu_thức không khớp với bất kỳ case nào
//     break;
// }


// var dayOfWeek = 5; // Sử dụng var để khai báo biến dayOfWeek và gán số 3 (Thứ Tư)
// var dayName; // Sử dụng var để khai báo biến dayName, biến này sẽ lưu tên ngày
// switch (dayOfWeek) { // Bắt đầu câu lệnh switch, biểu thức switch là biến dayOfWeek
//     case 1: // Case 1: Nếu dayOfWeek === 1 (Thứ Hai)
//     dayName = "Thứ Hai"; // Gán tên ngày là "Thứ Hai"
//     break; // Kết thúc case 1, thoát khỏi switch
//     case 2: // Case 2: Nếu dayOfWeek === 2 (Thứ Ba)
//     dayName = "Thứ Ba";
//     break; // Kết thúc case 2, thoát khỏi switch
//     case 3: // Case 3: Nếu dayOfWeek === 3 (Thứ Tư)
//     dayName = "Thứ Tư";
//     break; // Kết thúc case 3, thoát khỏi switch
//     case 4: // Case 4: Nếu dayOfWeek === 4 (Thứ Năm)
//     dayName = "Thứ Năm";
//     break; // Kết thúc case 4, thoát khỏi switch
//     case 5: // Case 5: Nếu dayOfWeek === 5 (Thứ Sáu)
//     dayName = "Thứ Sáu";
//     break; // Kết thúc case 5, thoát khỏi switch
//     case 6: // Case 6: Nếu dayOfWeek === 6 (Thứ Bảy)
//     dayName = "Thứ Bảy";
//     break; // Kết thúc case 6, thoát khỏi switch
//     case 7: // Case 7: Nếu dayOfWeek === 7 (Chủ Nhật)
//     dayName = "Chủ Nhật";
//     break; // Kết thúc case 7, thoát khỏi switch
//     default: // Trường hợp default: Nếu dayOfWeek không khớp với bất kỳ case nào từ 1 đến 7
//     dayName = "Không hợp lệ"; // Gán tên ngày là "Không hợp lệ"
//     break; // Kết thúc default case, thoát khỏi switch
// }
// console.log("Hôm nay là " + dayName); // In ra "Hôm nay là " + tên ngày tương ứng


// var a = 5;
// var b = 3;
// var operator = '-';

// switch (operator) {
//   case '+':
//     console.log(a + b);
//     break;
//   case '-':
//     console.log(a - b);
//     break;
//   case '*':
//     console.log(a * b);
//     break;
//   case '/':
//     console.log(a / b);
//     break;
//   default:
//     console.log("Toán tử không hợp lệ!");
// }


// var choice = 1;

// switch (choice) {
//   case 1:
//     console.log("Bạn đã chọn Phở");
//     break;
//   case 2:
//     console.log("Bạn đã chọn Cơm tấm");
//     break;
//   case 3:
//     console.log("Bạn đã chọn Bún bò");
//     break;
//   case 4:
//     console.log("Bạn đã chọn Hủ tiếu");
//     break;
//   default:
//     console.log("Món không có trong menu");
// }

var choice = parseInt(prompt("Nhập số món ăn bạn muốn chọn (1-4):"));

switch (choice) {
  case 1:
    alert("Bạn đã chọn Phở");
    break;
  case 2:
    alert("Bạn đã chọn Cơm tấm");
    break;
  case 3:
    alert("Bạn đã chọn Bún bò");
    break;
  case 4:
    alert("Bạn đã chọn Hủ tiếu");
    break;
  default:
    alert("Món không có trong menu");
}
