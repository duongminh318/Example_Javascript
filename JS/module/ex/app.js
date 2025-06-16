import TaskList from './task-list.js'; // Import lớp quản lý danh sách công việc

const taskList = new TaskList(); // Khởi tạo danh sách công việc

// Lấy các phần tử DOM cần thiết
const container = document.getElementById('task-list');
const input = document.getElementById('new-task-input');
const button = document.getElementById('add-task-button');

// Lần đầu tiên hiển thị danh sách (rỗng)
taskList.renderTasks(container);

// Khi nhấn nút "Thêm"
button.addEventListener('click', () => {
    const text = input.value.trim(); // Lấy nội dung từ ô input

    if (text === '') {
        alert('Vui lòng nhập công việc!'); // Nếu rỗng thì cảnh báo
        return;
    }

    taskList.addTask(text); // Thêm công việc vào danh sách
    const elements = taskList.renderTasks(container); // Cập nhật hiển thị
    console.log(elements); // In ra các phần tử DOM (debug)

    input.value = ''; // Xóa nội dung ô input sau khi thêm
});
