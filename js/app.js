
limpar();


function comprar() {   
    let tipoCadeira = document.getElementById('tipo-ingresso').value;
    let qtdCliente = parseInt(document.getElementById('qtd').value);

    if(tipoCadeira == 'pista' ) {
        compraPista(qtdCliente);
    } else if(tipoCadeira == 'superior') {
      compraSuperior(qtdCliente);
    } else { (tipoCadeira == 'inferior') 
      compraInferior(qtdCliente);
    }
 
}   
function compraPista (qtdCliente) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtdCliente > qtdPista ) {
        alert('Quantidade indisponivel');
      } else {
        qtdPista = qtdPista - qtdCliente;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra pista realizada com sucesso');
      }
   }

   function compraSuperior (qtdCliente){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtdCliente > qtdSuperior){
      alert('Quantidade indisponivel');
    } else {
      qtdSuperior = qtdSuperior - qtdCliente;
      document.getElementById('qtd-superior').textContent =qtdSuperior;
      alert ('Compra cadeira superior realizada com sucesso');
    }
   }
   function compraInferior (qtdCliente){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtdCliente > qtdInferior){
      alert('Quantidade indisponivel');
    } else{
      qtdInferior = qtdInferior - qtdCliente;
      document.getElementById('qtd-inferior').textContent = qtdInferior;
      alert ('Compra cadeira inferior realizada com sucesso');
    }

   }

   function limpar(){
    qtdCliente = parseInt(document.getElementById('qtd').innerHTML = 0);
    
   }
    

