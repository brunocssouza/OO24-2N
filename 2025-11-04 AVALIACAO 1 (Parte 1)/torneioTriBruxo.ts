import { Misc } from "./Misc";
import { Feitico } from "./Feitico";
import { CriaturaMagica } from "./CriaturaMagica";
import { Bruxo } from "./Bruxo";
import "./Fênix";
import "./Dragao";
import "./Sereia";
import "./Unicórnio";
import "./Guardiao"

function torneioTriBruxo(participantes:CriaturaMagica[]) {
    console.log("=========== BEM-VINDO AO TORNEIO TRIBRUXO ==========");
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
    console.log(`O ganhador do torneio foi ${ganhador[0].getNome()} com ${ganhador[1]} de dano total!\n`)
}

torneioTriBruxo(CriaturaMagica.getAll())
