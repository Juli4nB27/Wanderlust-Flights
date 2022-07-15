
const resultadoJSON = document.getElementById('resultado');


fetch('/json/vuelos.json')
    .then(res => res.json())
    .then(resultado = (vuelo) => {
    for(const vuelos of vuelo){
        const {url} = vuelos;
        console.log(vuelos);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = 
        `<img src="${url}" alt="">`
        ;
        resultadoJSON.append(card);
    }
})
.catch();



