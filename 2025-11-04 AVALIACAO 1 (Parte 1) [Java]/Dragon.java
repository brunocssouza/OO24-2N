public class Dragon extends MagicalCreature {
    private int damage;

    Dragon(String name, String type, String power, int damage) {
        super(name, type, power);
        this.damage = damage;
    }

    @Override
    int useMagic(Spell magic) {
        System.out.println(this.name + " started to " + this.power + "("+this.damage+").");
        return this.damage;
    }
}
