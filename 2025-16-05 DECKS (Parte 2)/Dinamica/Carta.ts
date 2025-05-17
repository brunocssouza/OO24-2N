export class Carta {
    private possiveisCores:string[] = ["Azul", "Amarelo", "Verde", "Vermelho"];
    private cor:string;

    private possiveisValores:string[] = [(Math.floor(Math.random() * 10)).toString(), "Comprar2", "Comprar4", "Inverter", "Bloquear"];
    private valor:string;

    constructor() {
        this.valor = this.possiveisValores[Math.floor(Math.random() * this.possiveisCores.length)];
        if (this.valor == "Comprar4") {
            this.cor = "Preto";
        } else {
            this.cor = this.possiveisCores[Math.floor(Math.random() * this.possiveisCores.length)];
        }
    }
}
