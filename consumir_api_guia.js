
//Requerimos el modulo node fetch
const fetch = require('node-fetch');

//Consumir la api guia
const consumirPeticion = async()=>{
    const req = await fetch("https://api.coordinadora.com/cm-model-testing/api/v1/talentos/");
    const data = await req.json();
    console.log(JSON.stringify(data));
}

consumirPeticion();