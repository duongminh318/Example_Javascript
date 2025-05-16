// let str = "abc";
// var str1= 'abc';
// // var str2= `abc ${ddd}`;
// console.log(str2); 

// let str = "Hello  ";
// console.log(str.length); // 5

// let str = "World";

// // console.log(str.charAt(10)); //""

// console.log(str.charAt(3)); // "l"
// console.log(str.charAt(5)); // "" (chuỗi rỗng nếu index không hợp lệ)

//substring(start, end) 
// let str = "JavaScript";
// console.log(str.substring(0, 4)); // "Java"
// console.log(str.substring(4)); // "Script" (nếu bỏ qua 'end', lấy đến hết chuỗi)


// let str = "Example";
// console.log(str.slice(2, 5)); // "amp"
// console.log(str.slice(-3)); // "ple" (lấy 3 ký tự cuối)


// let str = "hello";
// console.log(str.toUpperCase()); // "HELLO"
// // console.log(str);


// let str = "WORLD";
// console.log(str.toLowerCase()); // "world"

//includes(searchValue, start) 
// let str = "Hello World";
// // console.log(str.includes("World")); 
// //console.log(str.includes("world")); 
// console.log(str.includes("o", 5));
// console.log(str.includes("Hi"));

//indexOf(searchValue, start) :
// let str = "Hello World Hello";
// console.log(str.indexOf("Hello")); 
// console.log(str.indexOf("Hello", 1)); //12


//lastIndexOf(searchValue, start)
// let str = "Hello World Hello";
// console.log(str.lastIndexOf("Hello")); 
// console.log(str.lastIndexOf("Hello", 10)); // 0 (tìm ngược từ vị trí index 10)
// console.log(str.lastIndexOf("Goodbye")); // -1 (không tìm thấy)

//replace(searchValue, newValue)

// let str = "Hello World Hello";
// // console.log(str.replace("Hello", "Hi")); // "Hi World Hello" (chỉ thay thế lần đầu)
// console.log(str.replace(/Hello/i, "Hi")); // "Hi World Hello" (RegExp, 'i' - case-insensitive)


// let str = " Hello World! ";
// console.log(str.trim()); // "Hello World!"

// let str = "heLlo World Hello";
//  //console.log(str.replace("Hello", "Hi")); // "Hi World Hello" (chỉ thay thế lần đầu)
//  console.log(str.replace(/Hello/i, "Hi")); // "Hi World Hello" (RegExp, 'i' - case-insensitive)


// let str = "hello World Hello";
//  //console.log(str.replaceAll("Hello", "Hi")); // "Hi World Hi" (thay thế tất cả)
//  console.log(str.replaceAll(/Hello/gi, "Hi")); // "Hi World Hi" (RegExp, 'g' - global, 'i' - case-insensitive)


//split(separator, limit)

// let str = "apple,banana,orange";
// let fruits= str.split(";"); // ["apple", "banana", "orange"]

// console.log(fruits);

// let str = "apple,banana,orange";
// let fruits = str.split(",", 2); 
// console.log(fruits); 
// // 👉 ["apple", "banana"] (chỉ lấy 2 phần tử đầu)


// let word= "hello";
// console.log(word.split(""));
// let str1 = "Hello";
// let str2 = " ";
// let str3 = "World";

// let greeting= str1.concat(str2, str3, "!", " beatifull");
// console.log(greeting);


// let multilineString = `Đây là một chuỗi 
// trên nhiều dòng
// rất dễ dàng`;
// console.log(multilineString);


// let name = "Alice";
// let age = 25;
// let greeting = `Xin chào, tôi là ${name} và tôi ${age} tuổi.`;
// console.log(greeting); // "Xin chào, tôi là Alice và tôi 25 tuổi."


// let a = 10;
// let b = 20;
// let sumString = `Tổng của ${a} và ${b} là ${a + b}.`;
// console.log(sumString); // "Tổng của 10 và 20 là 30."