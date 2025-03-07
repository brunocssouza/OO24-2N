import { Cat } from "./cat";

class Sieames extends Cat {

    public showRaceSiames() {
        return this.getRace()
    }
}

let gatoSiames1 = new Sieames("Mingau" , "Siames", 5);
gatoSiames1.showRaceSiames();
