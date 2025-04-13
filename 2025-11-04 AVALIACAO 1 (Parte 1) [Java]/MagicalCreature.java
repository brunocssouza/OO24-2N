public abstract class MagicalCreature {
    protected String name;
    protected String type;
    protected String power;

    MagicalCreature(String name, String type, String power) {
        this.name = name;
        this.type = type;
        this.power = power;
    }

    public String getName() {
        return this.name;
    }

    abstract int useMagic(Spell magic);
}
