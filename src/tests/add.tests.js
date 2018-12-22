const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;
console.log(generateGreeting('peter'));

//globule var provided by jest test('description', function to run)

test('should add to numbers', () => {
    const result = add(2, 2);
    //test value of result
    //create assertion!
    // if (result !== 4) {
    //     throw new Error(`Added 2 +2  the result was ${result}, expected 4`)
    // }
    //use jest built in assertions
    expect(result).toBe(4);
});
test('Should have a name', () => {
    const result = generateGreeting('Peter');
    expect(result).toBe('Hello Peter');
});

test('No name supplied', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});


//to run in watch mode 
//npm test -- --watch