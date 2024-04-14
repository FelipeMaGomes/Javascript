var valores = [8, 1, 6, 4, 9, 3]
console.log(valores)
valores.sort()
/*
for (var pos=0; pos < valores.length; pos++) {
    console.log(`A posção ${pos} tem o valor ${valores[pos]}`)
}*/

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}