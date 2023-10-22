/**
 * The Liskov Substitution Principle states that subclasses should be substitutable for their base/super classes. This simply means that, given that class B is a subclass of class A, we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.
 */


class Bird {
    fly() {
        return "The bird is flying"
    }
}

class Pengium extends Bird{
    fly () {
        return "Pengium cannot fly"
    }
}


function makeBirdFly(bird: Bird): string {

    return bird.fly()
}

console.log( makeBirdFly(new Bird()) )

console.log( makeBirdFly(new Pengium()) )