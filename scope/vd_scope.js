// var message= "Hello Global";

// function sayHello(){
//     let message = "Hello Function" 
//     console.log(message);
// }

// sayHello();

// console.log(message);


// Biến global
// var globalVar = "Tôi là biến global";

// function accessGlobal() {
//     console.log(globalVar); // Truy cập biến global bên trong function
// }

// accessGlobal();
// console.log(globalVar); // Truy cập biến global bên ngoài function

// var a = 1 ;
// console.log(a);

// function viDu_1(){
//     console.log(a);
//     if(a%2==0){
//         console.log(`${a} là số chẵn`);

//     }else{
//         console.log(`${a} là số lẻ`);
//     }
// }

// viDu_1();'

// function myFunction() {
//     var localVariable = "Tôi là biến local";
//     console.log(localVariable); // Truy cập biến local bên trong function
// }

// myFunction();

// //console.log(localVariable); // Lỗi! Biến localVariable không tồn tại ở đây (ngoài function)


// function functionA() {
//     var message = "Message from A";
//     console.log(message);
// }

// function functionB() {
//     var message = "Message from B"; // Biến 'message' ở đây khác với biến 'message' trong functionA
//     console.log(message);
// }

// functionA();
// functionB();

// function viDu_2() {
//     let b = 2;
//     // 1. Biến b chỉ có thể truy xuất từ bên trong hàm
//     console.log(b);
//     // 2. truy xuất được từ các cấp sâu hơn bên trong
//     if (b % 2 === 0) {
//       console.log(`${b} là số chẵn`);
//     } else {
//       console.log(`${b} là số lẻ`);
//     }
//   }
  

//    console.log(b);

//    viDu_2();


// var globalVar = "Global bên ngoài";

// function outerFunction() {
//     var outerVar = "Outer bên trong";

//     function innerFunction() {
//         var innerVar = "Inner bên trong";
//         // console.log(innerVar);     // Truy cập biến local của innerFunction
//         // console.log(outerVar);    // Truy cập biến local của outerFunction (Scope cha)
//         // console.log(globalVar);    // Truy cập biến global (Scope ông bà)
//     }

//     innerFunction();
//      console.log(outerVar);     // Truy cập biến local của outerFunction
//     // console.log(innerVar);  // Lỗi! innerVar không tồn tại ở đây (ngoài innerFunction)
// }

// outerFunction();
//  console.log(globalVar);    // Truy cập biến global
//  console.log(outerVar);   // Lỗi! outerVar không tồn tại ở đây (ngoài outerFunction)


// var name;
// let age;

// const pi= 3.14;
// const name2= "your name";
// name2= "your name";



 //pi=15;

// const person = { name: "Alice" };
// person.name = "Bob"; // Vẫn hợp lệ! Bạn có thể thay đổi thuộc tính của object const
// console.log(person.name); // Output: Bob
// const numbers = [1, 2, 3];
// numbers.push(4); // Vẫn hợp lệ! Bạn có thể thêm phần tử vào array const
// console.log(numbers); // Output: [1, 2, 3, 4]
