let num = [5,8,4,6,9]

num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Todos os seus vetores são ${num}`)

//como escrever seu vetor usando REPETIÇÃO

for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
}
//Jeito mais simples

for(let pos in num){
    console.log(num[pos])
}
// num.indexOf

let pos= num.indexOf(3)
if(pos == -1){
    console.log("Valor não encontrado")
}else{
    console.log(`Está da posição ${pos}`)
}
