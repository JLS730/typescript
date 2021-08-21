let num1 = 2
let num2 = 3.8
let resultMessage = 'Results: '

function add(n1: number, n2: number, message: string, bool: boolean) {
    const sum = n1 + n2

    if(bool === true) {
        console.log(message + sum)
    } else {
        console.log('Boolean is false')
    }
}

add(num1, num2, resultMessage, false)

interface User {
    username: string
    id: number
}

class UserAdmin {
    username: string
    id: number

    constructor(username: string, id: number) {
        this.username = username
        this.id = id
    }
}

const user: User = new UserAdmin('Jaron', 730)

console.log(user)

function checkUserProps(user: User) {
    for(let props in user) {
        console.log(props)
    }
}

checkUserProps(user)

function checkUnion(value: string | boolean) {
    if(typeof value === 'string') {
        console.log('This value is a string')
    } else if(typeof value === 'boolean') {
        console.log('This value is a boolean')
    } else {
        console.log('Error')
    }
}

checkUnion('Hello')
checkUnion(false)

