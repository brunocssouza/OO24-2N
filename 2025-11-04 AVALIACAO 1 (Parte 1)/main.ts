import { Bruxo } from "./Bruxo";
import { Feitico } from "./Feitico";
import { CriaturaMagica } from "./CriaturaMagica";

const feitiço1 = new Feitico("Expelliarmus", "Desarma o oponente", 30);
const feitiço2 = new Feitico("Stupefy", "Atordoa o oponente", 40);
const feitiço3 = new Feitico("Avada Kedavra", "Morte instantânea", 500);
const feitiço4 = new Feitico("Crucio", "Causa dor intensa", 70);

const harry = new Bruxo(
    "Harry Potter",
    "Humano",
    "",
    "Azevinho e pena de fênix",
    "Grifinória",
    [feitiço1, feitiço2],
    50
);

const voldemort = new Bruxo(
    "Lord Voldemort",
    "Humano",
    "",
    "Teixo e pena de fênix",
    "Sonserina",
    [feitiço3, feitiço4],
    80
);


function torneioTriBruxo(participantes:CriaturaMagica[]) {
    for (let i=0; i < 5; i++) {
        console.log(`============ RODADA ${i+1} ============`)

        // Partipante 1
        const participante1 = participantes[Math.floor(Math.random() * participantes.length)]
        console.log(`Participante 1: ${participante1.getNome()}`)

        // Participante 2
        let participante2:CriaturaMagica;
        do {
            participante2 = participantes[Math.floor(Math.random() * participantes.length)]
        } while (participante2 == participante1)
        console.log(`Participante 2: ${participante2.getNome()}`, '\n')
        
        // Armazenando os participantes selecionados em um array
        const participantes_da_rodada:CriaturaMagica[] = [participante1, participante2]

        // Disputa de dano
        let ganhador:[CriaturaMagica, number] = [participantes_da_rodada[0], 0]; // Tive que instanciar temporariamente com algum dado.
        for (let i=0; i < participantes_da_rodada.length; i++) {

            // Verifica, de diferentes formas dependendo de sua classe originária, a quantidade de dano do atual participante.
            const participante = participantes_da_rodada[i]
            let dano:number;
            if (participante instanceof Bruxo) {
                const habilidades = participante.getHabilidades();
                const feiticoAleatorio = habilidades[Math.floor(Math.random() * habilidades.length)];
                dano = participante.usarMagia(feiticoAleatorio);
    
            } else {
                dano = participante.usarMagia(participante.getPoder())
            }

            // Se o atual participante tiver mais dano que o número armazenado no índice 1 de 'ganhador', o substitui.
            if (dano > ganhador[1]) {
                ganhador[0] = participante
                ganhador[1] = dano
            }
        }
        console.log(`\nO ganhador da rodada foi ${ganhador[0].getNome()} com ${ganhador[1]} de dano total!`, '\n')
    }
}

torneioTriBruxo([harry, voldemort])
