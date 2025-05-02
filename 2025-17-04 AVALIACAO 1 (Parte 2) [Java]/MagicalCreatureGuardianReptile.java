public class MagicalCreatureGuardianReptile extends MagicalCreatureGuardian{

    MagicalCreatureGuardianReptile(String name, int hp, String type, String power, int damage, String secret) {
            super(name, hp, type, power, damage, secret);
    }

    @Override
    public void protecteSecret() {
        System.out.println(this.name + " protected " + this.secret + "!");
    }

    @Override
    int useMagic(Spell magic) {
        System.out.println(this.name + " started to " + this.power + ".");
        return this.damage;
    }
}
