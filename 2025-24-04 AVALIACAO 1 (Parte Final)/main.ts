import { batalhaCasaIntro } from "./funcBatalhaCasa";
import { consultarDiretorIntro } from "./funcConsultarDiretor";
import { explorarHogwartsIntro } from "./funcExplorarHogwarts";
import { torneioTriBruxoIntro } from "./funcTorneioTriBruxo";


const rs = require("readline-sync")
function menuInterativo() {
    while (true) {
        console.clear()
        console.log("================ Aventura por Hogwarts ================")
        console.log("1. Explorar Hogwarts"); 
        console.log("2. Batalha de Casa"); 
        console.log("3. Participar do torneio TriBruxo"); 
        console.log("4. Consultar o Diretor");
        console.log("0. Sair", '\n');
        const opcao:number = rs.questionInt("Escolha sua propria aventura: ")
        switch(opcao) {
            case 0:
                console.log("Saindo...")
                return;
            case 1:
                explorarHogwartsIntro()
                break
            case 2:
                batalhaCasaIntro()
                break
            case 3:
                torneioTriBruxoIntro()
                break
            case 4:
                consultarDiretorIntro()
                break
        }   
    }
}

menuInterativo()