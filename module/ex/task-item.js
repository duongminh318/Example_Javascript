export default class TaskItem {
   
    constructor(taskText) {
        this.text = taskText;
        this.completed = false;
    }
    markComplete() {
        this.completed = true;
    }
    render() {
        const li = document.createElement('li');
        li.textContent = this.text;
        if (this.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => {
            this.markComplete();
            li.classList.add('completed');
        });
        return li;
    }
}