import { Aluno } from "./Aluno";
import { Avaliacao } from "./Avaliacao";
import { Equipamento } from "./Equipamento";
import { Exercicio } from "./Exercicio";
import { Instrutor } from "./Instrutor";
import { Treino } from "./Treino";

const instrutor1:Instrutor = new Instrutor("Maria", "maria123@uol.com", "Musculação", "RS342131")
const aluno1:Aluno = new Aluno("Lucas", "lucascesar@gmail.com", 17, 78, 1.72, "09/11/2001")
const avaliacao1:Avaliacao = new Avaliacao(aluno1, "09/11/2001", aluno1.getPeso(), aluno1.getAltura(), aluno1.calcularIMC(), "Trabalhar os braços.")

const equipamento1:Equipamento = new Equipamento("Leg Press", "Treina as pernas", false)
console.log(`Disponibilidade do ${equipamento1.getNome()}: ${equipamento1.verificarDisponibilidade()}`)

console.log("================ TREINO 1 ================")
const exercicio1:Exercicio = new Exercicio("Flexão", 4, 5)
const exercicio2:Exercicio = new Exercicio("Abdominal", 2, 6)
const treino1:Treino = new Treino(aluno1, instrutor1, [exercicio1, exercicio2], "10/11/2001")
console.table(treino1.getExercicios())


console.log("================ TREINO 1 ================")
const exercicio3:Exercicio = new Exercicio("Agachamento", 1, 12)
const exercicio4:Exercicio = new Exercicio("Supino", 2, 25)
const treino2:Treino = new Treino(aluno1, instrutor1, [exercicio3, exercicio4], "12/11/2001")
console.table(treino2.getExercicios())




console.log(`\n================ INFORMAÇÕES DO ALUNO 1 ================`)
aluno1.exibirInformacoes()
console.log(`Frequencia de Presença: ${aluno1.getFrequencia()}`)

console.log(`\n================ RELATÓRIO DE AVALIAÇÃO DO ALUNO 1 ================`)
console.log(`${avaliacao1.gerarRelatorio()}`, '\n')
