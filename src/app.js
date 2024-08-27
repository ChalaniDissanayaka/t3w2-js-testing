const readline = require('readline');
const { add, subtract, multiply, divide } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getOperation(callback) {
    rl.question('Choose an operation (a/A=add, s/S=subtract, m/M=multiply, d/D=divide): ', (operation) => {
        switch (operation.toLowerCase()) {
            case 'a':
            case 'add':
                callback('add');
                break;
            case 's':
            case 'subtract':
                callback('subtract');
                break;
            case 'm':
            case 'multiply':
                callback('multiply');
                break;
            case 'd':
            case 'divide':
                callback('divide');
                break;
            default:
                console.log('Invalid operation. Please try again.');
                getOperation(callback);
        }
    });
}

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        getOperation((operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            try {
                switch (operation) {
                    case 'add':
                        result = add(a, b);
                        break;
                    case 'subtract':
                        result = subtract(a, b);
                        break;
                    case 'multiply':
                        result = multiply(a, b);
                        break;
                    case 'divide':
                        result = divide(a, b);
                        break;
                }
                console.log(`The result is: ${result}`);
            } catch (error) {
                console.error(error.message);
            } finally {
                rl.close();
            }
        });
    });
});