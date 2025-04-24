import { diretor } from "./Diretor"

const rs = require('readline-sync')
export function consultarDiretorIntro() {
    while (true) {
        console.clear()
        console.log("================== CONSULTE O DIRETOR ==================")
        console.log("Dumbledore é o sábio guardião dos conhecimentos mágicos e possui um grimório de feitiços com suas descrições.\n")

        console.log("1. Consultar um feitiço")
        console.log("0. Voltar ao Menu Principal")

        const opcao:number = rs.questionInt("\nEscolha uma das opcoes: ")
        if (opcao == 0) {
            return 
        } else if (opcao == 1) {
            consultarDiretor()
            return
        }
    }
}

function consultarDiretor() {
    console.log("================== BUSCAR FEITIÇO ==================")
        console.log("Digite o nome de um feitiço para receber informações sobre o mesmo.\n")

        const feitico:string = rs.question("Nome do feitico: ")
        diretor.consultarFeitiço(feitico)
        
        rs.question("\nPressione Enter para continuar...")
}