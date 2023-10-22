import Person from "./class"

/**
 *  Inheritance: is a mechanism where a class (i.e subclass) inherits the properties of another class (called superclass)
 */
class Staff extends Person {
    discipline: string

    constructor (discipline: string) {
        super("John", 9)

        this.discipline = discipline
    }

    language (lingua: string) {
        return `${this.name} is a ${this.discipline} and he can speak ${lingua}`
    }
}

const staff = new Staff("Doctor")

console.log(staff.language("French"));
