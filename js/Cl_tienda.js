export default class Cl_tienda {
    constructor() {
        this.contArticulos = 0;
        this.contMayores = 0;
        this.acumPrecios = 0;
    }
    procesarArticulos(a){
        this.contArticulos++;
        if(a.precio > 65){
            this.contMayores++;
        }
        this.acumPrecios += a.precio;
    }
    calcPromedio(){
        return this.acumPrecios / this.contArticulos;
    }
}