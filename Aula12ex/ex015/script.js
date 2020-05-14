function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "HOMEM"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjove.png')
            } else if (idade < 50) {
                //adulto
                img.getAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = "MULHER"
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}