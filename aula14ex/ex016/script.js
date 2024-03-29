function contar() {
    var i = Number(document.getElementById("ini").value)
    var f = Number(document.getElementById("fim").value)
    var p = Number(document.getElementById("passo").value)
    var final = document.getElementById("final")
    var contagem = document.getElementById("contagem")
    var contador = 0
    var s = ""
    if (p == 0) {
        p = 1
        alert('PASSO invalido!, será considerado igual a 1')
    }
    var r = document.getElementById("res")
    if (document.getElementById("ini").value.length == 0  || document.getElementById("fim").value.length == 0) {
        r.innerHTML = 'Impossível contar!'
    } else if (i >= f) {
        for (var c = i; c >= f; c -= p) {
            s = s + c + `\u{1F449}`    
            contador += 1  
        }
        r.innerHTML = `Resultado: ` 
        contagem.innerHTML = `${s} \u{1F3C1}`
        final.innerHTML = `quantidade de numeros: ${contador}!`
    } else if (i <= f){
        for (var c = i; c <= f; c += p) {
            s = s + c + `\u{1F449}`    
            contador += 1  
        }
        r.innerHTML = `Resultado: ` 
        contagem.innerHTML = `${s} \u{1F3C1}`
        final.innerHTML = `quantidade de numeros: ${contador}!`
    } 	
}