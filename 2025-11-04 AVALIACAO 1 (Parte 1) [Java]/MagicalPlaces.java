public class MagicalPlaces {
    private String name;
    private int floorAmount;
    private String[] challenges;

    MagicalPlaces(String name, int floorAmount, String[] challenges) {
        this.name = name;
        this.floorAmount = floorAmount;
        this.challenges = challenges;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getFloorAmount() {
        return floorAmount;
    }

    public void setFloorAmount(int floorAmount) {
        this.floorAmount = floorAmount;
    }

    public String[] getChallenges() {
        return challenges;
    }

    public void setChallenges(String[] challenges) {
        this.challenges = challenges;
    }
}
