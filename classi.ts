class Auto{
    private marca:string;
    private tipo:string;

    constructor(_marca:string, _tipo:string)
    {
        this.marca = _marca;
        this.tipo = _tipo;
    }

    public getMarca(): string{
        return this.marca;
    };

    public getTipo(): string{
        return this.tipo;
    };

    public setMarca(marca:string): void{
        this.marca = marca;
    };

    public setTipo(tipo:string): void{
        this.tipo = tipo;
    };

    public getInfo(): void{
        console.log("Marca: " + this.marca + " Tipo: " + this.tipo);
    }

};