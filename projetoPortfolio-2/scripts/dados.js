const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const tellInput = document.querySelector("#telefone");
const knowArte = document.querySelector("#arte");
const message = document.querySelector("#mensagens");
const idadeInput = document.querySelector("#idade");
const dataInput = document.querySelector("#data");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    // Verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email.");
        return;
    }

    // Verifica o telefone está preenchido
    
    if(!validateTell(tellInput.value, 11)){
        alert("O número para contato precisa ter 11 digitos.");
        return; 
    }
    
    if(idadeInput.value === ""){
        alert("Por favor, insira sua idade!");
        return;
    }

    if(dataInput.value === ""){
        alert("Por favor, insira a data de hoje.");
        return;
    }

    // Verifica se foi selecionado
    if(knowArte.value ===""){
        alert("Por favor, selecione se conhece sobre arte.");
        return;
    }

    // Verifica se a mensagem está preenchida
    if(message.value === ""){
        alert("Por favor, escreva uma mensagem!");
        return;
    }


    const dados = getFormData();
    confirm("Confirmação dos Dados:\nNome: " + dados.nome + "\nIdade: " + dados.idade + "\nEmail: " + dados.email + "\nTelefone: " + dados.tell);

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    

    alert("Preenchido com sucesso!");

    form.submit();

})

form.addEventListener("submit", () => {
    // Exibe a mensagem após o envio
    showMessage();
  });

function showMessage(){
    document.getElementById("p1").style.display = "block";
}

function getFormData() {
    const nome = nameInput.value;
    const email = emailInput.value;
    const tell = tellInput.value;
    const idade = idadeInput.value;
    return { nome, email, tell, idade };
}


// Função que valida e-mail
function isEmailValid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

// Função que valida o telefone
function validateTell(tellInput, minDigits){
    if(tellInput.length >= minDigits){
        return true
    }
    return false
}