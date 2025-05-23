import TaskItem from './task-item.js';

export default class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskText) {
        const task = new TaskItem(taskText);
        this.tasks.push(task);
    }

    renderTasks(container) {
        container.innerHTML = '';

        const elements = this.tasks.map(task => {
            const el = task.render();
            container.appendChild(el);
            return el;
        });

        return elements;
    }
}
