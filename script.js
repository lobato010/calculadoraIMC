function calcular(){
    let pes = document.getElementById('txtpeso')
    let alt = document.getElementById('txtalt')

    let res = document.getElementById('res')

    let msg = document.getElementById('txtmsg')

    let peso = Number(pes.value)
    let altura = Number(alt.value)

    let imc = peso/(altura * altura)

    res.innerHTML = `O valor do seu IMC é igual a: ${imc.toFixed(2)} <p>
    Resultado final em relação a tabela:</p>`

    if(peso == '' || altura == ''){
        window.alert('ERRO! Insira as informações e tente novamente.')
    }
    else if(imc < 18.5){
        msg.innerHTML = '--- MAGREZA ---'
        msg.style.background = 'yellow'
    }else if(imc >= 18.5 && imc <= 24.9){
        msg.innerHTML = '--- PESO IDEAL ---'
        msg.style.background = 'green'
    }else if(imc >= 25 && imc <= 29.9){
        msg.innerHTML = '--- SOBREPESO ---'
        msg.style.background = 'orange'
    }else{
        msg.innerHTML = '--- OBESIDADE ---'
        msg.style.background = 'red'
    }
}