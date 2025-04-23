// B1: Lấy nút highlight
var highlightButton = document.getElementById('highlightButton');

// B2: Gắn sự kiện click
highlightButton.addEventListener('click', function() {
    // B3: Lấy tất cả các <li> có class "color-item"
    var colorItems = document.querySelectorAll('.color-item');

    // B4: Duyệt và thêm class "highlight"
    for (var i = 0; i < colorItems.length; i++) {
        colorItems[i].classList.add('highlight');
    }
});

// B1: Lấy nút đổi màu
var changeColorButton = document.getElementById('changeColor');

// B2: Gắn sự kiện click
changeColorButton.addEventListener('click', function() {
    // B3: Lấy phần tử có id="green-item"
    var greenItem = document.getElementById('green-item');

    // B4: Lấy phần tử cha của nó (là <ul>)
    var parent = greenItem.parentNode;

    // B5: Đổi màu nền
    parent.style.backgroundColor = 'lightgreen';
});

