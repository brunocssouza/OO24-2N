import java.util.ArrayList;

public class Spell {
    private String name;
    private String description;
    private int basePower;
    public static ArrayList<Spell> spells = new ArrayList<Spell>();

    Spell(String name, String description, int basePower) {
        this.name = name;
        this.description = description;
        this.basePower = basePower;
        spells.add(this);
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public int getBasePower() {
        return basePower;
    }

    public void spell() {
        System.out.println("The spell "+ this.name + " ("+ basePower +") has been casted!");
    }
}
