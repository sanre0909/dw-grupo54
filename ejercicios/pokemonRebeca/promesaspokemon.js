const obtenerPokemon = (nombrePokemon) => {
    return new Promise((resolve, reject) => {

        // Simular una solicitud asincrona de información de un pokemón
        const pokemonDatabase = {
            "pikachu": {
                nombre: "Pikachu",
                tipo: "Eléctrico",
                ataque: "Rayo",
                color: "Amarillo",
                evoluciones: "Raichu y Raichu de alola"
            },
            "bulbasaur": {
                nombre: "Bulbasaur",
                tipo: "Planta/Veneno",
                ataque: "Latigo Cepa",
                color: "Verde",
                evoluciones: "ivysaur y Venusaur"
            },
            "charmander": {
                nombre: "Charmander",
                tipo: "Fuego",
                ataque: "Llamarada",
                color: "Rojo",
                evoluciones: "Charmeleon y Charizard"
            },
            "squirtle": {
                nombre: "Squirtle",
                tipo: "Agua",
                ataque: "Hidrobomba",
                color: "Azul",
                evoluciones: "Wartortle y Blastoise"
            },
            "gastly": {
                nombre: "Gastly",
                tipo: "Fantasma/Veneno",
                ataque: "Bola sombra",
                color: "Morado",
                evoluciones: "Haunter y Gengar"
            },
            "sandshrew": {
                nombre: "Sandshrew",
                tipo: "Tierra",
                ataque: "Ataque rapido",
                color: "Amarillo/Beige",
                evoluciones: "Sandslash y Sandslash de Alola"
            }
        }

        // Comprobar si el pokemon existe en nuestra base de datos.
        const pokemon = pokemonDatabase[nombrePokemon.toLowerCase()];
        if (pokemon) {
            resolve(pokemon);
        } else {
            reject('No se encontro ese pokemon, capturar en el futuro!');
        }
    })
};

obtenerPokemon('pikachu')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
        console.log(pokemonEncontrado);
        console.log('Nombre', pokemonEncontrado.nombre);
        console.log('Tipo', pokemonEncontrado.tipo);
        console.log('Ataque', pokemonEncontrado.ataque);
        console.log('Color', pokemonEncontrado.color);
        console.log('Evoluciones', pokemonEncontrado.evoluciones);
        
    })
    .catch((error) => {
        console.log(error);
    });

    obtenerPokemon('bulbasaur')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
        console.log(pokemonEncontrado);
        console.log('Nombre', pokemonEncontrado.nombre);
        console.log('Tipo', pokemonEncontrado.tipo);
        console.log('Ataque', pokemonEncontrado.ataque);
        console.log('Color', pokemonEncontrado.color);
        console.log('Evoluciones', pokemonEncontrado.evoluciones);
        
    })
    .catch((error) => {
        console.log(error);
    });
    obtenerPokemon('chikorita')
    .then((pokemonEncontrado) => {
        console.log('Si lo encontre');
        console.log(pokemonEncontrado);
        console.log('Nombre', pokemonEncontrado.nombre);
        console.log('Tipo', pokemonEncontrado.tipo);
        console.log('Ataque', pokemonEncontrado.ataque);
        console.log('Color', pokemonEncontrado.color);
        console.log('Evoluciones', pokemonEncontrado.evoluciones);
        
    })
    .catch((error) => {
        console.log(error);
    });