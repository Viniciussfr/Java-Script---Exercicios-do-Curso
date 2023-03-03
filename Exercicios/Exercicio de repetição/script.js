function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = "Impossivel Contar !"
        window.alert('[ERRO] Faltam dados !')

    } else{
        res.innerHTML = "Contando: <br>"
        let i =Number(inicio.value)
        let f =Number(fim.value)
        let p =Number(passo.value)
        if (p <= 0){
            alert ( 'Passo invalido! Considerando o passo 1')
            p = 1
        }
        if (i < f){
            //CONTAGEM CRESCENTE
            for(let c= i; c <= f; c+= p) {
            res.innerHTML += `${c} \u{1F603}`
        }
    }
         else {
            //CONTAGEM REGRESSIVA 
            for(let c = i ; c >= f; c -= p){
                 res.innerHTML += `${c} \u{1F603}`
             }
         }   
        
        
    }

    res.innerHTML += `\u{1F3C1}`


    }
