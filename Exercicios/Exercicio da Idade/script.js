function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                res.innerHTML = 'Criança'
            }else if (idade <= 18){
                res.innerHTML = 'Adolescente'
            }else if (idade <= 65){
                res.innerHTML = 'Adulto'
            }else {
                res.innerHTML = 'Coroa'
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
              res.innerHTML = 'Criança'  
            }else if (idade <= 18){
                res.innerHTML = 'Jovem'
            }else if (idade <= 65){
                res.innerHTML = 'Adulta'
            }else {
                res.innerHTML = 'Idosa'
            }
            
        
        }

        res.style.textAlign = 'center'
        res.innerHTML += ` , ${genero} com ${idade} anos .`

    }






}