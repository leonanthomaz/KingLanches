//BOtão de enviar as informações no WhatsApp

$(document).ready(function(){
    
    $("#enviar").click(function(){
       var nome=$("#nome").val()
       var endereco=$("#endereco").val()
       var numero=$("#numero").val()
       var bairro=$("#bairro").val()
       var observacao = $("textarea").val()
       var troco = $("#troco").val()
       
       // FORMA de pagamento selecionada
       const formasDePagamento= document.querySelectorAll("form input[type=radio]")
       var formaSelecionada = ""
       if(formasDePagamento[0].checked){
           formaSelecionada = "Cartão"
        } else {
            formaSelecionada = "Dinheiro"
            
        }

      
        // King Junior
   

          var pedido = 7;
          var quantidade = ""
          const quantidadeDisponivel = document.querySelectorAll(".pedido1 input[type=number]")
          var quantidadeSelecionada = ""
          var qtd1 = 0; 
          var soma = 0;
          
  
          for ( quantidade of quantidadeDisponivel) {
  
              if(quantidade.value){
                  quantidadeSelecionada +=` ${quantidade.alt} -> ${pedido},00 Reais -> Qtd: ${quantidade.value} / `
                  var quantidadeValor = parseInt(quantidade.value)
                  qtd1 = quantidadeValor  * pedido
                  soma += qtd1
  
                  
              }
  
          }


           // King Picanha
   

           var pedido2 = 12;
           var quantidade2 = ""
           const quantidadeDisponivel2 = document.querySelectorAll(".pedido2 input[type=number]")
           var quantidadeSelecionada2 = ""
           var qtd2 = 0; 
           
           
   
           for ( quantidade2 of quantidadeDisponivel2) {
   
               if(quantidade2.value){
                   quantidadeSelecionada2 +=` ${quantidade2.alt} -> ${pedido2},00 Reais -> Qtd: ${quantidade2.value} / `
                   var quantidadeValor2 = parseInt(quantidade2.value)
                   qtd2 = quantidadeValor2  * pedido2
                   soma += qtd2
   
                   
               }
   
           }

           // King Frango
   

           var pedido3 = 6;
           var quantidade3 = ""
           const quantidadeDisponivel3 = document.querySelectorAll(".pedido3 input[type=number]")
           var quantidadeSelecionada3 = ""
           var qtd3 = 0; 
           
           
   
           for ( quantidade3 of quantidadeDisponivel3) {
   
               if(quantidade3.value){
                   quantidadeSelecionada3 +=` ${quantidade3.alt} -> ${pedido3},00 Reais -> Qtd: ${quantidade3.value} / `
                   var quantidadeValor3 = parseInt(quantidade3.value)
                   qtd3 = quantidadeValor3  * pedido3
                   soma += qtd3
   
                   
               }
   
           }

           // King Calabresa
   

           var pedido4 = 10;
           var quantidade4 = ""
           const quantidadeDisponivel4 = document.querySelectorAll(".pedido4 input[type=number]")
           var quantidadeSelecionada4 = ""
           var qtd4 = 0; 
           
           
   
           for ( quantidade4 of quantidadeDisponivel4) {
   
               if(quantidade4.value){
                   quantidadeSelecionada4 +=` ${quantidade4.alt} -> ${pedido4},00 Reais -> Qtd: ${quantidade4.value} / `
                   var quantidadeValor4 = parseInt(quantidade4.value)
                   qtd4 = quantidadeValor4  * pedido4
                   soma += qtd4
   
                   
               }
   
           }

           // Duplo King
   

           var pedido5 = 10;
           var quantidade5 = ""
           const quantidadeDisponivel5 = document.querySelectorAll(".pedido5 input[type=number]")
           var quantidadeSelecionada5 = ""
           var qtd5 = 0; 
           
           
   
           for ( quantidade5 of quantidadeDisponivel5) {
   
               if(quantidade5.value){
                   quantidadeSelecionada5 +=` ${quantidade5.alt} -> ${pedido5},00 Reais -> Qtd: ${quantidade5.value} / `
                   var quantidadeValor5 = parseInt(quantidade5.value)
                   qtd5 = quantidadeValor5  * pedido5
                   soma += qtd5
   
                   
               }
   
           }

           // Duplo Bacon
   

           var pedido6 = 12;
           var quantidade6 = ""
           const quantidadeDisponivel6 = document.querySelectorAll(".pedido6 input[type=number]")
           var quantidadeSelecionada6 = ""
           var qtd6 = 0; 
           
           
   
           for ( quantidade6 of quantidadeDisponivel6) {
   
               if(quantidade6.value){
                   quantidadeSelecionada6 +=` ${quantidade6.alt} -> ${pedido6},00 Reais -> Qtd: ${quantidade6.value} / `
                   var quantidadeValor6 = parseInt(quantidade6.value)
                   qtd6 = quantidadeValor6  * pedido6
                   soma += qtd6
   
                   
               }
   
           }

           // Guaracamp
   

           var pedido7 = 2;
           var quantidade7 = ""
           const quantidadeDisponivel7 = document.querySelectorAll(".pedido7 input[type=number]")
           var quantidadeSelecionada7 = ""
           var qtd7 = 0; 
           
           
   
           for ( quantidade7 of quantidadeDisponivel7) {
   
               if(quantidade7.value){
                   quantidadeSelecionada7 +=` ${quantidade7.alt} -> ${pedido7},00 Reais -> Qtd: ${quantidade7.value} / `
                   var quantidadeValor7 = parseInt(quantidade7.value)
                   qtd7 = quantidadeValor7  * pedido7
                   soma += qtd7
   
                   
               }
   
           }

           // Coca de 2 Litros
   

           var pedido8 = 10;
           var quantidade8 = ""
           const quantidadeDisponivel8 = document.querySelectorAll(".pedido8 input[type=number]")
           var quantidadeSelecionada8 = ""
           var qtd8 = 0; 
           
           
   
           for ( quantidade8 of quantidadeDisponivel8) {
   
               if(quantidade8.value){
                   quantidadeSelecionada8 +=` ${quantidade8.alt} -> ${pedido8},00 Reais -> Qtd: ${quantidade8.value} / `
                   var quantidadeValor8 = parseInt(quantidade8.value)
                   qtd8 = quantidadeValor8  * pedido8
                   soma += qtd8
   
                   
               }
   
           }

           // Coca Lata
   

           var pedido9 = 5;
           var quantidade9 = ""
           const quantidadeDisponivel9 = document.querySelectorAll(".pedido9 input[type=number]")
           var quantidadeSelecionada9 = ""
           var qtd9 = 0; 
           
           
   
           for ( quantidade9 of quantidadeDisponivel9) {
   
               if(quantidade9.value){
                   quantidadeSelecionada9 +=` ${quantidade9.alt} -> ${pedido9},00 Reais -> Qtd: ${quantidade9.value} / `
                   var quantidadeValor9 = parseInt(quantidade9.value)
                   qtd9 = quantidadeValor9  * pedido9
                   soma += qtd9
   
                   
               }
   
           }

           // Pepsi
   

           var pedido10 = 5;
           var quantidade10 = ""
           const quantidadeDisponivel10 = document.querySelectorAll(".pedido10 input[type=number]")
           var quantidadeSelecionada10 = ""
           var qtd10 = 0; 
           
           
   
           for ( quantidade10 of quantidadeDisponivel10) {
   
               if(quantidade10.value){
                   quantidadeSelecionada10 +=` ${quantidade10.alt} -> ${pedido10},00 Reais -> Qtd: ${quantidade10.value} / `
                   var quantidadeValor10 = parseInt(quantidade10.value)
                   qtd10 = quantidadeValor10  * pedido10
                   soma += qtd10
   
                   
               }
   
           }

           // Fanta Laranja
   

           var pedido11 = 5;
           var quantidade11 = ""
           const quantidadeDisponivel11 = document.querySelectorAll(".pedido11 input[type=number]")
           var quantidadeSelecionada11 = ""
           var qtd11 = 0; 
           
           
   
           for ( quantidade11 of quantidadeDisponivel11) {
   
               if(quantidade11.value){
                   quantidadeSelecionada10 +=` ${quantidade11.alt} -> ${pedido11},00 Reais -> Qtd: ${quantidade11.value} / `
                   var quantidadeValor11 = parseInt(quantidade11.value)
                   qtd11 = quantidadeValor11  * pedido11
                   soma += qtd11
   
                   
               }
   
           }

           // Fanta Uva
   

           var pedido12 = 5;
           var quantidade12 = ""
           const quantidadeDisponivel12 = document.querySelectorAll(".pedido12 input[type=number]")
           var quantidadeSelecionada12 = ""
           var qtd12 = 0; 
           
           
   
           for ( quantidade12 of quantidadeDisponivel12) {
   
               if(quantidade12.value){
                   quantidadeSelecionada12 +=` ${quantidade12.alt} -> ${pedido12},00 Reais -> Qtd: ${quantidade12.value} / `
                   var quantidadeValor12 = parseInt(quantidade12.value)
                   qtd12 = quantidadeValor12  * pedido12
                   soma += qtd12
   
                   
               }
   
           }

           // Tobi
   

           var pedido13 = 7;
           var quantidade13 = ""
           const quantidadeDisponivel13 = document.querySelectorAll(".pedido13 input[type=number]")
           var quantidadeSelecionada13 = ""
           var qtd13 = 0; 
           
           
   
           for ( quantidade13 of quantidadeDisponivel13) {
   
               if(quantidade13.value){
                   quantidadeSelecionada13 +=` ${quantidade13.alt} -> ${pedido13},00 Reais -> Qtd: ${quantidade13.value} / `
                   var quantidadeValor13 = parseInt(quantidade13.value)
                   qtd13 = quantidadeValor13  * pedido13
                   soma += qtd13
   
                   
               }
   
           }

        
       




        // Adicional Selecionado
        
        const AdicionaisDisponiveis = document.querySelectorAll(".input-add")
        var adicionalSelecionado = ""

        for (adicional of AdicionaisDisponiveis){
            if(adicional.checked == true){
                adicionalSelecionado += `${adicional.alt} - Adicional: ${adicional.id} -> ${adicional.value} Reais;`
                var adicionalValores = parseInt(adicional.value)
                
                soma += adicionalValores
                
            }
            
        }

        
        
        //Taxa de entrega
        var TaxaDeEntrega = 0;
        var bairro = ""
        const Bairros = document.querySelectorAll("option")
        if(Bairros[1].selected==true){
            bairro = 'Tijuaçu'
            TaxaDeEntrega += parseInt(Bairros[1].value)
            
        } else if(Bairros[2].selected==true){
            TaxaDeEntrega += parseInt(Bairros[2].value)
            bairro = 'Mata Machado/Maracaí'
        } else if(Bairros[3].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[3].value)
            bairro = 'Agrícola'
            
        } else if(Bairros[4].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[4].value)
            bairro = 'Biguá'
            
        } else if (Bairros[5].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Furnas'

        } else if (Bairros[6].selected==true) {
            TaxaDeEntrega += parseInt(Bairros[5].value)
            bairro = 'Taquara'
            
        } else {
            TaxaDeEntrega += parseInt(Bairros[7].value)
            bairro = 'Outros'
        }

        var cupom = $("#cupom").val()
           if( cupom == 'falcon10' ) {
           var desconto = 10
        }else{ 
        if( cupom == '' ) {
        var desconto = 0
     } 
           
    }

    
    var texto=`👑🍔 *Obrigado por escolher a King Lanches!* 🍔👑 --- Em instantes você será atendido! --- *A Descrição do seu pedido é:*  *Nome:* ${nome}; 🏠 *Endereço:* ${endereco}; *N°:* ${numero}; *Região:* ${bairro};  *Obs:* ${observacao};
    💳 *Forma de Pagamento:* ${formaSelecionada}, 🛒 *Pedido:* ${quantidadeSelecionada}, ${quantidadeSelecionada2}, ${quantidadeSelecionada3}, ${quantidadeSelecionada4}, ${quantidadeSelecionada5}, ${quantidadeSelecionada6},  ${quantidadeSelecionada7},  ${quantidadeSelecionada8},  ${quantidadeSelecionada9},  ${quantidadeSelecionada10},  ${quantidadeSelecionada11},  ${quantidadeSelecionada12},  ${quantidadeSelecionada13}, ${adicionalSelecionado},
    💰 *Valor do Pedido =* ${soma},00 
    ;🛵 *Taxa de entrega =* ${TaxaDeEntrega},00 
    ;🪙 *Troco para =* ${troco},00 Reais 
    ;💲 *Desconto =* ${desconto},00  
    ;💵 *Valor Total:* ${(soma+TaxaDeEntrega)- desconto},00`
    var site="https://api.whatsapp.com/send?phone=5521996551374&text="+texto.replace(" ","%20","%0a")
    
    
   
    if(confirm("Confirma seu pedido?")){ 
        alert("Perfeito!😃 Seu pedido já foi formulado. Agora basta nos enviar a descrição do seu pedido e pronto!😄")  
        window.location.href=site;
        
    } else {
        document.location.reload(true);

    }
})
})

