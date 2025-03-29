import { Aluno } from "./Aluno";
import { Avaliacao } from "./Avaliacao";
import { Equipamento } from "./Equipamento";
import { Exercicio } from "./Exercicio";
import { Instrutor } from "./Instrutor";
import { Treino } from "./Treino";
import { Usuario } from "./Usuario";

const usuario1 = new Usuario("José", "josedascove@gmail.com")

const instrutor1 = new Instrutor("Maria", "maria123@uol.com", "Musculação", "RS342131")

const aluno1 = new Aluno("Lucas", "lucascesar@gmail.com", 17, 78, 1.72)

const avaliacao1 = new Avaliacao(aluno1, 09112001, aluno1.getPeso(), aluno1.getAltura(), aluno1.calcularIMC(), "O aluno falta multas sessões.")

const exercicio1 = new Exercicio("Flexão", 4, 5)
const exercicio2 = new Exercicio("Abdominal", 2, 6)
const exercicio3 = new Exercicio("Agachamento", 1, 12)
const exercicio4 = new Exercicio("Supino", 2, 25)

const treino1 = new Treino(aluno1, instrutor1, [exercicio1, exercicio2])


const equipamento1 = new Equipamento("Leg Press", "Treina as pernas", false)

usuario1.exibirInformacoes()
console.log(avaliacao1.calcularIMC())
console.log(treino1.getAluno())
console.log(equipamento1.verificarDisponibilidade())