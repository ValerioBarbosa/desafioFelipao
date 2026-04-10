class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
    this.vida = 100;
  }

  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    };

    let ataque = ataques[this.tipo] || "ataque desconhecido";

    // dano aleatório
    let dano = Math.floor(Math.random() * 20) + 5;

    return {
      mensagem: `o ${this.tipo} atacou usando ${ataque} e causou ${dano} de dano`,
      dano: dano
    };
  }
}

let heroi = null;
let inimigoVida = 100;

function criarHeroi() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const tipo = document.getElementById("tipo").value;

  if (!nome || !idade) {
    alert("Por favor, preencha o nome e a idade!");
    return;
  }

  heroi = new Heroi(nome, idade, tipo);

  atualizarStatus();
  log(`Herói ${nome} criado!`);
}

function atacar() {
  if (!heroi) {
    alert("Crie um herói primeiro!");
    return;
  }

  let resultado = heroi.atacar();
  inimigoVida -= resultado.dano;

  log(resultado.mensagem);

  // inimigo contra-ataca
  let danoInimigo = Math.floor(Math.random() * 15) + 5;
  heroi.vida -= danoInimigo;

  log(`Inimigo atacou e causou ${danoInimigo} de dano`);

  verificarFim();
  atualizarStatus();
}

function atualizarStatus() {
  const statusEl = document.getElementById("status");
  if (statusEl) {
    statusEl.innerText =
      `❤️ Vida do Herói: ${heroi ? heroi.vida : 0} | 👾 Vida do Inimigo: ${inimigoVida}`;
  }
}

function verificarFim() {
  if (heroi.vida <= 0) {
    log("💀 Você perdeu!");
    desativarJogo();
  } else if (inimigoVida <= 0) {
    log("🏆 Você venceu!");
    desativarJogo();
  }
}

function desativarJogo() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function log(texto) {
  const logDiv = document.getElementById("log");
  if (logDiv) {
    logDiv.innerHTML += texto + "<br>";
    logDiv.scrollTop = logDiv.scrollHeight;
  }
}

// Vincular eventos aos botões
document.addEventListener("DOMContentLoaded", () => {
  const btnCriar = document.getElementById("btnCriar");
  const btnAtacar = document.getElementById("btnAtacar");

  if (btnCriar) {
    btnCriar.addEventListener("click", criarHeroi);
  }

  if (btnAtacar) {
    btnAtacar.addEventListener("click", atacar);
  }

  atualizarStatus();
});
