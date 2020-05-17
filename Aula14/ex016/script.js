function contador() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == '') {
        alert('Impossivel Calcular, por favor digite um valor')
    } else if (inicio < fim) {
        for (var cont = inicio; cont <= fim; cont += passo){
            console.log(cont)
         } 
    } else {
        for (var cont = fim; cont >= inicio; cont -= passo){
            console.log(cont)
        }
        res.getElementById(cont) 
    }  
}