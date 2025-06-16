// let a= 12;
// let b= a;

//  b = 3;

// console.log(b);


// console.log(a);

// console.log(a==b);

// let str1= "hello";
// let str2= "hello";


// console.log(str1===str2);

// objA là "danh thiếp" dẫn đến "ngôi nhà" object
// const objA = { value: 100 };
// const objC = { value: 100 };
// const objD={};
// const objE={};

// const objB= objA;

// // console.log(objB.value);

//  objB.value= 200;

// // console.log(objA.value);

// console.log(objA === objB);
// console.log(objA === objC);
// console.log(objD === objE);

// const listA= [1, 2, 3];

// const listB= listA;

// listB[0] = 100;

// console.log(listA[0]);

// console.log(listB===listA);


// // array1 là "danh thiếp 1" dẫn đến "ngôi nhà 1"
// const array1 = [1, 2, 3];
// // array2 là "danh thiếp 2" dẫn đến "ngôi nhà 2" (dù "ngôi nhà 2" giống "ngôi nhà 1")
// const array2 = [1, 2, 3];
// // array3 là "danh thiếp 3" SAO CHÉP từ array1, cùng dẫn đến "ngôi nhà 1"
// const array3 = array1;

// // In ra: false ("danh thiếp 1" và "danh thiếp 2" KHÁC NHAU, dù "ngôi nhà" có thể giống)
// console.log(array1 == array2);
// // In ra: false ("danh thiếp 1" và "danh thiếp 2" KHÁC NHAU)
// console.log(array1 === array2);

// // In ra: true ("danh thiếp 1" và "danh thiếp 3" GIỐNG NHAU - cùng địa chỉ nhà)
// console.log(array1 == array3);
// // In ra: true ("danh thiếp 1" và "danh thiếp 3" GIỐNG NHAU)
// console.log(array1 === array3);



// const myObject = { key: "value" }; 

// myObject= { anotherKey: "anotherValue" };

// myObject.key= "newValue";

// console.log(myObject.key);

// // var myObject2 = { key: "value2" }; 

// // myObject2 =  { key: "value3" }; 
// // console.log(myObject2.key);

// const myArray = [1, 2, 3]; // 'myArray' là biến const, tham chiếu đến một array

//  myArray = [4, 5, 6]; // Lỗi! Không thể gán lại một tham chiếu khác cho myArray (TypeError: Assignment to constant variable)

// myArray[0] = 100; // Hợp lệ! Vẫn có thể thay đổi phần tử đầu tiên của array mà 'myArray' tham chiếu đến
// console.log(myArray); // In ra: [100, 2, 3]

// // num là "tên" tham số trong hàm, như "bản photo" của số truyền vào
// function thayDoiSo(num) {
//     // Thay đổi giá trị "bản photo" num bên trong hàm
// num = num + 10;
// // In ra giá trị "bản photo" num bên trong hàm
// console.log("Trong hàm, num = " + num);
// }

// // soGoc là biến gốc, chứa giá trị nguyên thuỷ 5
// let soGoc = 5;
// // Gọi hàm và truyền soGoc vào. Giá trị 5 được "photo" và truyền vào hàm
// thayDoiSo(soGoc);

// // In ra giá trị soGoc bên ngoài hàm (vẫn là 5, không đổi vì hàm chỉ làm việc trên bản photo)
// console.log("Ngoài hàm, soGoc = " + soGoc);


// // obj là "danh thiếp" tham số trong hàm, như "bản photo danh thiếp" của đối tượng truyền vào
// function thayDoiDoiTuong(obj) {
//     // Thay đổi "đồ vật" 'value' bên trong "ngôi nhà" (thông qua "danh thiếp bản photo" obj)
// obj.value = obj.value * 2;
// // In ra giá trị obj.value bên trong hàm
// console.log("Trong hàm, obj.value = " + obj.value);
// }

// // doiTuongGoc là biến gốc, "danh thiếp gốc" dẫn đến "ngôi nhà" object
// const doiTuongGoc = { value: 50 };
// // Gọi hàm và truyền doiTuongGoc vào. "Danh thiếp gốc" được "photo" và bản photo được truyền vào hàm
// thayDoiDoiTuong(doiTuongGoc);

// // In ra giá trị doiTuongGoc.value bên ngoài hàm (bị thay đổi theo vì hàm đã sửa "ngôi nhà" mà cả "danh thiếp gốc" và "danh thiếp photo" cùng dẫn đến)
// console.log("Ngoài hàm, doiTuongGoc.value = " + doiTuongGoc.value);


// side effect 



// function replaceObject(obj) {
//     // obj= myObject
//     obj = { newValue: "replaced" };
// }

// const myObject = { value: "original" };
// replaceObject(myObject);
// console.log(myObject.value);


// const company = { // Biến 'company' chứa tham chiếu (địa chỉ) đến object company
//     name: "TechCorp", // Thuộc tính 'address' của object company CHỨA MỘT THAM CHIẾU KHÁC (địa chỉ khác) đến object address
//     address: {
//         street: "Main St",
//         city: "Anytown"
//     } // Object address được lưu ở một vị trí bộ nhớ khác
// };

// const companyAddress = company.address; // Biến 'companyAddress' được gán tham chiếu (địa chỉ) mà 'company.address' đang chứa. Cả 'companyAddress' và 'company.address' cùng chứa tham chiếu đến cùng object address.

// companyAddress.city = "NewCity"; // Thay đổi thuộc tính 'city' của object address (thông qua biến companyAddress). Vì 'company.address' và 'companyAddress' cùng tham chiếu đến một object, thay đổi này ảnh hưởng đến cả hai cách truy cập.

// console.log(company.address.city); // Khi truy cập 'company.address.city', Javascript thực hiện "chuỗi tham chiếu":
// // 1. Truy cập biến 'company'. Biến này chứa tham chiếu (địa chỉ) đến object company.
// // 2. Dựa vào tham chiếu (địa chỉ) này để đến object company. Trong object company, truy cập thuộc tính 'address'. Thuộc tính này chứa một tham chiếu khác (địa chỉ khác).
// // 3. Dựa vào tham chiếu (địa chỉ thứ hai) này để đến object address.
// // 4. Trong object address, truy cập thuộc tính 'city' và lấy giá trị "NewCity".
// console.log(companyAddress.city);

// console.log(company.address === companyAddress); // In ra: true (Cả 'company.address' và 'companyAddress' đều chứa tham chiếu giống nhau - cùng địa chỉ đến object address)




// const matrix = [ // Biến 'matrix' chứa tham chiếu đến array (Mảng 1)
//     [1, 2], // Phần tử đầu tiên của Mảng 1 CHỨA MỘT THAM CHIẾU KHÁC (địa chỉ khác) đến array con (Mảng 2)
//     [3, 4]
// ]; // Mảng 2 array con được lưu ở vị trí bộ nhớ khác

// const row1 = matrix[0]; // Biến 'row1' được gán tham chiếu (địa chỉ) mà phần tử đầu tiên của 'matrix' đang chứa. Cả 'row1' và 'matrix[0]' cùng chứa tham chiếu đến cùng Mảng 2 array con.

// row1[0] = 100; // Thay đổi phần tử đầu tiên của Mảng 2 array con (thông qua biến row1). Vì 'matrix[0]' và 'row1' cùng tham chiếu đến một Mảng 2, thay đổi này ảnh hưởng đến cả hai cách truy cập.

// console.log(matrix[0][0]); // In ra: 100 (Đi theo "chuỗi tham chiếu" để đến phần tử đầu tiên đã thay đổi)
// console.log(row1[0]); // In ra: 100 (Đi theo tham chiếu 'row1' trực tiếp đến Mảng 2 và thấy phần tử đầu tiên đã thay đổi)
// console.log(matrix[0] === row1); // In ra: true (Cả 'matrix[0]' và 'row1' đều chứa tham chiếu giống nhau - cùng địa chỉ đến Mảng 2)


// const users= [
//     {name: "User1", age: 18},
//     {name: "User2", age: 25}
// ];

// const firstUser= users[0];

// firstUser.age = 26; 
// console.log(firstUser.age);
// console.log(users[0].age);
// console.log(users[0] === firstUser); // In ra: true (Cả 'users[0]' và 'firstUser' đều chứa tham chiếu giống nhau - cùng địa chỉ đến Đối tượng 3)


