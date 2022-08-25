function adicionar() {
    var tarefareal = document.getElementById('tarefa')
    localStorage.setItem('tarefa', tarefareal.value)
    
    var resposta = document.getElementById('resp')
    resposta.innerHTML += `<p> ${localStorage.getItem('tarefa')}  </p> `
}
