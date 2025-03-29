import { Aluno } from "./Aluno";
import { Avaliacao } from "./Avaliacao";
import { Equipamento } from "./Equipamento";
import { Exercicio } from "./Exercicio";
import { Instrutor } from "./Instrutor";
import { Treino } from "./Treino";

const instrutor1 = new Instrutor("Maria", "maria123@uol.com", "Musculação", "RS342131")
const aluno1 = new Aluno("Lucas", "lucascesar@gmail.com", 17, 78, 1.72, "09/11/2001")
const avaliacao1 = new Avaliacao(aluno1, "11/11/2001", aluno1.getPeso(), aluno1.getAltura(), aluno1.calcularIMC(), "O aluno faltou recentemente.")

const equipamento1 = new Equipamento("Leg Press", "Treina as pernas", false)
console.log(`Disponibilidade do ${equipamento1.getNome()}: ${equipamento1.verificarDisponibilidade()}`)

console.log("================ TREINO 1 ================")
const exercicio1 = new Exercicio("Flexão", 4, 5)
const exercicio2 = new Exercicio("Abdominal", 2, 6)
const treino1 = new Treino(aluno1, instrutor1, [exercicio1, exercicio2], "10/11/2001")
console.table(treino1.getExercicios())


console.log("================ TREINO 1 ================")
const exercicio3 = new Exercicio("Agachamento", 1, 12)
const exercicio4 = new Exercicio("Supino", 2, 25)
const treino2 = new Treino(aluno1, instrutor1, [exercicio3, exercicio4], "12/11/2001")
console.table(treino2.getExercicios())




console.log(`\n================ INFORMAÇÕES DE ${aluno1.getNome()} ================`)
aluno1.exibirInformacoes()
console.log(`IMC: ${avaliacao1.calcularIMC()}`)
console.log(`Frequencia de Presença: ${aluno1.getFreqPresenca()}`)