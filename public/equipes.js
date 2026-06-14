function renderCardsEquipes(cards) {
  if (!itensEquipes) return;
  itensEquipes.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const item = cards[i];
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";
    col.innerHTML = 
      `<a href="detalhes.html?id=${item.id}&tipo=equipe" class="text-decoration-none">
        <div class="card h-85 ${item.estilo} p-3">
          <img src="${item.imagem}" alt="${item.titulo}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${item.titulo}</h6>
            <p class="card-text">${item.texto.substring(0, 40)}...</p>
          </div>
        </div>
      </a>`;
    itensEquipes.appendChild(col);
  }
}

renderCardsEquipes(equipes.cards);
