/**
 * Open Closed Principle: state that classes should be open for extension and closed to modification.
 * 
 * NOTE: Modification means changing the code of an existing class, and extension means adding new functionality.
 * 
 * Adding new functionality without touching the existing class is usually done with the help of interfaces and abstract classes.
 * 
 * NOTE: 1) An abstract class is a class that contains at least one abstract method. An abstract method is a method that is declared, but not implemented in the code.
 *       2) An Interface define the properties of an object
 */

import { Book, Invoice } from "./SRP";

// We need to add saveToDatabase to the saveInvoice class, we created in the S.ts file, but we havent designed the class to be easily extensible in the future. To obey the Open-Closed principle, we need to create room for new features
class InvoicePersistence {
    save (invoice: Invoice) {
        //logic here
    }
}

class SaveToDatabase extends InvoicePersistence {
    save(invoice: Invoice): void {
        //logic here
    }
}

class SaveToFile extends InvoicePersistence {
    save(invoice: Invoice): void {
        //logic here
    }
}

/**
 * If we extend our app and have multiple persistence classes and we have many persistence classes like saveToDatabase, saveToFile etc
 * We could create a single class that manages all persistence class. An example is given below
 * 
 */

class PersistenceManager {
    saveToDB: SaveToDatabase
    saveToFile: SaveToFile

    constructor (saveToDB: SaveToDatabase, saveToFile: SaveToFile) {
        this.saveToDB = saveToDB
        this.saveToFile = saveToFile
    }
}