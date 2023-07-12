# Programação Orientada a objeto

Este é um resumo sobre POO (Programação Orientada a objeto) e alguns codigos explicando sobre alguns pilares.

## Classes
Classes são como "fabricas de objetos" onde um modelo de objetos pode ser feitos para varios outros de mesmo modelo.

```js
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    fullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

    // tipo estatico não leva nenhum dado 
    static speak(){
        console.log("Hello world")
    }
}

const person = new Person("Alexandre", "Medeiros", 19)

person.fullName()
Person.speak()//forma de chamar o estatico
```


## Principais Pilares 

### Herança
Objetos podem herdar, ou estender caracteristicas bases. Uma copia de atributos e mètedos de outras classes.

```js
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
```

A key word ```extends``` tem a função de estender métedos e atributos do elemneto pai para a nova class ```Moto```.

### Polimorfismo
Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais caracteristicas (atributos e métedos) nesse novo objeto.

````js
class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} fez algum som`)
    }
}
````
Aqui nòs criamos um uma classe chamado de animal. Mas animal è um termo muito generico.

`````js
class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    barked(){
        console.log(`${this.name} latiu!`)
    }
}
`````
Logo temos uma nova classe estendendo de "Animal" chamado de "Dog". E adicionamos o méteodo ``` barked() ```, fazendo assim o polimorfismo.

### Encapsulamento
O encapsulamento funciona com a utilização de modificadores de acesso para restringir o acesso aos atributos e aos métodos de um objeto. 

````js
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
````
o '#' faz com que o métedo funcione apenas dentro da classe e para outros métedos dentro da class.

````js
const poligono = new Poligono(50, 50)
console.log(poligono) //Poligono { altura: 50, largura: 50 }
console.log(poligono.getArea()) //2500
console.log(poligono.#calcularArea()) // !Apenas funciona na classe!
````

<hr>
obs: A documentação é apenas um resumo do que eu aprendi sobre o assunto. Obrigado por lerem atè aqui 💙