function contar() {
    var i = Number(document.getElementById("ini").value)
    var f = Number(document.getElementById("fim").value)
    var p = Number(document.getElementById("passo").value)
    var final = document.getElementById("final")
    var contagem = document.getElementById("contagem")
    var contador = 0
    var s = ""
    var r = document.getElementById("res")
    if (p = 0) {
        p = 1
    }
    if (i >= f) {
        for (var c = i; c >= f; c -= p) {
            s = s + c + " _ "    
            contador += 1  
        }
    } else if (i <= f){
        for (var c = i; c <= f; c += p) {
            s = s + c + " _ "    
            contador += 1  
        }
    }
    r.innerHTML = `Resultado: ` 
    contagem.innerHTML = s
    final.innerHTML = `quantidade de numeros: ${contador}!` 
}






/* function contar() {
    var i = getElementById('ini')
    var f = getElementById('fim')
    var p = getElementById('passo')
   //var conta = getElementById('conta')
    var r = getElementById('res') 
    r.innerHTML = 'Contando: '
    for (var c = i; c <= f; c += p) {
        console.log(`${c} `)
    }
} */