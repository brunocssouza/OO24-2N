public class Fenix extends MagicalCreature {
    private int damage;

    Fenix(String name, String type, String power, int damage) {
        super(name, type, power);
        this.damage = damage;
    }

    @Override
    int useMagic(Spell spell) {
        System.out.println(this.name + " started to " + this.power + "("+this.damage+").");
        return this.damage;
    }
}
