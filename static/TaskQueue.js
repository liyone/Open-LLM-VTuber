class TaskQueue {
    constructor(taskIntervalms=100) {
        this.queue = [];
        this.running = false;
        this.taskInterval = taskIntervalms;
        this.currentTask = null;
    }

    addTask(task) {
        this.queue.push(task);
        if (!this.running) {
            this.runNextTask();
        }
    }

    clearQueue() {
        this.queue = [];
        this.running = false;
        this.currentTask = null;
        if (this.currentTask) {
            try {
                this.currentTask.abort();
            } catch (e) {
                console.log("Could not abort current task:", e);
            }
            this.currentTask = null;
        }
    }

    async runNextTask() {
        if (this.running || this.queue.length === 0) {
            return;
        }

        this.running = true;
        this.currentTask = this.queue.shift();
        try {
            await this.currentTask();
        } catch (error) {
            console.error('Task failed', error);
        }
        this.currentTask = null;
        this.running = false;
        
        if (this.queue.length > 0) {
            setTimeout(() => this.runNextTask(), this.taskInterval);
        }
    }
}

const taskQueue = new TaskQueue();