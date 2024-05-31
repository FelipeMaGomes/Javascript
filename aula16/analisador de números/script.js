var v = Number(document.getElementById("valor").value)
var sel = document.getElementById("lista")
var o = document.createElement('option')

function adicionar() {
    o.text = `Valor ${v} adicionado.`
    sel.appendChild(o)
}

function finalizar(){
    alert()
}
