function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.valua > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
       
        if (fsex[0].checked) {
            genero = 'Homem'
            sex = 'm'
        } else {
                genero = 'Mulher'
                sex = 'f'
        } 
        var faixa_etaria = etaria(idade,sex,img) 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} ${faixa_etaria} com ${idade} anos.`
        res.appendChild(img)
    }
    }

function etaria(idade,sex,img) {
    if (idade >=0 && idade < 5) {
        var result = 'Bebê'
        img.setAttribute('src', 'foto-bebe-'+sex+'.png')
    } else if (idade < 13) {
            var result = 'Criança'
            img.setAttribute('src', 'foto-jovem-'+sex+'.png')
    } else if (idade < 19) {
                var result = 'Adolescente'
                img.setAttribute('src', 'foto-jovem-'+sex+'.png')
    } else if (idade < 21) {
        var result = 'Jovem'
        img.setAttribute('src', 'foto-jovem-'+sex+'.png')
    
    } else if (idade < 30) {
        var result = 'Jovem Adulto'
        img.setAttribute('src', 'foto-adulto-'+sex+'.png')

    } else if (idade < 50) {
        var result = 'Adulto'
        img.setAttribute('src', 'foto-adulto-'+sex+'.png')

    } else if (idade < 66) {
        var result = 'Adulto Maduro'
        img.setAttribute('src', 'foto-idoso-'+sex+'.png')

    } else {
        var result = 'Idoso'
        img.setAttribute('src', 'foto-idoso-'+sex+'.png')
    }
    return result;
}