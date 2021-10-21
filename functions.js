const functions = {
    add: (num1, num2) => num1 + num2, //arrow function
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Barry'}
        user ['lastName'] = 'Nguyen';
        return user;
    } 
}

module.exports = functions;

