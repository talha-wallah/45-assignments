/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

let age:number = 16;

if (age < 2) {
    console.log(`if age is=${age}, the person is a baby`)
} else if (age < 4) {
    console.log(`if age is=${age}, the person is a Todler`)
}  else if (age < 13) {
    console.log(`if age is=${age}, the person is a Kid`)
}  else if (age < 20) {
    console.log(`if age is=${age}, the person is a Teenager`)
}  else if (age < 65) {
    console.log(`if age is=${age}, the person is a Adult`)
}  else {
    console.log(`if age is=${age}, the person is a very elder`)
}
console.log(`\n2nd case with age 45`)
age=100;
if (age < 2) {
    console.log(`if age is=${age}, the person is a baby`)
} else if (age < 4) {
    console.log(`if age is=${age}, the person is a Todler`)
}  else if (age < 13) {
    console.log(`if age is=${age}, the person is a Kid`)
}  else if (age < 20) {
    console.log(`if age is=${age}, the person is a Teenager`)
}  else if (age < 65) {
    console.log(`if age is=${age}, the person is a Adult`)
}  else {
    console.log(`if age is=${age}, the person is a very elder`)
}
