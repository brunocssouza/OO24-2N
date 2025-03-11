import JogosVorazes.classes.Distrito;
import JogosVorazes.classes.Habilidade;
import JogosVorazes.classes.Organizador;
import JogosVorazes.classes.Tributo;

public class Main {
    public static void main(String[] args) {

        // Inicialização de instancias de classe Distrito
        Distrito distrito1 = new Distrito("1", new String[]{"Ferro", "Ouro"}, 30);
        Distrito distrito2 = new Distrito("2", new String[]{"Mel"}, 45);
        Distrito distrito3 = new Distrito("3", new String[]{"Grãos"}, 50);

        // Inicialização de instancias de classe Habilidade
        Habilidade agilidade = new Habilidade("Agilidade");
        Habilidade atirador_de_facas = new Habilidade("Atirador de facas");
        Habilidade forca = new Habilidade("Forca");
        Habilidade arco_e_flecha = new Habilidade("Arco e flecha");
        Habilidade manipulacao = new Habilidade("Manipulacao");
        Habilidade furtividade = new Habilidade("Furtividade");

        // Inicialização de instancias de classe Tributo
        Tributo jose = new Tributo("José", 98, distrito1, "Escondeu irmão no dia da seleção", new Habilidade[]{agilidade, atirador_de_facas}, 10, 40);
        Tributo paola = new Tributo("Paola", 75, distrito2, "Roubou a padaria do José", new Habilidade[]{forca, arco_e_flecha}, 2, 24);
        Tributo arthur = new Tributo("Arthur", 70, distrito3, "Espião", new Habilidade[]{manipulacao, furtividade}, 4, 32);

        // Inicialização de instancia de classe Organizador
        Organizador alexander = new Organizador("Alexander", new Distrito[]{distrito1, distrito2, distrito3});

        System.out.println("===================== [DISTRITOS] =====================");
        Distrito[] distritos = {distrito1, distrito2, distrito3};
        for (Distrito distrito : distritos) {
            System.out.println("====== Informações do Distrito " + distrito.getNome() + " ======");
            System.out.println("População: " + distrito.getPopulacao());
            System.out.println("Produção: " + String.join(", ", distrito.getRecursos()) + "\n");
        }

        System.out.println("===================== [TRIBUTOS] =====================");
        Tributo[] tributos = {jose, paola, arthur};
        for (Tributo tributo : tributos) {
            System.out.println("====== Informações de " + tributo.getNome() + " ======");
            System.out.println("Saúde: " + tributo.getSaude());
            System.out.println("Distrito: " + tributo.getDistrito().getNome());
            System.out.println("Segredo: " + tributo.getSegredo());
            System.out.println("Habilidades: " + tributo.exibirHabilidades());
            System.out.println("Armadura: " + tributo.getArmadura());
            System.out.println("Resistência " + tributo.getResistencia() + "\n");
        }

        jose.sofrerDano(150);

        System.out.println("===================== [ORGANIZADOR] =====================");
        System.out.println("====== Informações de " + alexander.getNome() + " ======");
        System.out.println("Rege os Distritos: " + alexander.exibirDistritos() + "\n");

        alexander.liberarAnimais();
        alexander.criarDesastre();

    }
}