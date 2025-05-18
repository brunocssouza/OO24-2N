export class Carta {
    private cor:string;  
    private valor:string;

    constructor(setup:boolean = false) {
        const possiveisCores:string[] = ["Azul", "Amarelo", "Verde", "Vermelho"];
        let possiveisValores:string[]
        if (setup) {
            possiveisValores = [(Math.floor(Math.random() * 10)).toString(), "Comprar2", "Inverter", "Bloquear"];
        } else {
            possiveisValores = [(Math.floor(Math.random() * 10)).toString(), "Comprar2", "Comprar4", "Inverter", "Bloquear"];
        }

        this.valor = possiveisValores[Math.floor(Math.random() * possiveisCores.length)];
        if (this.valor == "Comprar4") {
            this.cor = "Preto";
        } else {
            this.cor = possiveisCores[Math.floor(Math.random() * possiveisCores.length)];
        }
    }

    getCor() {
        return this.cor
    }
    getValor() {
        return this.valor
    }

    setCor(cor:string) {
        this.cor = cor
    }
}
