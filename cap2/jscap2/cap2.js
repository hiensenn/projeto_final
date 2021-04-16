var  valor1 = prompt("você é escolhido para ser o(a) capit(ã)o do exército de arqueiros de Resillium, você ganhará novas armaduras impenetráveis, porém você se sente estranho , pois nunca havia abatido zumbies antes, o você faz? :\n 1 - aceita, pois treinou a vida toda para isso. \n 2 - não aceita, pois não quer enfrentar zumbie.");

escolha(valor1);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `

                <div class="texto">
                     <h1>
                         como líder da frota de arqueiros, você ganhou novas armaduras e está pronto para a guerra.
                     </h1>
                </div>

                <div class="link">
                        <a href="../cap3/cap3.html"> continuar </a>
                </div>


                
            
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                 <h1>
                 Você acaba sendo atacado naquela noite e suas armaduras 
                 não eram fortes o suficiente para defende-lo, você foi mordido
                 </h1>
        
                <div class="link">
                <a href="../index.html"> voltar </a>
                </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt("você é escolhido para ser o(a) capit(ã)o do exército de arqueiros de Resillium, você ganhará novas armaduras impenetráveis, porém você se sente estranho , pois nunca havia abatido zumbies antes, o você faz? :\n 1 - aceita, pois treinou a vida toda para isso. \n 2 - não aceita, pois não quer enfrentar zumbies.");
        escolha(movimento);
       
    }
}