function tabuada() {
    var num = Number(document.getElementById("numero").value)
    var seltab = document.getElementById("seltab")
    var r = 0
    if (document.getElementById("numero").value.length == 0 ) {
        alert('Por favor, digite um número!')
    } else {
        seltab.options.length = 0
        for (var c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            seltab.appendChild(item)
           // r = num * c 
           // seltab.innerHTML += `<option value="">${num} x ${c} = ${r}</option>`
        }
    }
}