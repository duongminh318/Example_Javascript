// var newItem=document.createElement("li"); // tạo 1 thỉ li
// // console.log(newItem);
// newItem.textContent= "Mục mới"; // thêm chữ cho elemen6
// console.log(newItem);

// var list= document.getElementById("list"); // lấy ra cha
// console.log(list);

//  list.appendChild(newItem); // nhận con

// // var list2= document.getElementById("list2");
// // list2.appendChild(newItem);

// var newItem=document.createElement("li");
// newItem.textContent= "Mục mới 2"; // con mới sinh

// var list= document.getElementById("list"); // cha
// // console.log(list);
// var secondItem= list.children[1];
// // var firstItem= list.firstElementChild;  // con đầu tiên
// // console.log(firstItem);

// // list.insertBefore(newItem, firstItem);
//  list.insertBefore(newItem, secondItem);




// lấy ra button mình muốn gán sự kiện
var removeButton= document.getElementById("removeButton");

removeButton.addEventListener('click', function(){
    // lấy ra phần tử muốn xoá
    var itemToRemove= document.querySelector('#itemToRemove');

    // itemToRemove.remove();
    // console.log(itemToRemove);
    //2. kiểm tra phần tử lấy ra có tồn tại hay không (tranh lỗi không tìm thấy)
    if(itemToRemove!==null){
        itemToRemove.remove();
        // console.log("Đã xoá mục 2 thành công");
        alert("Đã xoá mục 2 thành công");

    }else{
        // console.log("không tìm thấy mục 2 nào cả");
        alert("không tìm thấy mục 2 nào cả");

    }

});

// var itemToRemove= document.querySelector('#itemToRemove');

// removeButton.addEventListener('click', itemToRemove.remove());
