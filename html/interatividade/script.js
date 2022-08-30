const tarefareal = document.getElementById('tarefa')
const todoList = document.querySelector('div#resp')

function adicionar() {

    const tarefalrealvalue = tarefareal.value

    if (tarefalrealvalue) {
        saveInputTarefa(tarefalrealvalue)
    }

}

const saveInputTarefa = (text) => {

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = "✔";
    todo.appendChild(doneBtn)
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('finish-todo');
    editBtn.innerHTML = "✎";
    todo.appendChild(editBtn)
    
    const excludeBtn = document.createElement('button');
    excludeBtn.classList.add('finish-todo');
    excludeBtn.innerHTML = "✘";
    todo.appendChild(excludeBtn)
    
    todoList.appendChild(todo)



}



















/*  Meu jeito, porem nao tao funcional:   localStorage.setItem('tarefa', tarefareal.value)
    
    var resposta = document.getElementById('resp')
    resposta.innerHTML += `<p> ${localStorage.getItem('tarefa')}  
    <input class="check" type="button" value="✔" onclick="check()"> 
    <a id = "editar" href="index002.html"> ✎ </a>  
    <input class="excluir" type="button" value="✘"> 
    
    </p> ` */