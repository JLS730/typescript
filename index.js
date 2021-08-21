var num1 = 2;
var num2 = 3.8;
var resultMessage = 'Results: ';
function add(n1, n2, message, bool) {
    var sum = n1 + n2;
    if (bool === true) {
        console.log(message + sum);
    }
    else {
        console.log('Boolean is false');
    }
}
add(num1, num2, resultMessage, false);
var UserAdmin = /** @class */ (function () {
    function UserAdmin(username, id) {
        this.username = username;
        this.id = id;
    }
    return UserAdmin;
}());
var user = new UserAdmin('Jaron', 730);
console.log(user);
function checkUserProps(user) {
    for (var props in user) {
        console.log(props);
    }
}
checkUserProps(user);
function checkUnion(value) {
    if (typeof value === 'string') {
        console.log('This value is a string');
    }
    else if (typeof value === 'boolean') {
        console.log('This value is a boolean');
    }
    else {
        console.log('Error');
    }
}
checkUnion('Hello');
checkUnion(false);
