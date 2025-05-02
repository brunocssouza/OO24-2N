public class ClassFactory {
    public static void createAll() {

        // Diretor
        new Principal("Albus Dumbledore");

        // Lugares Magicos
        MagicalPlaces[] magicalPlaces = {
                new MagicalPlaces("Floresta Negra", 0, new String[]{"Aranhas"}),
                new MagicalPlaces("Castelo de Hogwarts", 7, new String[]{"Câmara Secreta"}),
                new MagicalPlaces("Banco Gringotes", 713, new String[]{"Dragão"})
        };

        // Feitiços
        Spell[] spells = {
                new Spell("Expelliarmus", "Desarma o oponente", 20),
                new Spell("Stupefy", "Atordoa o oponente", 40),
                new Spell("Avada Kedavra", "Morte instantânea", 70),
                new Spell("Crucio", "Causa dor intensa", 115)
        };

        // Criaturas Mágicas
        MagicalCreature[] creatures = {
                new MagicalCreatureDragon(
                        "Verde-Galês",
                        125,
                        "Voador",
                        "Confundir-se com a vegetação",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureWizard(
                        "Harry Potter",
                        80,
                        "Humano",
                        "",
                        "Azevinho e pena de fênix",
                        House.getAll().get(0),
                        Misc.retornarElementosAleatorios(Spell.getAll().toArray(), 2),
                        (int) (Math.random() * 140)
                ),
                new MagicalCreatureWizard(
                        "Hermione Granger",
                        70,
                        "Humano",
                        "",
                        "Madeira de videira e fibra de coração de dragão",
                        House.getAll().get(0),
                        Misc.retornarElementosAleatorios(Spell.getAll().toArray(), 3),
                        (int) (Math.random() * 150)
                ),
                new MagicalCreatureWizard(
                        "Lord Voldemort",
                        120,
                        "Humano",
                        "",
                        "Teixo e pena de fênix",
                        House.getAll().get(1),
                        Misc.retornarElementosAleatorios(Spell.getAll().toArray(), 3),
                        (int) (Math.random() * 150)
                ),
                new MagicalCreatureWizard(
                        "Draco Malfoy",
                        75,
                        "Humano",
                        "",
                        "Madeira de pilriteiro e pelo de unicórnio",
                        House.getAll().get(1),
                        Misc.retornarElementosAleatorios(Spell.getAll().toArray(), 3),
                        (int) (Math.random() * 150)
                ),
                new MagicalCreatureWizard(
                        "Cedrico Diggory",
                        70,
                        "Humano",
                        "",
                        "Freixo e pelo de unicórnio",
                        House.getAll().get(3),
                        Misc.retornarElementosAleatorios(Spell.getAll().toArray(), 3),
                        (int) (Math.random() * 150)
                ),
                new MagicalCreaturePhoenix(
                        "Fawkes",
                        300,
                        "Voador",
                        "Aparatar lançando labaredas de fogo",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureMermaid(
                        "Selkie",
                        90,
                        "Aquático",
                        "Cantar hipnóticamente",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureUnicorn(
                        "Unicorn",
                        80,
                        "Terrestre",
                        "Investir enorme força",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureDragon(
                        "Verde-Galês",
                        125,
                        "Voador",
                        "Confundir-se com a vegetação",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureDragon(
                        "Meteoro-Chinês",
                        140,
                        "Voador",
                        "Soprar labaredas como um meteoro",
                        (int) (Math.random() * 200) + 1
                ),
                new MagicalCreatureGuardianArachnid(
                        "Aragogue",
                        600,
                        "Aranha",
                        "Envenenar",
                        (int) (Math.random() * 500) + 200,
                        "Hagrid"
                ),
                new MagicalCreatureGuardianReptile(
                        "Basilisco",
                        700,
                        "Cobra",
                        "Petrificar",
                        (int) (Math.random() * 600) + 200,
                        "A câmara secreta"
                ),
        };
    }
}
