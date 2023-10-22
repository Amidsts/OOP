/**
 * Interface Segregation Principle states, no class should not be forced to implement a function/method they do no need.
 * 
 * For Example, assumming yoou are building a messaging app, where both users and admin can send message but, only admin can ban users, you can apply ISP in this scenerio to ensure each class inherits only the methods applicable to them
 */

class IUser {
    name: string

    constructor(name: string) {
        this.name = name
    }
    send() {
        return "This must send a message"
    }
}


class User extends IUser {
   
    send() {
        return `User ${this.name} just sent a message`
    }
}

class Admin extends IUser {
    send() {
        return `Admin ${this.name} just sent a message`
    }

    banUser ( user: User) {
        return `Admin ${this.name} ban user ${user.name}`
    }
}


//send message implementation

function sendMessage(user: IUser) {
    return user.send()
}

console.log(sendMessage( new User("Hameedat")))
console.log(sendMessage( new Admin("Hameedat")))


//ban user implementation

function banUser(admin: Admin, user: User) {
    return admin.banUser(user)
}

console.log(banUser(new Admin("administrator"), new User("Hameedat") ))