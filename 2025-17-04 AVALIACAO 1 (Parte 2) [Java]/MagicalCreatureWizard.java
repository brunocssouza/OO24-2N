public class MagicalCreatureWizard extends MagicalCreature {
    String wand;
    House house;
    Spell[] abilities;
    int magicPower;

    MagicalCreatureWizard(String name, int hp, String type, String power, String wand, House house, Spell[] abilities, int magicPower) {
        super(name, hp, type, power);
        this.wand = wand;
        this.house = house;
        this.abilities = abilities;
        this.magicPower = magicPower;
    }

    public House getHouse() {
        return house;
    }
    public int getMagicPower() {
        return magicPower;
    }
    public String getWand() {
        return wand;
    }
    public Spell[] getSpells() {
        return abilities;
    }

    public void castSpell(Spell spell) {
        spell.spell();
    }

    public int useMagic(Spell spell) {
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
}
