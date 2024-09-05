//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
function combinandoNomesPokemons(palavra) {
    // TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";
      var palavraPokemon = palavra + "saur";
    // TODO: Após a váriavel, retorne a palavra pokemon; 
      return palavraPokemon;
      
    }
    
    // Entrada da palavra usando o gets():
    var nomeEntrada = gets();
    
    // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
    var palavraGerada = combinandoNomesPokemons(nomeEntrada);
    
    // Exibindo a palavra gerada:
    print(palavraGerada);