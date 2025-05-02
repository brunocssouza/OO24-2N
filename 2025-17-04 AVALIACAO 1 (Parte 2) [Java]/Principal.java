public class Principal implements Grimorio {
    private String name;
    private static Principal principal;

    Principal(String name) {
        this.name = name;
        Principal.principal = this;
    }

    public static Principal getPrincipal() {
        return principal;
    }

    public String getName() {
        return name;
    }

    public void fetchSpell(String spellName) {
        System.out.println("Querying spell ...");
        Spell fetchedSpell = null;
        for (Spell spell : Spell.getAll()) {
            if (spell.getName().equalsIgnoreCase(spellName)) {
                fetchedSpell = spell;
                break;
            }
        }

        if (fetchedSpell != null) {
            fetchedSpell.showDescription();
        } else {
            System.out.println("[✗] Spell wasn't found.");
        }
    }
}
