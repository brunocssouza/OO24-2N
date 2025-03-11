package JogosVorazes.classes;

public class Organizador {
    private String nome;
    private Distrito[] distritos;

    public Organizador(String nome, Distrito[] distritos) {
        this.nome = nome;
        this.distritos = distritos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Distrito[] getDistritos() {
        return distritos;
    }

    public void setDistritos(Distrito[] distritos) {
        this.distritos = distritos;
    }

    public String exibirDistritos() {
        String[] distritosNomes = new String[distritos.length];
        for (int i=0; i < this.distritos.length; i++) {
            distritosNomes[i] = distritos[i].getNome();
        }
        return String.join(", ", distritosNomes);
    }

    public void liberarAnimais() {
        int indexAleatorio_Distrito = (int) (Math.random() * this.distritos.length);
        System.out.println("O Organizador " + this.nome + " soltou animais no Distrito " + this.distritos[indexAleatorio_Distrito].getNome() + "! Corra!");
    }

    public void criarDesastre() {
        String[] desastres = {"Chuva Ácida", "Terremoto", "Fumaça Tóxica", "Lanças de Fogo"};
        int indexAleatorio_Desastre = (int) (Math.random() * desastres.length);
        int indexAleatorio_Distrito = (int) (Math.random() * this.distritos.length);
        System.out.println("O Organizador " + this.nome + " liberou " + desastres[indexAleatorio_Desastre] + " no Distrito " + this.distritos[indexAleatorio_Distrito].getNome() + "!");
    }
}
