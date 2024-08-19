const todoList = [];

function onEnter(event){
    
    if (event.key === 'Enter') {
        addTodo();
    }

}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value= '';   // This resets the textbox to blank
}
