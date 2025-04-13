import { Bruxo } from "./Bruxo";
import { Feitico } from "./Feitico";
import { CriaturaMagica } from "./CriaturaMagica";
import { Diretor } from "./Diretor";

const feitiço1:Feitico = new Feitico("Expelliarmus", "Desarma o oponente", 30);
const feitiço2:Feitico = new Feitico("Stupefy", "Atordoa o oponente", 40);
const feitiço3:Feitico = new Feitico("Avada Kedavra", "Morte instantânea", 500);
const feitiço4:Feitico = new Feitico("Crucio", "Causa dor intensa", 70);

const harry:Bruxo = new Bruxo(
    "Harry Potter",
    "Humano",
    "",
    "Azevinho e pena de fênix",
    "Grifinória",
    [feitiço1, feitiço2],
    50
);

const voldemort:Bruxo = new Bruxo(
    "Lord Voldemort",
    "Humano",
    "",
    "Teixo e pena de fênix",
    "Sonserina",
    [feitiço3, feitiço4],
    80
);

const diretor:Diretor = new Diretor("Zé Pequeno dos Grimório")
diretor.consultarFeitiço("Stupefy")

function torneioTriBruxo(participantes:CriaturaMagica[]) {
    console.log("=========== BEM-VINDO AO TORNEIO TRIBRUXO ==========");
    console.log("Participantes:")
    for (let participante of participantes) {
        console.log(participante.getNome())
    }
    

    let ganhador:[CriaturaMagica, number] = [participantes[0], 0]; // Tive que instanciar temporariamente com algum dado.
    let jaParticiparam:CriaturaMagica[] = []
    for (let i:number=1; i <= participantes.length; i++) {
        console.log(`\n==================== RODADA ${i} ======================`)

        // Participante
        let participante:CriaturaMagica;
        do {
            participante = participantes[Math.floor(Math.random() * participantes.length)]
        } while (jaParticiparam.includes(participante))
        console.log(`Participante: ${participante.getNome()}`, '\n')
        
        // Verifica, de diferentes formas dependendo de sua classe originária, a quantidade de dano do atual participante.
        let dano:number;
        if (participante instanceof Bruxo) {
            const habilidades:Feitico[] = participante.getHabilidades();
            const feiticoAleatorio:Feitico = habilidades[Math.floor(Math.random() * habilidades.length)];
            dano = participante.usarMagia(feiticoAleatorio);

        } else {
            dano = participante.usarMagia()
        }

        // Se o atual participante tiver mais dano que o número armazenado no índice 1 de 'ganhador', o substitui.
        if (dano >= ganhador[1]) {
            ganhador[0] = participante
            ganhador[1] = dano
        }
        
    }

    console.log(`\nO ganhador do torneio foi ${ganhador[0].getNome()} com ${ganhador[1]} de dano total!`)
    console.log("============== FIM DO TORNEIO TRIBRUXO =============\n");
}

torneioTriBruxo([harry, voldemort])
