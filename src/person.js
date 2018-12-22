

// const isAdult = function (age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     };
// }
const isAdult = (age) => age >= 18;

export const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;


// export const canDrink = function (age) {
//     if (age < 21) {
//         return false;
//     } else {
//         return true;
//     }
// }

export { isAdult, isSenior as default };