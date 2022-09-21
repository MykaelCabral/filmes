function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
    //var elementoFilmeFavoriro = "<img src=" + filmeFavorito + ">"
    // var elementoListaFilmes = document.getElementById("listaFilmes")
    //elementoListaFilmes.innerHTML =  elementoListaFilmes.innerHTML + elementoFilmeFavoriro;
    // dividindo em 2 partes as funçoes, copiado para outra funçao
  } else {
    console.error("endereço de filme invalido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavoriro = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavoriro;
}