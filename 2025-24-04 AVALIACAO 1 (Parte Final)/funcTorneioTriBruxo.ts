import { Misc } from "./Misc";
import { Feitico } from "./Feitico";
import { CriaturaMagica } from "./CriaturaMagica";
import { Guardiao } from "./CriaturaMagicaGuardiao";
import "./CriaturaMagicaGuardiaoAracnideo";
import "./CriaturaMagicaGuardiaoReptil";
import { Bruxo } from "./CriaturaMagicaBruxo";
import "./CriaturaMagicaFênix";
import "./CriaturaMagicaDragao";
import "./CriaturaMagicaSereia";
import "./CriaturaMagicaUnicórnio";


const rs = require('readline-sync')
export function torneioTriBruxoIntro() {
    while (true) {
        console.clear()
        console.log("================== TORNEIO TRI-BRUXO ==================")
        console.log("Bem-vindos ao Torneio Tri-Bruxo! O ser que ter o mais alto dano registrado ao final vence esta disputa mágica.\n")        
        console.log("Dificuldades:")
        console.log("1. Fácil (somente Bruxos) \n2. Intermediário (Bruxos e Criaturas) \n3. Difícil (Bruxos, Criaturas e Guardiões)")
        console.log("0. Voltar ao Menu Principal")

        const opcao:number = rs.questionInt("\nEscolha sua dificuldade: ")
        const criaturas:CriaturaMagica[] = CriaturaMagica.getAll()
        switch(opcao) {
            case 0:
                return;

            case 1:
                const apenasBruxos:Bruxo[] = criaturas.filter(c => c instanceof Bruxo);
                torneioTriBruxo(apenasBruxos);
                return

            case 2:
                const bruxos_e_criaturas:CriaturaMagica[] = criaturas.filter(c => !(c instanceof Guardiao));
                torneioTriBruxo(bruxos_e_criaturas);
                return
                
            case 3:
                torneioTriBruxo(criaturas)
                return
        }
    }
}

function torneioTriBruxo(participantes:CriaturaMagica[]) {

    console.log("=========== TORNEIO TRIBRUXO COMEÇOU! ===========");
    console.log("Participantes:", participantes.length)
    for (let participante of participantes) {
        console.log("-", participante.getNome())
    }

    let ganhador:[CriaturaMagica, number] = [participantes[0], 0]; // Tive que instanciar temporariamente com algum dado.
    let jaParticiparam:CriaturaMagica[] = []    // Guarda os participantes que já batalharam, para nao se repetirem.
    for (let i:number=1; i <= participantes.length; i++) {
        console.log(`\n==================== RODADA ${i} ======================`)

        // Participante
        let participante:CriaturaMagica;
        do {
            participante = participantes[Math.floor(Math.random() * participantes.length)]
        } while (jaParticiparam.includes(participante));
        jaParticiparam.push(participante)

        console.log(`Participante: ${participante.getNome()}`, '\n')
        
        // Verifica, de duas diferentes formas dependendo de sua classe originária, a quantidade de dano do atual participante.
        let dano:number;
        if (participante instanceof Bruxo) {
            const feiticoAleatorio:Feitico = Misc.retornarElementosAleatorios(participante.getHabilidades(), 1);
            dano = participante.usarMagia(feiticoAleatorio);
            console.log(`\nDano da magia: ${feiticoAleatorio.getDano()}`)
            console.log(`Dano-base do Bruxo: ${participante.getPoderMagico()}`)
        } else {
            dano = participante.usarMagia()
        }
        console.log(`> Dano total: ${dano}`)

        // Se o atual participante tiver mais dano que o número armazenado no índice 1 de 'ganhador', o substitui.
        if (dano >= ganhador[1]) {
            ganhador[0] = participante
            ganhador[1] = dano
        }    
    }

    console.log("\n============== FIM DO TORNEIO TRIBRUXO =============");
    console.log(`O ganhador do torneio foi ${ganhador[0].getNome()} com ${ganhador[1]} de dano total!`)

    rs.question("\nPressione Enter para continuar...")
}
