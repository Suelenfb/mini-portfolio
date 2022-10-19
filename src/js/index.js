// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

// passo 2 - dar um jeito de identificar o lique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)  
    });
});

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionado = document.querySelector("li.aba.selecionado");
    abaSelecionado.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
       //passo 5 - esconder o conteúdo anterior
       const informacaoSelecionado = document.querySelector("div.informacao.selecionado");
       informacaoSelecionado.classList.remove("selecionado");
   
       //passo 6 - mostrar o conteúdo da aba selecionada
       const idDoElementoInformacoesDaAba = `informacao-${aba.id}`
   
       const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
       informacaoASerMostrada.classList.add("selecionado");
}