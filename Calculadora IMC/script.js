const calcular = document.getElementById('calcular')


function imc () {
    
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '')
    {
        const valorIMC = (peso / (altura * altura)).toFixed(2)
        
        let classificacao = ''

        if (valorIMC < 18.5)
        {
            classificacao = 'abaixo do peso ideal.'
        }
        else if (valorIMC < 24.9)
        {
            classificacao = 'Você esta com o peso normal'
        }
        else if (valorIMC < 29)
        {
            classificacao = 'Você esta com sobrepeso'
        }
        else if (valorIMC < 34)
        {
            classificacao = 'Você esta com obesidade de primeiro grau'
        }
        else if (valorIMC < 39.9)
        {
            classificacao = 'Você esta com obesidade de segundo grau'
        }
        else if (valorIMC >= 40)
        {
            classificacao = 'Você esta com obesidade de terceiro grau/morbida'
        }

        resultado.textContent = `${nome} seu IMC é  ${valorIMC} e você está ${classificacao}`
    }   
    else
    {
        alert("Campo vazio")
    }
}

function limpaDados (){
    document.getElementById('nome').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}

calcular.addEventListener('click', imc)

