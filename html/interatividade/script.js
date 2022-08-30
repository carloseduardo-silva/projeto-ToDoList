/* seleção de algumas divs e componentes importantes do HTML.*/

const tarefareal = document.getElementById('tarefa')
const todoList = document.querySelector('div#resp')
const cancelEditBtn = document.querySelector('section#editar input#cancel')
const todoForm = document.querySelector('section#adicionar')
const editar = document.querySelector('section#editar')
const editInput = document.querySelector('section#editar input#iptedit')

let oldInputValue;

/* function acionada ao apertar o botao enviar no HTML, o qual ativa essa function que verifica se o input esta vazio e ativa a function saveinputtarefa que realiza todo o procedimento de salvar e jogar na lista do ToDo */

function adicionar() {
    
    const tarefalrealvalue = tarefareal.value

    if (tarefalrealvalue) {
        saveInputTarefa(tarefalrealvalue)
    }

}


/* function que recebe um parametro text e é responsavel pela criação de toda estrutura HTML da ToDo list, desde os textos (parametro Text), até os botões e suas functions.*/


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
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = "✎";
    todo.appendChild(editBtn)
    
    const excludeBtn = document.createElement('button');
    excludeBtn.classList.add('exclude-todo');
    excludeBtn.innerHTML = "✘";
    todo.appendChild(excludeBtn)
    
    /* atribui todos esses componentes HTML ativados pelo JS á div principal criada em HTML. */
    todoList.appendChild(todo)
    
    /* apaga e foca no input dnv logo após a digitação e envio de uma tarefa> */
    tarefareal.value = '';
    tarefareal.focus()
    
    
    
}


/* function toggle permite a atribuição e desatribuição da class hide (possui um display none o qual oculta a div) por meio do event click, tanto no botao de editar quanto no botao de cancelar   */

function toggleForms() {
    editar.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")

}


/* 1 - utilização do Toggle = muito util, pois ao ser utilizado em eventos de click e entre outros, ele possui a versatilidade de aplicar e desaplicar uma function.
   2- logo abaixo esta a config das functions dos 3 botões do ToDo List -> CHECKED, EXCLUDE, EDIT.
*/

document.addEventListener('click', (e) => {
    /*recohecimento do elemento clicado*/
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerHTML;
    }
    
    if (targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done');
    }
    
    if(targetEl.classList.contains('exclude-todo')){
        parentEl.remove();
    }
    
    if(targetEl.classList.contains('edit-todo')){
        toggleForms();

        /* Salvamento (para apresentar ele no input da tela de edição) e mapeamento do valor h3/titulo a ser editado */
        editInput.value = todoTitle
        oldInputValue.value = todoTitle
    }
    
})

/* desaplica as classes hide da function toggleforms, por meio da reaplicação dela permitida pelo metodo .Toggle() */
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    toggleForms();
})






















/*  Meu jeito, porem nao tao funcional:   localStorage.setItem('tarefa', tarefareal.value)
    
    var resposta = document.getElementById('resp')
    resposta.innerHTML += `<p> ${localStorage.getItem('tarefa')}  
    <input class="check" type="button" value="✔" onclick="check()"> 
    <a id = "editar" href="index002.html"> ✎ </a>  
    <input class="excluir" type="button" value="✘"> 
    
    </p> ` */