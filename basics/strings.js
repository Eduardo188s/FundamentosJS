// Strings 
const firstName = 'Francisco';
const lastName = 'De Luis'
const fullName = firstName + " " + lastName;

console.log("I'm " + firstName)
console.log('I\'m ' + firstName)

console.log(fullName);

// Strings Multilinea
const menu = `
elige:
1 - Opción 1
2 - Opción 2
2 - Opción 3
`;

console.log(menu);

// Strings Templates
// placeholder ${ }

const city = 'Huamantla';
const phone = '2411368055';
const rol = 'Alumno'

const presentation = `
Holaa
Soy ${ fullName }, ${ rol } en la UTT   
Vivo en ${ city }
Te puedes comunicar conmigo al ${ phone }
`;

console.log(presentation);