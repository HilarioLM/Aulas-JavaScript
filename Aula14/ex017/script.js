function tabuada() {
    var valor = document.getElementById('valor')
    var tab = document.getElementById('seltab')
//VAR como LET são praticamnete a mesma coisa
    

    if (valor.value.length == 0) {
        alert('[ERRO] Digete um número valido')
    } else {
        let num = Number(valor.value)
        var cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            var iten = document.createElement('option')
            iten.text = `${num} x ${cont} = ${num*cont}`
            iten.value = `tab${cont}`
            tab.appendChild(iten) 
            cont++
        }
        
    }
}