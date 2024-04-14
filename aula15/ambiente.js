var num = [1 ,2 ,3] // lista
num[4] = 6 // adiciona um numero a uma determinada posição
num.push(7) // adiciona um numero a frente do ultimo numero
console.log(num.sort()) // classifica a lista do menor para o maior
console.log(num.length) // o tamanho da lista (a quantidade de elementos)
console.log(num)
console.log(`Nosso vetor é o ${num}`)
var pos = num.indexOf(4) // pega a posição do valor // e quando o valor não estiver presente, o Javascript representa como -1
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}
