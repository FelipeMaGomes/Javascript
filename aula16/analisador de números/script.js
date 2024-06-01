var list = []
var soma = 0
var maior = 0
var menor = 0
var media = 0

function verifica_existe(n) {
    for (c = 0 ; c <= list.length; c++) {
        if (list[c] == n) {
            return true
        }
    }
    return false
}

function adicionar() {
    var v = Number(document.getElementById("valor").value)
    var sel = document.getElementById("lista")
    var o = document.createElement('option')
    if (v < 1 || v > 100 || verifica_existe(v)) {
        alert('Valor inválido ou já encontrado na lista')
    } else {
        list.push(v)
        o.text = `Valor ${v} adicionado.`
        sel.appendChild(o)
    }
}

function calculo() {
    var soma = 0
    var maior = Number(list[0])
    var menor = Number(list[0])
    for (c = 0 ; c < list.length; c++) {
        if (list[c] < menor) {
            menor = list[c]
        } else if (list[c] > maior) {
            maior = list[c]
        } 
        soma += list[c]
        alert(soma)
    }
    media = soma / list.length
    return [maior, menor, soma, media]
}

function finalizar(){
    var p = document.getElementById("res")
    var r = calculo()
    alert(r)
    p.innerHTML += `<p> Ao todo, temos ${list.length} números cadastrados. <p>`
    p.innerHTML += `<p> O maior valor informado foi ${r[0]} <p>`
    p.innerHTML += `<p> O menor valor informado foi ${r[1]} <p>`
    p.innerHTML += `<p> Somando todos os valores, temos ${r[2]} <p>`
    p.innerHTML += `<p> A média dos valores digitados é ${r[3]} <p>`
}
