
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
            //console.log(res);
        }
    }).then((data) => {   
        console.log(data);
        let pokeImg = data.sprites.front_default;
        
        pokeImage(pokeImg);
        
        
        //console.log(document.getElementById('movimientos').getBoundingClientRect())
        writer2(data.moves.map(a=>a.move.name),'movimientos');
        writer(data.abilities.map(a=>a.ability.name),'habilidades');
        //comp_resize('movimientos',data.moves.map(a=>a.move.name))
        selector_de_tipos(data.types.map(a=>a.type.name));


        

    });
}


const comp_resize=(contenedor,a_escribir)=>{
    console.log(document.getElementById(contenedor).offsetHeight)

    writer(a_escribir,contenedor);
}


const selector_de_tipos =(cadena_tipos)=>{
    let tipos=["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"];
    for(let i=0;i<18;i++){
        document.getElementById(tipos[i]).style.backgroundColor="white";
        document.getElementById(tipos[i]).style.filter="grayscale(100%)";
        //document.getElementById(tipos[i]).style.filter="opacity(25%)";
        //document.getElementById(tipos[i]).style.filter="saturate(5%)";
    }
    
    

    for(let i=0;i<cadena_tipos.length;i++){
        document.getElementById(cadena_tipos[i]).style.backgroundColor=" #00AAF7";
        document.getElementById(cadena_tipos[i]).style.filter="grayscale(0%)"
    }
         
}


const writer = (info,identificador_de_contenedor) => {

    document.getElementById(identificador_de_contenedor).innerHTML=info;
}
const writer2 = (info,identificador_de_contenedor) => {


    document.getElementById(identificador_de_contenedor).innerHTML=info.join('<br>');
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}