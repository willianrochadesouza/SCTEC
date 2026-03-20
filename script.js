document.addEventListener("DOMContentLoaded", function () {
  var data = {
    html: [
      "Estruturação de páginas web",
      "Organização de conteúdo (semântica básica)",
      "Criação de layouts simples",
    ],
    css: [
      "Estilização de páginas",
      "Organização visual (cores, espaçamento, alinhamento)",
      "Noções de responsividade",
    ],
    javascript: [
      "Lógica básica de programação",
      "Manipulação simples de interações",
      "Funções e comportamento dinâmico",
    ],
    ferramentas: [
      "VS Code",
      "GitHub (hospedagem básica)",
      "Pesquisa e uso de bibliotecas online",
    ],
    design: [
      "Corel Draw, Photoshop, Illustrator",
      "Criação de layouts",
      "Aplicação prática em projetos reais (serigrafia)",
    ],
    logica: [
      "Desenvolvimento de soluções no Excel",
      "Automação de processos",
      "Pensamento voltado para resolver problemas reais",
    ],
  };

  var buttons = document.querySelectorAll(".aprendizado-botao");
  var output = document.getElementById("aprendizado-descricao");

  function buildList(items) {
    var ul = document.createElement("ul");
    for (var i = 0; i < items.length; i++) {
      var li = document.createElement("li");
      li.textContent = items[i];
      ul.appendChild(li);
    }
    return ul;
  }

  function show(key, label) {
    if (!output) return;
    output.innerHTML = "";
    var h3 = document.createElement("h3");
    h3.textContent = label;
    output.appendChild(h3);
    var list = buildList(data[key] || []);
    output.appendChild(list);
  }

  for (var i = 0; i < buttons.length; i++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-key");
        show(key, btn.textContent);
        for (var j = 0; j < buttons.length; j++)
          buttons[j].classList.remove("active");
        btn.classList.add("active");
      });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
    })(buttons[i]);
  }
});
