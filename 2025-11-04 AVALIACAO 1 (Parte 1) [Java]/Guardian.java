public abstract class Guardian extends MagicalCreature {
    private int damage;

    Guardian(String name, String type, String power, int damage) {
        super(name, type, power);
        this.damage = damage;
    }

    @Override
    int useMagic(Spell spell) {
        System.out.println(this.name + " started to " + this.power + "("+this.damage+").");
        return this.damage;
    }

    abstract void protectSecret();
}
