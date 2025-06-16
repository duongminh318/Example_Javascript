// Xuất mặc định (default export) một class tên là TaskItem
export default class TaskItem {
    // Hàm khởi tạo (constructor) được gọi khi tạo một đối tượng mới từ class
    constructor(taskText) {
        this.text = taskText;     // Lưu nội dung mô tả công việc vào thuộc tính "text"
        this.completed = false;   // Ban đầu, công việc chưa hoàn thành => completed = false
    }

    // Phương thức này dùng để đánh dấu công việc đã hoàn thành
    markComplete() {
        this.completed = true;    // Đặt thuộc tính completed thành true
    }

    // Phương thức tạo và trả về một thẻ <li> đại diện cho công việc trong giao diện
    render() {
        const li = document.createElement('li'); // Tạo một thẻ <li> trong HTML
        li.textContent = this.text;              // Gán nội dung của <li> là tên công việc

        // Nếu công việc đã hoàn thành thì thêm class "completed" để đổi kiểu hiển thị
        if (this.completed) {
            li.classList.add('completed');       // Thêm class CSS "completed" (thường dùng để gạch ngang chữ)
        }

        // Gắn sự kiện click vào thẻ <li>
        li.addEventListener('click', () => {
            this.markComplete();                 // Khi click, gọi hàm markComplete để đổi trạng thái
            li.classList.add('completed');       // Sau đó thêm class "completed" để cập nhật giao diện
        });

        return li; // Trả về thẻ <li> đã tạo, để hiển thị lên trang web
    }
}
