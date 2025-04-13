public class Wizard extends MagicalCreature {
    String wand;
    String house;
    Spell[] abilities;
    int magicPower;

    Wizard(String name, String type, String power, String wand, String house, Spell[] abilities, int magicPower) {
        super(name, type, power);
        this.wand = wand;
        this.house = house;
        this.abilities = abilities;
        this.magicPower = magicPower;
    }

    Spell[] getAbilities() {
        return this.abilities;
    }

    @Override
    int useMagic(Spell spell) {
        boolean hasSpell = false;
        for (Spell s : this.abilities) {
            if (spell == s) {
                hasSpell = true;
                break;
            }
        }
        if (!hasSpell) {
            System.out.println(this.name +" has no such spell!");
            return 0;
        }

        System.out.println(this.name +" is casting a spell...");
        this.castSpell(spell);
        return this.magicPower+spell.getBasePower();
    }

    void castSpell(Spell spell) {
        spell.spell();
    }

}
