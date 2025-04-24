import { Feitico } from "./Feitico";
import { Grimorio } from "./Grimorio";

// É implementada a interface Grimorio nessa classe Diretor
export class Diretor implements Grimorio {
    private nome:string
    private static diretor:Diretor

    constructor(nomeRecebido:string) {
        this.nome = nomeRecebido
        Diretor.diretor = this
    }

    static getDiretor():Diretor {
        return Diretor.diretor
    }

    getNome():string {
        return this.nome
    }

    // Recebe uma string como parâmetro e verifica se, dentre todos os feitiços já instanciados, algum possui o atributo de mesmo nome.
    consultarFeitiço(nomeFeitiçoRecebido:string):void {
        console.log(`> Consultando o feitiço ${nomeFeitiçoRecebido} no grimório de ${this.nome}...`)
        let feitiçoEncontrado:Feitico|null = null;
        for (let feitico of Feitico.getAll()) {
            if (feitico.getNome().toLowerCase() == nomeFeitiçoRecebido.toLowerCase().trim()) {
                console.log("✔ Feitiço encontrado.")
                feitiçoEncontrado = feitico
                break
            }
        }
        if (!feitiçoEncontrado) {
            console.log("✗ Feitiço inserido não encontrado.")
        } else {
            return feitiçoEncontrado.mostrarDescricao()
        }
    }
}

// Instâncias
export const diretor:Diretor = new Diretor("Albus Dumbledore")
