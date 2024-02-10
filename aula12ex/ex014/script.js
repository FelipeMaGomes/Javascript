function carregar() {
    var hd = window.document.getElementById('hd')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // DIA
        img.src = 'manhã-redondo.png'
        window.document.body.style.background = '#f6c681'
    } else if (hora >= 12 && hora < 18) {
        // TARDE
        img.src = 'tarde-redondo.png'
        window.document.body.style.background = '#e15e05'
        hd.innerHTML = 'Hora da Tarde'
    } else {
        // NOITE
        img.src = 'noite-redondo.png'
        window.document.body.style.background = '#03234e'
        hd.innerHTML = 'Hora da Noite'
    }
}