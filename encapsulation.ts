/**
 * Encapsulation mean restricting unauthourise access or alteration of class properties
 * 
 * This can be achieved using access modifiers. Access modifiers are used to change the accessibility of the properties of a class. They include public, private, static, protected, readonly
 */


class A {
    private variable: string

    constructor(variable: string) {
        this.variable = variable
    }

    get value () { //A getter gets the value of an instance variable in a class
       return this.variable
    } 

    set value (val: string) { //A setter sets the value of an instance variable in a class
        this.variable = val
    }
}

const a = new A("Man")

// a.value = "woman"
console.log(a.value);
