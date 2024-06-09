
var botaoReset = document.getElementById('btnReset')
var msgVez = document.getElementById('vezDoJogador')
var contagemX = document.getElementById('qntX')
var contagemO = document.getElementById('qntO')
var botaoClicado 
var clickAtual = 'X'


var arrayX = []
var arrayO = []
var arrayGeral = []

var casosVencedores = [

    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

var contadorX = 0
var contadorO = 0
var verificador = false



function clickMovimento(button){
    botaoClicado = button

    if(botaoClicado.innerText == 'X' || botaoClicado.innerText =='O') {
        alert('Não pode alterar um botão já clicado!')

    } else {
        alteraValor()
        
    }
    

    
    
}


const alteraValor = () => {

    if (clickAtual == 'X') {

        botaoClicado.innerText = 'X'
        clickAtual = 'O'
        msgVez.innerText = 'Vez do O!'

        switch (botaoClicado.id) {
            case 'btn1' :
                arrayX.push(1)
                arrayGeral.push(1)
                arrayX.sort()
         
                            break
            case 'btn2' :
                arrayX.push(2)
                arrayGeral.push(2)
                arrayX.sort()
          
                            break 
            case 'btn3' :
                arrayX.push(3)
                arrayGeral.push(3)
                arrayX.sort()
         
                            break
            case 'btn4' :
                arrayX.push(4)
                arrayGeral.push(4)
                arrayX.sort()
           
                            break    
            case 'btn5' :
                arrayX.push(5)
                arrayGeral.push(5)
                arrayX.sort()
           
                            break   
            case 'btn6' :
                arrayX.push(6)
                arrayGeral.push(6)
                arrayX.sort()
           
                             break
            case 'btn7' :
                 arrayX.push(7)
                 arrayGeral.push(7)
                 arrayX.sort()
            
                            break   
            case 'btn8' :
                 arrayX.push(8)
                 arrayGeral.push(8)
                 arrayX.sort()
             
                             break 
            default: 
                 arrayX.push(9)
                 arrayGeral.push(9)
                 arrayX.sort()
            
                            break    

        }


    } else if (clickAtual == 'O') {
        botaoClicado.innerText = 'O'
        clickAtual = 'X'
        msgVez.innerText = 'Vez do X!'

        switch (botaoClicado.id) {
            case 'btn1' :
                arrayO.push(1)
                arrayGeral.push(1)
                arrayO.sort()
               
                            break
            case 'btn2' :
                arrayO.push(2)
                arrayGeral.push(2)
                arrayO.sort()
              
                            break 
            case 'btn3' :
                arrayO.push(3)
                arrayGeral.push(3)
                arrayO.sort()
            
                            break
            case 'btn4' :
                arrayO.push(4)
                arrayGeral.push(4)
                arrayO.sort()
            
                            break    
            case 'btn5' :
                arrayO.push(5)
                arrayGeral.push(5)
                arrayO.sort()
           
                            break   
            case 'btn6' :
                arrayO.push(6)
                arrayGeral.push(6)
                arrayO.sort()
             
                             break
            case 'btn7' :
                 arrayO.push(7)
                 arrayGeral.push(7)
                 arrayO.sort()
              
                            break   
            case 'btn8' :
                 arrayO.push(8)
                 arrayGeral.push(8)
                 arrayO.sort()
             
                             break 
            default: 
                 arrayO.push(9)
                 arrayGeral.push(9)
                 arrayO.sort()
             
                            break    

        }
    }
 
    setTimeout (() => {
        verificaResultado(); 

    }, [100]); 
    

}

function iniciaNovaRodada() {
    clickAtual = 'X'
    verificador = false
    arrayGeral.length = 0
    arrayO.length = 0
    arrayX.length = 0
    document.querySelectorAll(".jogo-container button").forEach((item) => {
        item.innerHTML = ''
        item.disabled = false
    })
    msgVez.innerText = 'Vez do X!'

}

const verificaResultado = () => {

    if (arrayGeral.length >= 3){
        for(i=0; i< casosVencedores.length; i++){
            if (casosVencedores[i].every(elemento => arrayX.includes(elemento))) {

                alert('X venceu!')
               
               
                verificador = true 
                contadorX++ 
                contagemX.innerText = `${contadorX}`
                msgVez.innerText = 'FIM DA RODADA'
                
            }
            else if (casosVencedores[i].every(elemento => arrayO.includes(elemento))) {

                alert('O venceu!')
                

                verificador = true
                contadorO++
                contagemO.innerText = `${contadorO}`
                msgVez.innerText = 'FIM DA RODADA'
              
            }
            
        }

    }

    if (arrayGeral.length == 9 && verificador == false) {

        alert('DEU VELHA!')
        msgVez.innerText = 'FIM DA RODADA'
    }

    if (arrayGeral.length == 9 || verificador == true) {
        document.querySelectorAll(".jogo-container button").forEach((item) => {
            item.disabled = true
        }); 
    }

   
}   