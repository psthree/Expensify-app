// Obeject destructuring

// const book = {
//     title: 'The Source',
//     author: 'James Micthner',
//     publisher: {
//         // name: 'Penguin'
//     }
// }
// const { name: publisherName = 'Self Publish' } = book.publisher

// console.log(publisherName)




// const person = {
//     // name: 'Peter',
//     age: 59,
//     location: {
//         city: 'Detroit',
//         temp: 80
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${person.age}`);

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city} Hi ${firstName}`);
// }

// Array destructuring

const address = ['29091 Tawas', 'Troy', 'MI', '48084'];
// console.table(address);

const [street, city, state, zip] = address;

// console.log(`Your are in ${address[1]}, ${address[2]}`)
console.log(`Your are in ${city}, ${state}`)

const item = ['Hot Coffee', 2.00, 3.00, 4.00]
const [coffee, , med] = item

console.log(`A medium ${coffee} costs $${med}`);


