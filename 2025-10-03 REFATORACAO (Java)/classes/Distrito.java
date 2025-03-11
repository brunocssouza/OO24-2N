package JogosVorazes.classes;

public class Distrito {
    private String nome;
    private String[] recursos;
    private int populacao;

    public Distrito(String nome, String[] recursos, int populacao) {
        this.nome = nome;
        this.recursos = recursos;
        this.populacao = populacao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String[] getRecursos() {
        return recursos;
    }

    public void setRecursos(String[] recursos) {
        this.recursos = recursos;
    }

    public int getPopulacao() {
        return populacao;
    }

    public void setPopulacao(int populacao) {
        this.populacao = populacao;
    }
}
