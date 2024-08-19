const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    atualizarSelecao(".selecionado", botao, "selecionado");
    atualizarSelecao(".imagem.ativa", imagens[indice], "ativa");
    atualizarSelecao(".informacoes.ativa", informacoes[indice], "ativa");

  });
});

function atualizarSelecao(selector, elemento, classe) {
  const elementoAtivo = document.querySelector(selector);
  if (elementoAtivo) {
    elementoAtivo.classList.remove(classe);
  }
  elemento.classList.add(classe);
}