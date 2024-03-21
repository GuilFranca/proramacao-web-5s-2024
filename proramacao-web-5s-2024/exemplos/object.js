let pessoa1 = {
    nome: "Joao",
    cpf: 123,
    endereco: {
        nomeRua: "Nome da rua",
        cep:1333
    }
}

let pessoa2 = {
    nome: "Pedro",
    cpf: 124
}

for(let key in pessoa1){
    console.log(key + ' - ' + pessoa1[key])
}

const arr = [11, 'três', 7, 99, {numero: 15}, [12, 17]];

for(let i = 0; i < arr.length; i++){
    console.log(i + ' - ' + arr[i]);
}

for(let key in arr){
    console.log(key + ' - ' + arr[key]);
}

console.log(`Cadastro: ${pessoa1.nome} - ${pessoa1.cpf}`);
console.log(`Cadastro: ${pessoa2.nome} - ${pessoa2.cpf}`);

// 1 2
// 3 4

let A = [[1, 2], [3, 4]];