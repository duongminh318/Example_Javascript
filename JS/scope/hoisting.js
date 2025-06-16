// var, let, hoisting trong js
//   c = 5;
// console.log(c);

// var c= 9;
// console.log(c);

//  console.log(d);

// console.log(f);

// let f= 13;

// console.log(c);

// var functionScopedVar;
// if (true) {
//     var functionScopedVar = "Function Scope (var)"; // thuoc Global Scope
//     let blockScopedLet = "Block Scope (let)"; // thuoc Block Scope
//     const blockScopedConst = "Block Scope (const)"; // thuoc Block Scope
//     console.log(blockScopedLet); // Truy cập bên trong block
//     console.log(blockScopedConst); // Truy cập bên trong block
// }

//  console.log(blockScopedLet);
//  console.log(blockScopedConst);
// console.log(functionScopedVar);


// for (let i = 0; i < 3; i++) { // i thuoc block scope
//     console.log(i); // 'i' có Block Scope trong vòng lặp for
//    }
//  console.log(i); // Lỗi! 'i' không tồn tại ở đây (ngoài vòng lặp for)


//  var j;
// for (var j = 0; j < 3; j++) { // j thuoc global scope
//     console.log(j);
// }

//  console.log(j); // Vẫn truy cập được 'j' - Cẩn thận!



// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i); // ❌ Error: i is not defined




// const sayHello= function (){
//     console.log("Xin chào tôi là function declaration và tôi bị hoisting");
// }

// sayHello();




// let sayGoodbye = function() {
//     console.log("Tạm biệt từ function expression!");
// };
// sayGoodbye();

"use strict";

// console.log(declaredVar);
// let declaredVar = "Oops!";

// console.log(x);

// "use strict";

// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: "Minh",
//   writable: false
// });

// obj.name = "Alex"; // ❌ TypeError: Cannot assign to read only property
