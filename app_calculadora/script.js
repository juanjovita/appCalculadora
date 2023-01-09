function calcular(tipo,valor){

    if(tipo === 'acao'){
      document.getElementById('resultado').value += valor
    } else if(tipo ==='valor'){
      document.getElementById('resultado').value += valor
    }
  } 

  function limpar() {
    document.getElementById('resultado').value = ''
    
  }
