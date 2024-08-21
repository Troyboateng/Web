const todoList = [{
    name: 'Prepare fufu',
    dueDate: '2024-09-14'
    },
    {
        name : 'Wash bowls',
        dueDate: '2024-10-30'}
    ];

renderTodoList();


function renderTodoList(){

let todoListHTML = '';

todoList.forEach(function(todoObject, index){

    const {name, dueDate} = todoObject; //Destructuring works same as line 1 & 2

    const html = `<div>${name}</div>
                 <div>${dueDate}</div>
                 <button onclick = "
                    todoList.splice(${index}, 1);
                    renderTodoList();
                "class = "delete-todo-button"
                >Delete</button>`;  // Generating the HTML
    todoListHTML += html;
});

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;

}

function onEnter(event){
    
    if (event.key === 'Enter') {
        addTodo();
    }

}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
       // name: name,  // 1
     //   dueDate : dueDate,  // 2
        name,  // shorthand property for 1 & 2
        dueDate
    });

    inputElement.value= '';   // This resets the textbox to blank

    renderTodoList();
}
