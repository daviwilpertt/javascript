// Vetor para armazenas os nomes de usuários 
let users = []

// Variáveis para armazenar os elementos pelos seus ID's
let elementoInputUser = document.getElementById('intpUser')
let elementoDivLista = document.getElementById('lista')
let elementoInputPesquisa = document.getElementById('inptPesquisa')

// Variáveis para utilizar nas functions
let userPesquisa = ''
let posPesquisa = ''

// Função Cadastrar
function Cadastrar(){

    // Adiciona o nome de usuário do input no vetor de usuários
    users.push(elementoInputUser.value)

    // Chama a função listar para mostrar a lista de usuários atualizada
    Listar()

    // Mostra mensagem para o usuário, confirmando o cadastro
    alert('Deu bom! =D')

    // Limpa o input de nome de usuário
    elementoInputUser.value = ''

    // Posiciona o cursor no input de nome de usuário
    elementoInputUser.focus()

}

// Função Listar
function Listar(){

    // Mostra na div Lista o vetor com os usuários cadastrados
    elementoDivLista.innerHTML = users

}

// Função Pesquisar
function Pesquisar(){

    // Armazena na variável o nome de usuário a ser pesquisado
    userPesquisa = elementoInputPesquisa.value

    // Utiliza o método indexOf() para pesquisar e guarda a posição encontrada
    posPesquisa = users.indexOf(userPesquisa)

    // Mostra o nome de usuário encontrado no input de nome de usuário
    elementoInputUser.value = userPesquisa

    // Limpa o input de pesquisa
    elementoInputPesquisa.value = ''

    // Mostra mensagem para o usuário, confirmando que a pesquisa finalizou
    alert('Usuário encontrado! :)')

}

// Função Editar
function Editar(){

    // Utiliza a posição armazenada para alterar o usuário
    users[posPesquisa] = elementoInputUser.value

    // Chama a função listar para mostrar a lista de usuários atualizada
    Listar()

    // Mostra mensagem para o usuário, confirmando que a edição foi realizada
    alert('Usuário editado! :B')

}

// Função Deletar
function Deletar(){

    // Utiliza a posição armazenada para deletar o nome de usuário, com o método splice()
    // splice(índice, quantidade a deletar)
    users.splice(posPesquisa, 1)

    // Chama a função listar para mostrar a lista de usuários atualizada
    Listar()

    // Mostra mensagem para o usuário, confirmando que a exclusão foi realizada
    alert('Usuário deletado! :X')

}





