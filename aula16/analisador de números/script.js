var list = []
function adicionar() {
    var v = Number(document.getElementById("valor").value)
    var sel = document.getElementById("lista")
    var o = document.createElement('option')
    if (v = 0 && v == list.value) {
        alert('Valor inválido ou já encontrado na lista')
    } else
        o.text = `Valor ${v} adicionado.`
        sel.appendChild(o)
}

function finalizar(){
    var v = Number(document.getElementById("valor").value)
    var sel = document.getElementById("lista")
    var o = document.createElement('option')
    alert(v)
}
