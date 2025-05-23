todo-app/
├── index.html        // Giao diện chính của người dùng
├── app.js            // Module chính, điều khiển toàn bộ ứng dụng
├── task-list.js      // Module quản lý danh sách công việc
└── task-item.js      // Module đại diện cho một công việc cụ thể


---

## 📦 Mô-đun

### 1. `TaskItem` - task-item.js

Đại diện cho một công việc.

- Thuộc tính:
  - `name`: tên công việc
  - `isCompleted`: trạng thái hoàn thành (true/false)

- Phương thức:
  - `render()`: tạo HTML dạng `<li>` để hiển thị công việc
  - Click vào công việc sẽ toggle trạng thái hoàn thành, và cập nhật giao diện (gạch ngang nếu hoàn thành)

---

### 2. `TaskList` - task-list.js

Quản lý danh sách nhiều công việc.

- Phương thức:
  - `addTask(name)`: thêm công việc mới
  - `renderTasks()`: hiển thị toàn bộ danh sách công việc

---

### 3. `index.html`

Giao diện trang web bao gồm:

- Ô nhập nội dung công việc
- Nút "Thêm"
- Danh sách công việc hiển thị bên dưới
- Một chút CSS giúp hiển thị đẹp hơn (ví dụ: gạch ngang khi hoàn thành)

---

### 4. `app.js`

Điều phối hoạt động của toàn bộ ứng dụng.

- Tạo đối tượng `TaskList`
- Khi trang load, gọi `renderTasks()` để hiển thị (lúc đầu rỗng)
- Khi người dùng:
  - Nhấn "Thêm": 
    - Lấy dữ liệu từ ô nhập
    - Nếu rỗng → báo lỗi
    - Nếu có nội dung → thêm vào danh sách và cập nhật giao diện
    - Xóa nội dung ô nhập sau khi thêm

---

## ✅ Kiểm Thử

- Nhập vài công việc → nhấn "Thêm" → phải hiển thị đúng
- Click vào công việc → gạch ngang để đánh dấu hoàn thành
- Nhập chuỗi rỗng → báo lỗi không hợp lệ

---

## 📌 Tổng Kết

| File           | Vai Trò                                      |
| -------------- | -------------------------------------------- |
| `task-item.js` | Tạo ra 1 công việc đơn                       |
| `task-list.js` | Quản lý và hiển thị nhiều công việc          |
| `index.html`   | Giao diện người dùng                         |
| `app.js`       | Kết nối mọi phần, xử lý hành động người dùng |

---

> Một ứng dụng nhỏ, dễ hiểu để rèn luyện JavaScript hướng đối tượng và tổ chức mã theo mô-đun.



# Tham chiếu `this` trong JavaScript

| Trường hợp            | `this` đại diện cho                                     |
| --------------------- | ------------------------------------------------------- |
| Trong object          | Đối tượng đó                                            |
| Trong class           | Đối tượng được tạo từ class                             |
| Trong sự kiện (HTML)  | Phần tử HTML vừa được click                             |
| Trong hàm bình thường | Có thể là `window` hoặc `undefined` (tùy chế độ strict) |
| Trong arrow function  | Kế thừa `this` từ bên ngoài (không có `this` riêng)     |



# 🧠 Giải thích `this` trong bài To-Do List

## 📌 `this` là gì?

Trong JavaScript, từ khóa `this` được dùng để **chỉ đến đối tượng đang "sở hữu" đoạn code**.

Nói cách đơn giản, `this` là **“tôi” hoặc “chính đối tượng hiện tại”**.

---

## 📦 Trong class `TaskItem`

Trong bài To-Do List, `this` được dùng trong `task-item.js` – nơi định nghĩa một công việc.

### 🔹 Ví dụ:
```js
const task = new TaskItem("Làm bài");
```

Lúc này, `task` là một công việc. Bất kỳ dòng code nào trong class `TaskItem` viết `this`, đều ám chỉ `task`.

---

### ✏️ Chi tiết các dòng có `this` trong `TaskItem`:

#### 1. Trong constructor:
```js
this.text = taskText;
this.completed = false;
```
- `this.text` là tên công việc (ví dụ "Làm bài")
- `this.completed` là trạng thái đã hoàn thành chưa (false ban đầu)

#### 2. Trong phương thức `markComplete()`:
```js
this.completed = true;
```
- Đánh dấu công việc này là đã hoàn thành

#### 3. Trong phương thức `render()`:
```js
li.textContent = this.text;
if (this.completed) {
    li.classList.add('completed');
}
```
- Dùng `this.text` để lấy tên công việc hiển thị
- Dùng `this.completed` để gạch ngang nếu đã xong

---

### ⚠️ Lưu ý đặc biệt – Trong `addEventListener`:
```js
li.addEventListener('click', () => {
    this.markComplete();
    li.classList.add('completed');
});
```
- Dùng **arrow function** `() => {}` để giữ nguyên `this`
- Nếu dùng `function () {}`, `this` bên trong sẽ bị sai (trỏ vào phần tử HTML thay vì công việc)

---

## 📋 Trong class `TaskList`

Trong `task-list.js`, `this` được dùng để chỉ chính đối tượng `TaskList`, ví dụ:

```js
this.tasks = [];
```
- `this` ở đây là danh sách công việc (gồm nhiều `TaskItem`)

Khi gọi `this.tasks.push(...)`, tức là thêm công việc vào danh sách hiện tại.

---

## 🧪 Tổng kết bảng `this` trong bài To-Do List:

| Vị trí                        | `this` là gì?            | Dùng để làm gì?                    |
| ----------------------------- | ------------------------ | ---------------------------------- |
| `this.text` trong `TaskItem`  | Công việc hiện tại       | Lấy tên công việc                  |
| `this.completed`              | Công việc hiện tại       | Biết đã làm xong chưa              |
| `this.markComplete()`         | Công việc hiện tại       | Đánh dấu là đã hoàn thành          |
| `this.tasks` trong `TaskList` | Danh sách công việc      | Lưu nhiều công việc                |
| `this` trong arrow function   | Giữ nguyên từ `render()` | Gọi đúng hàm `this.markComplete()` |

---

## ✅ Kết luận

- Trong class, `this` dùng để **truy cập vào các thuộc tính hoặc phương thức của chính đối tượng đó**
- Dùng arrow function để đảm bảo `this` không bị thay đổi
- Hiểu đúng `this` giúp viết code class rõ ràng, dễ hiểu và tránh lỗi
