var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function name(params) {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Honda","Civic",2022);
autoNuevo

var autoNuevo2 = new auto("Acura","TLX",2022);
autoNuevo2

var autoNuevo3 = new auto("Tesla", "Model X", 2020);
autoNuevo3