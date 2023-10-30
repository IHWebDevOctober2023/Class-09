// FETCH API

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((data)=>{
         return data.json();
    })
    .then((json)=>{
        console.log(json);
    })
    .catch((error)=>{
        console.log(error);
    })