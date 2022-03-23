var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function name(params) {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto.marca);

miAuto.detalleDelAuto();