export class Misc {

    public static inverterData(dataFormatadaRecebida:string):number {
        return Number.parseInt(dataFormatadaRecebida.split("/").reverse().join(""))
    }

    public static formatarData(dataInvertidaRecebida:number):string {
        const dataRevertidaArray:string[] = dataInvertidaRecebida.toString().split("");
        const dataFormatada:string[] = [];     

        // Dia
        dataFormatada.push(dataRevertidaArray[6]+dataRevertidaArray[7])
        dataFormatada.push("/")
        // Mês
        dataFormatada.push(dataRevertidaArray[4]+dataRevertidaArray[5])
        dataFormatada.push("/")
        // Ano
        dataFormatada.push(dataRevertidaArray[0]+dataRevertidaArray[1]+dataRevertidaArray[2]+dataRevertidaArray[3])

        return dataFormatada.join("")
    }

    public static arredondar2Decimais(decimalRecebido:number):number {
        return Number.parseFloat(decimalRecebido.toFixed(2))
    }
}
