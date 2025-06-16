// var khung= document.getElementById("khung");
// console.log(khung);

// var doanDau=document.querySelector(".vanBan");
// console.log(doanDau);
// var doanDau2=document.querySelector("#khung");
// console.log(doanDau2);
// var doanDau3=document.querySelector("p");
// console.log(doanDau3);
// //  console.log(doanDau);


// var tatCaDoan=document.querySelectorAll(".vanBan");
// // console.log(tatCaDoan);

// var currentItem = document.getElementById('current-item'); // Điểm xuất phát (<li>)
// // console.log(currentItem);

// // 1. parentNode: Đi lên phần tử cha (<ul>) - ELEMENT NODE
// var parentList= currentItem.parentNode;
// // console.log(parentList);

// // 2. children: Lấy DANH SÁCH các PHẦN TỬ HTML CON của <ul> - ELEMENT NODES
// var listChildren = parentList.children;
// console.log('children của <ul> (HTMLCollection - Element Nodes):', listChildren)


// // 3. firstElementChild: Lấy phần tử HTML CON ĐẦU TIÊN của <ul> - ELEMENT NODE (<li> Mục 1 </li>)
// var firstListItem = parentList.firstElementChild;
// // console.log(firstListItem);


// // 4. lastElementChild: Lấy phần tử HTML CON CUỐI CÙNG của <ul> - ELEMENT NODE (<li> Mục 3 </li>)
// var lastListItem= parentList.lastElementChild;
// // console.log('lastElementChild của <ul> (<li> Mục 3 </li> - Element Node):', lastListItem);

// // 5. nextElementSibling: Lấy phần tử HTML ANH/CHỊ/EM LIỀN KỀ SAU của #current-item - ELEMENT NODE 
// var nextItem = currentItem.nextElementSibling
// // console.log(nextItem);

// // 6. 

// var previousItem = currentItem.previousElementSibling;

// // console.log(previousItem);


// // lấy cha của ul
// var firstTitle= parentList.parentNode.firstElementChild;
// // console.log(firstTitle);

// //  8. Đi lên cha của #current-item, rồi xuống anh/chị/em LIỀN KỀ SAU (đến <p> "Đoạn văn sau danh sách" </-
// var paragraphAfterList= currentItem.parentNode.nextElementSibling;
// // console.log(paragraphAfterList);