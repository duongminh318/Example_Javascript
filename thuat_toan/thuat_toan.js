// var numbers = [1, 2, 3, 4, 5];
// var total =0;

// for(var i=0; i< numbers.length; i++){
//     // total= total+numbers[i];
//     total+=numbers[i];
// }
// console.log(total);


// Object
// var product = [
//     { name: "Áo thun", price: 50000, quantity: 2 },
//     { name: "Quần jeans", price: 150000, quantity: 1 },
//     { name: "Giày sneaker", price: 200000, quantity: 1 }
// ];


// var totalPrice=0;
// for(i=0; i< product.length; i++){
//     totalPrice=totalPrice+ (product[i].price*product[i].quantity);   
// }
// console.log(totalPrice);


// CỜ
// kiểm tra có tồn tại số chắn trong mảng ko 
// var numbers = [1, 3, 5, 7, 9];
// var isEvenFound= false;
// for(var i=0; i< numbers.length; i++){
//        if(numbers[i]%2===0){
//         isEvenFound= true;
//         break;
//        }
// }

// if(isEvenFound){
//     console.log(isEvenFound);
//     console.log("có số chắn trong mảng nhe thím");
// }else{
//     console.log(isEvenFound);
//     console.log("mảng ko có số chắn thím ơi");
// }

// lớn hơn 100k
// var products = [
//     { name: "Áo thun", price: 50000 },
//     { name: "Quần jeans", price: 150000 },
//     { name: "Giày sneaker", price: 80000 }
//    ];

//    var hasExpensiveItem = false; // Biến cờ: chưa tìm thấy sản phẩm đắt

//    for(i=0; i< products.length; i++){
//    if(products[i].price>100000){
//     hasExpensiveItem = true;
//     break;
//    }

// }
// if(hasExpensiveItem){
//         console.log(hasExpensiveItem);
//         console.log("có tồn tại sản phẩm lớn hơn 100k trong mảng");
//     }else{
//         console.log(hasExpensiveItem);
//         console.log("ko tồn tại sản phẩm lớn hơn 100k trong mảng");
//     }

// kiểm tra xem mảng có phải là mảng giảm dần không
// var numbers = [10, 8, 6, 4, 9, 2];
// var isDecreasing = true; // Khởi tạo true: giả định mảng giảm dần

// for (var i = 0; i < numbers.length-1; i++) {
//     if (numbers[i] <= numbers[i + 1]) { // Không giảm dần
//     isDecreasing = false; // Đổi cờ thành false
//     break; // Thoát sớm
//     }
//    }
   
//    if (isDecreasing) {
//     console.log("Mảng giảm dần.");
//    } else {console.log("Mảng không giảm dần.");
//    }


// var numbers = [1, 3, 5, 8];
// var isEvenFound = false;
// for (var i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//  // Quên đặt 
//  isEvenFound = true
//  }
// }
// if (isEvenFound) {
//  console.log("Mảng có số chẵn.");
// } else {
//  console.log("Mảng không có số chẵn.");
// }
// // Output: "Mảng không có số chẵn." (sai, vì số 8 là chẵn)


// var numbers = [1, 3, 5, 7];
// var isEvenFound = false; 
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//     isEvenFound = true;
//     }
//    }
// var numbers = [1, 8, 10, 3];
// var isEvenFound = false;
// for (var i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//  isEvenFound = true; // Tìm thấy nhưng vẫn lặp
//     break;
//  }
// }


