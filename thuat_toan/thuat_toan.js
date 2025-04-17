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

// ex7
// var numbers = [3, 7, 1, 9, 4];
// var allPositive = true;
// if (numbers.length === 0){
//     console.log('mảng rỗng');

// }else{
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] <= 0) {
//         allPositive = false;
//         break;
//     }
// }

// }
// if (allPositive) {
// console.log("Tất cả là số dương");
// } else {
// console.log("Có số không dương");
// }

// Tìm max
// var numbers = [5, 10, 2, 8, 25, 15, 30, 2,45];
// var maxValue = numbers[0]; //1. khởi tạo maxValue bằng phần tử đầu tiên index 0

// for(var i=1; i< numbers.length; i++){
//     if(numbers[i]> maxValue){
//         maxValue= numbers[i];
//     }
// }
// console.log(maxValue);

// Min
// var numbers = [5, 10, 2, 8, 25, 15, 30, 2, 45];
// var minValue = numbers[0]; //1. khởi tạo maxValue bằng phần tử đầu tiên index 0

// for(var i=1; i< numbers.length; i++){
//     if(numbers[i]< minValue){
//         minValue= numbers[i];
//     }
// }
// console.log(minValue);

// Object - tìm giá cao nhất
// var products = [
//     { name: "Áo thun", price: 50000 },
//     { name: "Quần jeans", price: 150000 },
//     { name: "Giày sneaker", price: 80000 }
//    ];

//    var maxPriceProduct = products[0]; // khởi tạo maxPriceProduct bằng object đầu tiên

// for (var i = 1; i < products.length; i++) {
//  if (products[i].price > maxPriceProduct.price) { // So sánh thuộc tính 'price'
//  maxPriceProduct = products[i]; // Cập nhật maxPriceProduct bằng object hiện tại
//  }
// }

// console.log("Sản phẩm có giá cao nhất:", maxPriceProduct); // In kết quả (object Quần jeans)
// console.log("Giá cao nhất:", maxPriceProduct.price); // In giá cao nhất (150000)

// ex9
// var products = [
//     { name: "Bút", price: 5000, quantity: 3 },
//     { name: "Sách", price: 20000, quantity: 2 },
//     { name: "Tẩy", price: 3000, quantity: 2 }
// ];

// if (products.length === 0) {
//     console.log("Mảng rỗng");
// } else {
//     var minValueProduct = products[0];
//     var minValue = minValueProduct.price * minValueProduct.quantity;
//     for (var i = 1; i < products.length; i++) {
//         var currentValue = products[i].price * products[i].quantity;
//         if (currentValue < minValue) {
//             minValue = currentValue;
//             minValueProduct = products[i];
//         }
//     }
//     console.log(minValueProduct);}

//  So Sánh Phần Tử Hiện Tại và Phần Tử Sau
// đếm số lần giảm giá
// var prices = [100, 120, 90, 150, 160, 140];
// var decreaseCount = 0; // Biến đếm số lần giá giảm
// for (var i = 0; i < prices.length - 1; i++) { // Dừng trước phần tử cuối
//     var currentPrice = prices[i]; // Giá hiện tại
//     var nextPrice = prices[i + 1]; // Giá sau

//     if (currentPrice > nextPrice) { // So sánh: hiện tại > sau
//         decreaseCount++; // Tăng đếm nếu giá giảm
//         console.log(`Giá giảm từ ${currentPrice} xuống ${nextPrice} tại vị trí index ${i}`);
//         }
// }
// console.log("Tổng số lần giá giảm:", decreaseCount); // In kết quả (2)

// var products = [
//     { name: "SP1", price: 100 },
//     { name: "SP2", price: 120 }, // Giá tăng
//     { name: "SP3", price: 90 },
//     { name: "SP4", price: 150 }, // Giá tăng
//     { name: "SP5", price: 10 }
// ];

// var increaseCount = 0; // Biến đếm số lần giá tăng

// for (var i = 0; i < products.length - 1; i++) {

//     var currentProduct = products[i]; // Sản phẩm hiện tại
//     var nextProduct = products[i + 1]; // Sản phẩm sau
//     if (currentProduct.price < nextProduct.price) { // So sánh giá
//         increaseCount++; // Tăng đếm nếu giá tăng
//         console.log(`Giá tăng từ ${currentProduct.price} (${currentProduct.name}) lên ${nextProduct.price}
//        (${nextProduct.name})`);
//     }


// } 
// console.log("Tổng số lần giá tăng:", increaseCount); // In kết quả (2)


// var age=17;
// console.log(`tuổi là ${age}`);

// var matrix = [
//     [1, 2, 3, 6], // Hàng 0
//     [4, 5, 6], // Hàng 1
//     [7, 8, 9]  // Hàng 2
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][1]); // 5
// console.log(matrix[2][2]); // 9

// // Duyệt mảng bằng vòng lặp for lồng nhau
// for (var i = 0; i < matrix.length; i++) {
//     var row = matrix[i];
//     console.log(`--- Hàng ${i} ---`);
    
//     for (var j = 0; j < row.length; j++) {
//         var element = row[j]; // Sửa từ row[i] thành row[j]
//         console.log(`Phần tử [${i}][${j}]: ${element}`);
//     }
// }

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var total = 0;
for (var i = 0; i < matrix.length; i++) {
    // var row = matrix[i];
    for (var j = 0; j < matrix[i].length; j++) { // Sửa ở đây
        total += matrix[i][j];
    }
}

console.log(total);


