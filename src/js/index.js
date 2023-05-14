const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //passo 1
const body = document.querySelector("body") //passo 2
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () =>{ //passo 3

    const modoEscuroestaAtivo = body.classList.contains("modo-escuro") //passo 6

    body.classList.toggle("modo-escuro")

    if (modoEscuroestaAtivo){
        //body.classList.remove("modo-escuro")  //passo 7
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun2.gif" ) //passo 8  
    }else{
       // body.classList.add("modo-escuro"); //passo 4
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon1.gif" ) //passo 5
        
    } 
} );



/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/