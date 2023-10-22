/*The Single Responsibility Principle states that a class should do one thing and it should have only a single reason to change.
This means that if a class is a data container, like a Book class or a Student class, and it has some fields regarding that entity, it should change only when we change the data model. In other word, A class class should do one thing and it should have one reason to change
*/

export class Book {
    name: string
    authorName: string
    price: number
    year: number

    constructor (Name: string, authorName: string, price: number, year: number) {
        this.name = Name
        this.authorName = authorName
        this.price = price
        this.year = year
    }
}

export class Invoice {
    book: Book
    quantity: number
    discountRate: number
    total: number

    constructor (book: Book, quantity: number, discountRate: number) {
        this.book = book
        this.quantity = quantity
        this.discountRate = discountRate
        this.total = this.calculateTotal()
    }

    calculateTotal ()  {
        let price = (this.book.price - (this.book.price * this.discountRate) ) * this.quantity
        return price
    }
}

export class InvoicePersistence {
    book: Book

    constructor (book: Book) {
        this.book = book
    }

    saveToFile () {
        // logic here
    }
}