const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lenguaje = {
    Espanol: 'hola',
    Ingles: 'hello',
}

rl.question('Como te llamas: ', (name)=>{
    rl.question('En que idioma quieres que te salude, en Espanol o Ingles: ', (lenguaje) =>{
        console.log(lenguaje  +  name);
    rl.close();
    })
});
