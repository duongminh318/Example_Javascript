// for (var i = 1; i <= 5; i++) {
//     console.log(i);
//   }

// in ra số từ 5 đến 15 - lọc các số lớn hơn 10

//   for (var i = 5; i <= 15; i++) {
//     if(i<10)
//     {
//         console.log(i);
//     }
//   }

// sử dụng for để duyệt mảng
// var fruits = ["apple", "banana", "orange"];

// console.log(fruits);
// console.log(fruits.length);
// // Lặp qua mảng fruits và in ra từng loại quả

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); // Truy cập phần tử mảng bằng index 'i'
// }


// for (var i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// while
// var count=999;
// while(count>=20){
//     console.log(count);

//     count--;

// }

// var randomNumber;
// var attempts = 0;
// while (randomNumber !== 7) { // Lặp cho đến khi randomNumber bằng 7
//  randomNumber = Math.floor(Math.random() * 10) + 1; // Tạo số ngẫu nhiên từ 1 đến 10
//  attempts++;
//  console.log(`Lần thử ${attempts}: Số ngẫu nhiên là ${randomNumber}`);
// }
// console.log(`Đã tìm thấy số 7 sau ${attempts} lần thử.`);

// var soLan = 1;
// var userNumber;

// do {
//     userNumber = parseInt(prompt("Nhập một số lớn hơn 10:"));
//     console.log(`Bạn đã nhập: ${userNumber}`);
//     soLan++; // Tăng biến đếm sau mỗi lần nhập
// } while (userNumber <= 10 && soLan <= 3); // Điều kiện đúng: lặp lại nếu số <= 10 và chưa quá 3 lần thử

// if (userNumber > 10) {
//     console.log(`Bạn đã nhập số hợp lệ: ${userNumber}`);
// } else {
//     console.log("Bạn đã nhập sai quá 3 lần!");
// }


// break
// for (var i = 1; i <= 10; i++) {
//     if(i===5){
//         break; // Thoát khỏi vòng lặp khi i = 5
//     }
//     console.log(i);
// }


// continue
// for (var i = 1; i <= 5; i++) {
//     if (i === 3 || i==2) {
//       continue;
//     }
//     console.log(i);
//   }

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     console.log(i);
//   }