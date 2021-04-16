var  valor1 = prompt("Nos bolsos do idoso que tentou lhe atacar, você encontra um pergaminho sobre o paradeiro de Izoton, o que você faz? \n 1 -  vai atrás de izoton sozinho. \n 2 - tenta furtar mais objetos do idoso, que já está morto.");

escolha(valor1);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
            
                <h1>
                     você encontra o esconderijo de izoton e envia um sinal aos guerreiros.
                </h1>

                <div class="link">

                        <a href="../ladino/cap3ladino.html"> continuar </a>
                </div>
            
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                 <h1>
                    Você entendeu apenas agora que se tratava de um zumbie, foi mordido
                    e se contaminou.
        
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