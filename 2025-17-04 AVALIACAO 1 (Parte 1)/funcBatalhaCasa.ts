const rs = require('readline-sync')

import { Casa } from "./Casa";
import { CriaturaMagica } from "./CriaturaMagica";
import { Feitico } from "./Feitico";
import { Guardiao } from "./Guardiao";
import { Misc } from "./Misc";

export function batalhaCasaIntro() {
    while (true) {
        console.clear()
        console.log("================== BATALHA DE CASA ==================")
        console.log("Um inimigo extremamente poderoso acaba de chegar! É necessário juntar todos os feiticeiros de uma Casa para derrota-lo.\n")

        const casas = Casa.getAll()
        for (let i=0; i < casas.length; i++) {
            const casa = casas[i]
            console.log(`${i+1}. ${casa.getNome()}`)
        }
        console.log("0. Voltar ao Menu Principal")

        const opcao = rs.questionInt("\nEscolha uma Casa para o subjulgar: ")
        if (opcao == 0) {
            return 
        } else if (opcao >= 1 && opcao < casas.length) {
            const inimigo:Guardiao = Misc.retornarElementosAleatorios(Guardiao.getAll(), 1)
            batalhaCasa(casas[opcao-1], inimigo)
            return
        }
    }
}

import { Bruxo } from "./Bruxo";
function batalhaCasa(casa:Casa, inimigo:CriaturaMagica) {
    let inimigoHP:number = inimigo.getHP()
    let casaHP:number = 800;    // Toda Casa, por padrão, tem um HP mínimo de 800.
    for (let membro of casa.getMembros()) {
        casaHP = casaHP + membro.getHP()
    }
    const casaHPMax:number = casaHP
    const inimigoHPMax:number = inimigo.getHP()

    console.log("> A batalha começou!\n")

    let rodada = 1;
    while (true) {
        console.log(`================== RODADA ${rodada} ==================`)
        console.log(`HP (Casa): ${casaHP}/${casaHPMax}`)
        console.log(`HP (Inimigo): ${inimigoHP}/${inimigoHPMax}\n`)

        // Rodada da Casa
        console.log(`- Turno de ${casa.getNome()}:`)
        for (let membro of casa.getMembros()) {
            let dano:number;
            if (membro instanceof Bruxo) {
                const feiticoAleatorio:Feitico = Misc.retornarElementosAleatorios(membro.getHabilidades(), 1);
                dano = membro.usarMagia(feiticoAleatorio)
                inimigoHP = inimigoHP-dano
            } else {
                dano = membro.usarMagia()
                inimigoHP = inimigoHP-dano
            }
            console.log(`> ${inimigo.getNome()} sofreu ${dano} de dano.\n`)
        }
        if (inimigoHP <= 0) {
            console.log(`\n[✔] ${casa.getNome()} venceu!`)
            break
        }

        // Rodada do Inimigo
        console.log(`- Turno de ${inimigo.getNome()}:`)
        const dano = inimigo.usarMagia()
        casaHP = casaHP - dano
        console.log(`> ${casa.getNome()} sofreu ${dano} de dano.\n`)
        if (casaHP <= 0) {
            console.log(`[✗] ${casa.getNome()} perdeu!`)
            break
        }
        rodada++
    }
    rs.question("\nPressione Enter para continuar...")
    return
}

