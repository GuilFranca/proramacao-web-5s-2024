// Função para transpor uma matriz
function transporMatriz(A) {
    // Imprimir matriz original
    console.log("Matriz Original:");
    imprimirMatriz(A);

    // Criar uma matriz transposta
    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    // Imprimir matriz transposta
    console.log("Matriz Transposta:");
    imprimirMatriz(transposta);
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
    console.log("\n");
}

// Exemplo de uso
const matrizExemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizExemplo);
