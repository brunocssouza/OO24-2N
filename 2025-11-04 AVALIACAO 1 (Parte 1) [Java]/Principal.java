public class Principal implements Grimorio {
    String name;

    Principal(String name) {
        this.name = name;
    }

    @Override
    public void fetchSpell(String spellName) {
        Spell fetchedSpell = null;
        for (Spell spell : Spell.spells) {
            if (spell.getName().equalsIgnoreCase(spellName)) {
                fetchedSpell = spell;
                break;
            }
        }

        if (fetchedSpell != null) {
            System.out.println("[✔] Spell fetched.");
            System.out.println("Name: " + fetchedSpell.getName());
            System.out.println("Damage: " + fetchedSpell.getBasePower());
            System.out.println("Description: " + fetchedSpell.getDescription());
        } else {
            System.out.println("[✗] Spell wasn't found.");
        }
    }
}
