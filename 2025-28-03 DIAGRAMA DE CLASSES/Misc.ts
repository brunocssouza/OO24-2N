export class Misc {

    public static inverterData(dataFormatadaRecebida:string):number {
        return Number.parseInt(dataFormatadaRecebida.split("/").reverse().join(""))
    }

    public static formatarData(dataInvertidaRecebida:number):string {
        const dataRevertidaArray = dataInvertidaRecebida.toString().split("").reverse()

        let dataFormatada = [];
        for (let i=0; i < dataRevertidaArray.length; i++) {
            if (i == 2 || i == 5) {
                dataFormatada.push("/")
            }
            dataFormatada.push(dataRevertidaArray[i])
        }

        return dataFormatada.join("")
    }
}