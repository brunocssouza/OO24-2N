package JogosVorazes.classes;

public class Tributo {
    private String nome;
    private int saude;
    private Distrito distrito;
    private String segredo;
    private Habilidade[] habilidades;
    private int resistencia;
    private int armadura;

    public Tributo(String nome, int saude, Distrito distrito, String segredo, Habilidade[] habilidades, int resistencia, int armadura) {
        this.nome = nome;
        this.saude = saude;
        this.distrito = distrito;
        this.segredo = segredo;
        this.habilidades = habilidades;
        this.resistencia = resistencia;
        this.armadura = armadura;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getSaude() {
        return saude;
    }

    public void setSaude(int saude) {
        this.saude = saude;
    }

    public Distrito getDistrito() {
        return distrito;
    }

    public void setDistrito(Distrito distrito) {
        this.distrito = distrito;
    }

    public String getSegredo() {
        return segredo;
    }

    public void setSegredo(String segredo) {
        this.segredo = segredo;
    }

    public Habilidade[] getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(Habilidade[] habilidades) {
        this.habilidades = habilidades;
    }

    public int getResistencia() {
        return resistencia;
    }

    public void setResistencia(int resistencia) {
        this.resistencia = resistencia;
    }

    public int getArmadura() {
        return armadura;
    }

    public void setArmadura(int armadura) {
        this.armadura = armadura;
    }

    private int calcularDano(int danoRecebido) {
        return danoRecebido-(this.armadura + this.resistencia);
    }

    public void sofrerDano(int danoRecebido) {
        int dano = this.calcularDano(danoRecebido);
        if (dano > 0) {
            if (dano >= this.saude) {
                System.out.println(this.nome + " sofreu um dano fatal! Este personagem está morto. Saúde: " + this.saude + " > " + (this.saude-dano));
            } else {
                System.out.println(this.nome + " sofreu " + dano + " de dano! Saúde: " + this.saude + " > " + (this.saude-dano));
            }
            this.saude = this.saude-dano;
        } else {
            System.out.println("A armadura e resistência de " + this.nome + " foi superior ao dano recebido. Saúde não alterada.");
        }
    }

    public String exibirHabilidades() {
        String[] habilidadesNomes = new String[this.habilidades.length];
        for (int i = 0; i < this.habilidades.length; i++) {
            habilidadesNomes[i] = this.habilidades[i].getNome();
        }
        return String.join(", ", habilidadesNomes);
    }

}
