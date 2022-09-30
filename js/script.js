window.addEventListener('load',() => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        //creating the div element -> new task
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        //adding the content -> task content
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        
    })
})