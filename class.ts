/** Classes are usued to create instances of an object, it is made up of variables and methods
 * 
 * Contructor function is used to inintialise the variables in a class
 */

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    ablity () {
        return `${this.name} is ${this.age} and she can drive`
    }
}

const person = new Person("Hameedat", 12)

console.log(person.ablity())

export default Person