class Heroi{
  constructor(nome, idade, tipo){
    this.name = name;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar(){
    let ataque = "";

    //Estrutura de decisão
    if (this.tipo === "mago") {
      atque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }    

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando heróis 
let heroi1 = new Heroi("Arthas", 30, "guerreiro");
let heroi2 = new Heroi("Merlin", 150, "mago");
let heroi3 = new Heroi("Lee", 40, "monge");
let heroi4 = new Heroi("Hanzo", 35, "ninja");

// Executando ataques
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
