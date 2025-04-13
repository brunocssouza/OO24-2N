public class Assessment {
    public static void main(String[] args) {
        Spell spell1 = new Spell("Expelliarmus", "Desarma o oponente", 30);
        Spell spell2 = new Spell("Stupefy", "Atordoa o oponente", 40);
        Spell spell3 = new Spell("Avada Kedavra", "Morte instantânea", 500);
        Spell spell4 = new Spell("Crucio", "Causa dor intensa", 70);

        Wizard harry = new Wizard(
                "Harry Potter",
                "Humano",
                "",
                "Azevinho e pena de fênix",
                "Grifinória",
                new Spell[]{spell1, spell2},
                50
        );

        Wizard voldemort = new Wizard(
                "Lord Voldemort",
                "Humano",
                "",
                "Teixo e pena de fênix",
                "Sonserina",
                new Spell[]{spell3, spell4},
                80
        );

        triwizardTournament(new Wizard[]{harry, voldemort});

        Principal diretor = new Principal("José das Couve");
        diretor.fetchSpell("Stupefy2");
    }

    static void triwizardTournament(MagicalCreature[] participants) {
        System.out.println("=========== WELCOME TO THE TRIWIZARD TOURNAMENT ==========");
        System.out.println("Participants:");
        for (MagicalCreature participant : participants) {
            System.out.println(participant.getName());
        }

        String indexesDone = "";
        Object[] highestDamage = {participants[0], 0};
        for (int i = 1; i <= participants.length; i++) {

            // Choosing random participant
            int randomIndexParticipants;
            MagicalCreature participant;
            do {
                randomIndexParticipants = (int) Math.floor(Math.random() * participants.length);
                participant = participants[randomIndexParticipants];
            } while (indexesDone.contains(randomIndexParticipants + ""));
            indexesDone += randomIndexParticipants + "";

            System.out.println("----> ROUND " + i + ": " + participant.getName().toUpperCase());
            // Competition
            int participantDamage;
            if (participant instanceof Wizard) {
                int randomIndexAbilities = (int) Math.floor(Math.random() * ((Wizard) participant).getAbilities().length);
                Spell randomAbility = ((Wizard) participant).getAbilities()[randomIndexAbilities];
                participantDamage = participant.useMagic(randomAbility);
            } else {
                participantDamage = participant.useMagic(null);
            }
            System.out.println("Damage of " + participant.getName() + " was " + participantDamage + ".\n");

            if (participantDamage >= (int) highestDamage[1]) {
                highestDamage[0] = participant.getName();
                highestDamage[1] = participantDamage;
            }

        }
        System.out.println("[✔] The Triwizard Tournament winner is " + highestDamage[0] + " with " + highestDamage[1] + " of total damage!");
        System.out.println("=========== END OF THE TRIWIZARD TOURNAMENT ==========\n");
    }
}
