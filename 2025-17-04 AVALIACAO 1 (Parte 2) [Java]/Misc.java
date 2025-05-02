import java.util.ArrayList;
import java.util.Random;

public class Misc {
    // Função que recebe uma lista e um valor: retorna um único elemento ou uma lista com elementos aleatórios não-repetidos a partir da lista recebida.
    public static <T> Object retornarElementosAleatorios(T[] listaRecebida, int qtdeRecebida) {
        int tamanhoMaximo = listaRecebida.length;

        // Criando uma instância única de Random para a função inteira
        Random rand = new Random();

        // Caso precise de um só elemento aleatório da lista inserida:
        if (qtdeRecebida == 1) {
            int indexAleatorio = rand.nextInt(tamanhoMaximo);
            return listaRecebida[indexAleatorio];    // Retorna o único elemento aleatório
        }

        // Caso contrário (para qtdeRecebida > 1):
        ArrayList<T> listaTemporaria = new ArrayList<>();
        for (int i = 0; i < qtdeRecebida; i++) {
            int indexAleatorio;
            do {
                indexAleatorio = rand.nextInt(tamanhoMaximo);
            } while (listaTemporaria.contains(listaRecebida[indexAleatorio]));

            listaTemporaria.add(listaRecebida[indexAleatorio]);
        }
        return listaTemporaria;  // Retorna a lista de itens aleatórios
    }
}
