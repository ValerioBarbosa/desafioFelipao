class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
    this.vidaMax = 100;
    this.vida = 100;
  }

  atacar() {
    const ataques = {
      mago: "magia ✨",
      guerreiro: "espada ⚔️",
      monge: "artes marciais 🥋",
      ninja: "shuriken 🥷"
    };

    let ataque = ataques[this.tipo] || "ataque desconhecido";
    let dano = Math.floor(Math.random() * 20) + 10;

    return {
      mensagem: `O ${this.tipo} ${this.nome} atacou usando ${ataque} e causou ${dano} de dano!`,
      dano: dano
    };
  }
}

let heroi = null;
let inimigoVidaMax = 100;
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
  inimigoVida = 100; // Reset inimigo ao criar novo herói
  
  // Habilitar botão de ataque
  document.getElementById("btnAtacar").disabled = false;
  
  // Atualizar nome no card
  document.getElementById("hero-display-name").innerText = `${nome} (${tipo})`;

  atualizarStatus();
  log(`Herói ${nome} entrou na arena!`, 'system');
}

function atacar() {
  if (!heroi) return;

  // Ataque do Herói
  let resultado = heroi.atacar();
  inimigoVida = Math.max(0, inimigoVida - resultado.dano);
  log(resultado.mensagem, 'hero');
  
  // Efeito visual no inimigo
  shakeElement("enemy-card");

  if (inimigoVida > 0) {
    // Inimigo contra-ataca após um pequeno delay
    setTimeout(() => {
      let danoInimigo = Math.floor(Math.random() * 15) + 5;
      heroi.vida = Math.max(0, heroi.vida - danoInimigo);
      log(`👾 Inimigo atacou e causou ${danoInimigo} de dano!`, 'enemy');
      
      // Efeito visual no herói
      shakeElement("hero-card");
      
      atualizarStatus();
      verificarFim();
    }, 500);
  }

  atualizarStatus();
  verificarFim();
}

function atualizarStatus() {
  // Barras de vida
  const heroBar = document.getElementById("hero-health-bar");
  const enemyBar = document.getElementById("enemy-health-bar");
  
  if (heroi) {
    const heroPercent = (heroi.vida / heroi.vidaMax) * 100;
    heroBar.style.width = `${heroPercent}%`;
    document.getElementById("hero-hp-text").innerText = `HP: ${heroi.vida}/${heroi.vidaMax}`;
  }

  const enemyPercent = (inimigoVida / inimigoVidaMax) * 100;
  enemyBar.style.width = `${enemyPercent}%`;
  document.getElementById("enemy-hp-text").innerText = `HP: ${inimigoVida}/${inimigoVidaMax}`;
}

function verificarFim() {
  if (heroi.vida <= 0) {
    log("💀 Você foi derrotado...", 'system');
    desativarJogo();
  } else if (inimigoVida <= 0) {
    log("🏆 Vitória! O inimigo foi vencido!", 'system');
    desativarJogo();
  }
}

function desativarJogo() {
  document.getElementById("btnAtacar").disabled = true;
}

function log(texto, type = 'system') {
  const logDiv = document.getElementById("log");
  if (logDiv) {
    const entry = document.createElement('div');
    entry.className = `log-entry log-${type}`;
    entry.innerHTML = texto;
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
  }
}

function shakeElement(id) {
  const el = document.getElementById(id);
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 200);
}

// Vincular eventos
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCriar").addEventListener("click", criarHeroi);
  document.getElementById("btnAtacar").addEventListener("click", atacar);
  atualizarStatus();
});
