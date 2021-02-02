class Dominio {

    constructor(dominio) {
        this.dominio = dominio;
    }

    
}

class Reino extends Dominio {

    constructor(dominio, reino) {
        
        super(dominio);
        this.reino = reino;
    }
}

class Filo extends Reino {

    constructor(dominio,reino,filo){

        super(dominio,reino);
        this.filo = filo;
    }
}

class Clase extends Filo {

    constructor(dominio,reino,filo,clase){

        super(dominio,reino,filo);
        this.clase = clase;
    }
}

class Orden extends Clase {

    constructor(dominio, reino, filo, clase, orden){

        super(dominio, reino, filo, clase);
        this.orden = orden;
    }
}

class Familia extends Orden {

    constructor(dominio, reino, filo, clase, orden, familia){

        super(dominio, reino, filo, clase, orden);
        this.familia = familia;
    }
}

class Genero extends Familia {

    constructor(dominio, reino, filo, clase, orden, familia, genero){

        super(dominio, reino, filo, clase, orden, familia);
        this.genero = genero;
    }
}

class Especie extends Genero {

    constructor(dominio, reino, filo, clase, orden, familia, genero, especie){

        super(dominio, reino, filo, clase, orden, familia, genero);
        this.especie = especie;
    }
    
}
        // Currying
function hacerCurrying(ser){

    return function(dominio){
        return function(reino){
            // Template String
            console.log(`El ser ${ser} es un ${dominio} del Reino de ${reino} `)
        }
    }
}



    // IIFE
(function(f){
    console.log(`Hola ${f} !! Bienvenido a Darwin. El catalogador de especies`);
}("Gentleman Programmers"));



const perro = {
    nombre: "Perro",
    taxonomia:  new Especie("Eukarya","Animalia","Chordata",
                            "Mammalia","Carnívora","Canidae",
                            "Canis","Canis lupus"),
    descripcion: function() {
        return`El${this.nombre} de Filo ${this.taxonomia.filo}`},   
    descripcionClosure: ()=> `Es de Filo ${this.filo} va a ser undefined ------Te dije!!`, 
    
};

const lobo = {
    nombre: "Lobo",
    taxonomia: new Especie("Eukarya","Animalia","Chordata",
                            "Mammalia","Carnívora","Canidae",
                             "Canis","Canis lupus"),
}

const animalAmistoso = function (afirmacion){
    return `El ${perro.nombre} es de Filo ${perro.taxonomia.filo} y este animal  ${afirmacion} mueve la cola cuando ve a su amo`;
}

const funcionDescriptiva = perro.descripcion.bind(lobo);

console.log();
hacerCurrying(perro.nombre)(perro.taxonomia.dominio)(perro.taxonomia.reino);// currying;
console.log(perro.descripcionClosure());//clousure
console.log();
console.log(animalAmistoso.apply(perro,["si"]));// apply 
console.log();
hacerCurrying(lobo.nombre)(lobo.taxonomia.dominio)(lobo.taxonomia.reino);//currying
console.log(perro.descripcion.call(lobo));// call
console.log(funcionDescriptiva());