// Polimorfismo

class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} fez algum som`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    barked(){
        console.log(`${this.name} latiu!`)
    }
}

const animal = new Animal("Simba")
const dog = new Dog("Shiuaua")

animal.speak()
dog.barked()