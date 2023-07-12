// Classes

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
Person.speak()