// Encapsulamento 

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    getArea() {
        return this.#calcularArea()
    }

    //'#' significa qua a função está encapsulada (privada)
    #calcularArea() {
        return this.altura * this.largura
    }
}

const poligono = new Poligono(50, 50)
console.log(poligono) //Poligono { altura: 50, largura: 50 }
console.log(poligono.getArea()) //2500