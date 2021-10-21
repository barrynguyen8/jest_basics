const functions = require('./functions');

// toBE
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


//toBeNull

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual - for objects and arrays
test('User should be Barry Nguyen object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Barry', lastName: 'Nguyen'});
});
