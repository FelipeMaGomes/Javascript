function adicionar() {
    var v = Number(document.getElementById("valor").value)
    var o = document.getElementById("opcao")
    var list = []
    list.push(v)
    o.innerHTML += `\n Valor ${v} adicionado.`
}

function finalizar() {

}