// Herança
class Veiculo {
    rodas = 4
  
    mover(direcao){}
    virar(direcao){}
  }
  
  class Moto extends Veiculo {
    constructor() {
      super() // puxa atributos e metedos do pai
      this.rodas = 2
    }
  }