// var miAuto = {
//     marca: "chevrolet",
//     modelo: "onix active",
//     annio: 2020,
//     detalleDelAuto: function(){
//         console.log(`auto ${this.modelo} ${this.annio}`);
//     }
// };

// miAuto.detalleDelAuto();

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto1 = new auto("Tesla", "Model 3", 2021);


var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 300 },
    { nombre: "Celu", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "teclado", costo: 500 },
    { nombre: "audifonos", costo: 200 },
];

//metodo 1
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//articulosFiltrados

//metodo map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});