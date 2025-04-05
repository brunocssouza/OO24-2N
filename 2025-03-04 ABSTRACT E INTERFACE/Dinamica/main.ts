import { Cacador } from "./Cacador";
import { Cura } from "./Cura";
import { Ataque } from "./Ataque";
import { Magia } from "./Magia";
import { Monstro } from "./Monstro";
import { Habilidade } from "./Habilidade";
import { Misc } from "./Misc";

const rs = require('readline-sync')

// Habilidades (Ataque, Magia e Cura)
const habilidades = [];
habilidades.push(new Ataque('Mutilação', 'Ofensivo', 2138, 'Mirar nos pontos vitais do alvo, inflingindo dano crítico'));
habilidades.push(new Ataque('Decapitação Sombria', 'Ofensivo', 945, 'Golpear rapidamente e preciso visando a cabeça do inimigo, envolto em energia sombria'));
habilidades.push(new Ataque('Rajada de Golpes Fantasmas', 'Ofensivo', 563, 'Executar múltiplos ataques em alta velocidade, deixando apenas rastros ilusórios'));
habilidades.push(new Ataque('Ataque de Energia', 'Ofensivo', 3825, 'Lançar diversos ataques explosivos em uma grande área'));

habilidades.push(new Magia('Dragão de Fogo', 'Ofensivo', 2052, 'Criar uma entidade de fogo que se assemelha a um dragão, transformando em cinzas qualquer alvo por perto'));
habilidades.push(new Magia('Autoridade do Monarca', 'Ofensivo', 94, 'Controlar e mover objetos via telecinese'));
habilidades.push(new Magia('Chamas Negras do Soberano', 'Ofensivo', 1890, 'Invocar chamas negras que consomem tudo ao redor, deixando apenas sombras'));
habilidades.push(new Magia('Portão das Sombras', 'Ofensivo', 1125, 'Abrir um portal de onde surgem soldados sombrios prontos para atacar'));
habilidades.push(new Magia('Domínio do Rei Demônio', 'Ofensivo', 2340, 'Criar um campo de pressão que paralisa e danifica todos os inimigos ao redor'));

habilidades.push(new Cura('Vitae', 'Defensivo', 1395, 'Tratar ferimentos e restaurar vitalidade'));
habilidades.push(new Cura('Renovação Sombria', 'Defensivo', 3015, 'Utilizar energia sombria para regenerar ferimentos rapidamente'));

// Caçadores
const cacador1 = new Cacador('José das Couve', 67, 6400, Misc.retornarElementosAleatorios(habilidades, 5))
const cacador2 = new Cacador('Pedro da Farinha', 19, 2900, Misc.retornarElementosAleatorios(habilidades, 3))

// =========== DINÂMICA ============
cacador1.exibirDetalhes()
cacador1.equiparHabilidade(habilidades[2])
cacador1.usarHabilidadeEquipada(cacador2)

rs.question("\nIr pra o desafio...")
console.clear()

















// ============ DESAFIO ============
// Monstros
const monstros:Monstro[] = [];
monstros.push(new Monstro('Orc Superior', 7700, Misc.retornarElementosAleatorios(habilidades, 5)));
monstros.push(new Monstro('Orc Inferior', 5100, Misc.retornarElementosAleatorios(habilidades, 3)));
monstros.push(new Monstro('Aranha Venenosa Gigante', 6400, Misc.retornarElementosAleatorios(habilidades, 4)));
monstros.push(new Monstro('Lobisomem Selvagem', 7300, Misc.retornarElementosAleatorios(habilidades, 5)));
monstros.push(new Monstro('Formiga Branca', 8600, Misc.retornarElementosAleatorios(habilidades, 4)));
monstros.push(new Monstro('Lorde Vampiro', 5700, Misc.retornarElementosAleatorios(habilidades, 3)));
monstros.push(new Monstro('Thomas André', 9990, Misc.retornarElementosAleatorios(habilidades, 6)));
monstros.push(new Monstro('Antares', 11000, Misc.retornarElementosAleatorios(habilidades, 6)));

// Simulação
function simular(cacador:Cacador, qtdeBatalhas:number) {

    function equiparHabilidadeAleatoria(alvoRecebido:Monstro|Cacador) {
        let habilidadeAleatoria:Habilidade;
        do {
            habilidadeAleatoria = Misc.retornarElementosAleatorios(alvoRecebido.getHabilidades(), 1)
        } while (habilidadeAleatoria == alvoRecebido.getHabilidadeEquipada())

        alvoRecebido.equiparHabilidade(habilidadeAleatoria)
    }

    let pontuacao = 0;
    let qtdeVitorias = 0;
    let qtdeDerrotas = 0;
    let qtdeEmpates = 0;
    let ultimoMonstroBatalhado;
    for (let i=1; i <= qtdeBatalhas; i++) {

        let monstro:Monstro = monstros[Math.floor(Math.random() * monstros.length)]; // Seleciona um monstro aleatório
        while(monstro == ultimoMonstroBatalhado) {                                   // Roleta o monstro aleatório selecionado caso ele já tenha sido batalhado recentemente.
            monstro = monstros[Math.floor(Math.random() * monstros.length)];
        }
        ultimoMonstroBatalhado = monstro

        cacador.exibirDetalhes()
        monstro.exibirDetalhes()

        let rodada = 1
        while (rodada <= 20) {  // Infinitos turnos, onde ambos participantes lançam sua habilidade aleatória equipada, até que um deles tenha seu HP zerado.
            console.log(`\n============= MONSTRO ${i} - RODADA ${rodada} =============`)
            console.log(`Caçador (${cacador.getNome()}): ${cacador.getHPAtual()}/${cacador.getHPMaximo()}`)
            console.log(`Monstro (${monstro.getNome()}): ${monstro.getHPAtual()}/${monstro.getHPMaximo()}`)

            // Turno do Caçador
            console.log(`\nÉ a vez de ${cacador.getNome()}...`)
            equiparHabilidadeAleatoria(cacador)
            cacador.usarHabilidadeEquipada(monstro);
            pontuacao+=cacador.getHabilidadeEquipada().getValor()
            if (monstro.getHPAtual() <= 0) {
                console.log(`[✔] O caçador ${cacador.getNome()} VENCEU! A vida do monstro ${monstro.getNome()} chegou a zero! \n`)
                qtdeVitorias++
                break
            }
    
            // Turno do Monstro
            console.log(`\nÉ a vez de ${monstro.getNome()}...`)
            equiparHabilidadeAleatoria(monstro)
            monstro.usarHabilidadeEquipada(cacador);
            if (cacador.getHPAtual() <= 0) {
                console.log(`[✗] O caçador ${cacador.getNome()} PERDEU! Seu HP chegou a zero! \n`)
                qtdeDerrotas++
                break
            }

            rodada++
            if (rodada == 20) {
                console.log(`[!!!] A batalha chegou a rodada limite! Um EMPATE ocorreu! `)
                qtdeEmpates++
                break
            }

            
        }
    
        // Reseta a vida dos participantes da batalha.
        monstro.setHPAtual(monstro.getHPMaximo())
        cacador.setHPAtual(cacador.getHPMaximo())
    }

    console.log("============== RELATÓRIO ==============")
    console.log(`Quantidade de vitórias: ${qtdeVitorias} \nQuantidade de derrotas: ${qtdeDerrotas} \nQuantidade de derrotas: ${qtdeEmpates}`)

    const winrate = qtdeVitorias / qtdeBatalhas;
    console.log(`Win rate: ${(winrate * 100).toFixed(2)}% \n`);
    console.log(`Pontuação final: ${Math.floor(pontuacao * winrate)}`);
}

simular(cacador1, 7) // simular(caçador, qtdeBatalhas)
