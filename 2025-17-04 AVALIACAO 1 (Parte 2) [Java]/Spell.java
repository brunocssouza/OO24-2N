import java.util.ArrayList;

public class Spell {
    private String name;
    private String effect;
    private int basePower;
    private static ArrayList<Spell> spells = new ArrayList<Spell>();

    Spell(String name, String effect, int basePower) {
        this.name = name;
        this.effect = effect;
        this.basePower = basePower;
        spells.add(this);
    }

    public static ArrayList<Spell> getAll() {
        return Spell.spells;
    }

    public String getName() {
        return this.name;
    }

    public String getEffect() {
        return this.effect;
    }

    public int getBasePower() {
        return basePower;
    }

    public void showDescription() {
        System.out.println("=============== DESCRIÇÃO DE FEITIÇO ===============");
        System.out.println("Name: " + getName() + "\nDamage: " + getBasePower() + "\n Effect: " + getEffect());
        System.out.println("====================================================\n");
    }

    public void spell() {
        System.out.println("The spell "+ this.name + " has been casted!");
    }
}
