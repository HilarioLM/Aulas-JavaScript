let num = [5,8,2,9,3]
num.push(7)// para aicionar um número
num.sort()// para colocar na sequencia correta
console.log(num)// mostrar os números
console.log(`O vetor tem ${num.length} elementos`)// informar quantos valores tem
console.log(`O primeiro valor é ${num[1]}`)// seleciona a posição dentro do vetor

let pos = num.indexOf(8)// indexOf() procurar o valor dentro do vetor para saber em que posição se encontra. Se o valor não existir ele vai informar com -1
console.log(`O valor 8 esta na posição ${pos}`)
let pos