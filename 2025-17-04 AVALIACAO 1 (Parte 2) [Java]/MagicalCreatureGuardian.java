import java.util.ArrayList;

public abstract class MagicalCreatureGuardian extends MagicalCreature {
    protected int damage;
    protected String secret;
    public static ArrayList<MagicalCreatureGuardian> magicalCreatures = new ArrayList<>();

    MagicalCreatureGuardian(String name, int hp, String type, String power, int damage, String secret) {
        super(name, hp, type, power);
        this.damage = damage;
        this.secret = secret;
        MagicalCreatureGuardian.magicalCreatures.add(this);
    }

    public abstract void protecteSecret();
}
