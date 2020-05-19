function contador() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contanto: '
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)
        if (pas == 0) {
            alert('Passo invalido, considerando PASSO 1')
            pas = 1
        }

        if (ini < fi) {
            for( var cont = ini; cont <= fi; cont += pas) {
                res.innerHTML += `${cont} `
            }
        } else {
            for(var cont = ini; cont >= i; cont -= pas) {
                res.innerHTML += `${cont}`
            }
        }
        
    }
        

}