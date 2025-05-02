public class MagicalCreatureUnicorn extends MagicalCreature {
    private int damage;

    MagicalCreatureUnicorn(String name, int hp, String type, String power, int damage) {
        super(name, hp, type, power);
        this.damage = damage;
    }

    int getDamage() {
        return this.damage;
    }
    int useMagic(Spell magic) {
        System.out.println(this.name + " started to " + this.power + ".");
        return this.damage;
    }
}
