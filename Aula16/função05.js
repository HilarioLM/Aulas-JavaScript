//RECUSIRVIDADE
function fatorial() {
    if (n == 1) {
        return 1
    } else {
        return n + fatorial
    }
}

console.log(fatorial(5))