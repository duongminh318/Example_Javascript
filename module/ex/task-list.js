// Import class TaskItem từ module 'task-item.js'
// (Dùng để tạo đối tượng công việc từ tên công việc)
import TaskItem from './task-item.js';

// Export mặc định class TaskList – đại diện cho danh sách các công việc
export default class TaskList {
    // Constructor khởi tạo khi gọi new TaskList()
    constructor() {
        this.tasks = []; // Tạo một mảng rỗng để lưu danh sách các công việc (TaskItem)
    }

    // Phương thức thêm một công việc mới vào danh sách
    addTask(taskText) {
        const task = new TaskItem(taskText); // Tạo một TaskItem mới từ chuỗi mô tả
        this.tasks.push(task);               // Thêm task vào mảng tasks
    }

    // Phương thức hiển thị danh sách công việc ra một phần tử HTML (ví dụ <ul>)
    renderTasks(container) {
        container.innerHTML = ''; // Xóa hết nội dung cũ trong phần tử container (làm mới danh sách)

        // Duyệt qua mảng tasks, với mỗi công việc thì gọi .render() để tạo ra <li>
        const elements = this.tasks.map(task => {
            const el = task.render();      // Gọi phương thức render() để tạo phần tử <li> tương ứng
            container.appendChild(el);     // Thêm phần tử đó vào container trong HTML
            return el;                     // Trả lại phần tử DOM đó để lưu vào mảng
        });

        return elements; // Trả về mảng các phần tử DOM (để in ra console hoặc xử lý thêm nếu cần)
    }
}
