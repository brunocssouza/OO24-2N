import java.util.ArrayList;

public abstract class MagicalCreature {
    protected String name;
    protected int hp;
    protected String type;
    protected String power;
    private static ArrayList<MagicalCreature> creatures = new ArrayList<>();

    MagicalCreature(String name, int hp, String type, String power) {
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.power = power;
        MagicalCreature.creatures.add(this);
    }

    public static ArrayList<MagicalCreature> getCreatures() {
        return creatures;
    }
    public String getName() {
        return this.name;
    }
    public int getHp() {
        return this.hp;
    }
    public String getType() {
        return this.type;
    }
    public String getPower() {
        return this.power;
    }

    abstract int useMagic(Spell magic);
}
