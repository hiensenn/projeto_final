var  valor1 = prompt("No meio da batalha você entra em contato com o espirito de seu pai que lhe mostra técnicas ancestrais de arco e flecha, em apenas 2 segundos você teve contato com líderes arqueiros e lhe foi repassado os segredos de flechas infinitas e sobre seu espirito antepassado 'Softus', o que você faz ? : \n 1 - segue seu instinto e acredita que ainda é possível vencer usando estas técnicas. \n 2 - Não entende o que aconteceu, achou que foi um delírio. ");

escolha(valor1);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
                <div class="texto">
                    <h1>
                    você ganha uma vitalidade maior, mas tenha cuidado, você ainda não controla essa força.
                    </h1>
                </div>

                <div class="link">
                    <a href="../cap5/cap5.html"> continuar </a>
                </div>   
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                <div class="texto">
                    <h1>
                    após a sua visão , você perdeu a atenção e foi devorado por zumbies.
                    </h1>
                </div>
        
                <div class="link">
                    <a href="../index.html"> voltar </a>
                </div>
                
            `
        );
    }
    else
    {
        movimento =  prompt("Você entra em contato com o espirito de seu pai que lhe mostra técnicas ancestrais de arco e flecha, em apenas 2 segundos você teve contato com líderes arqueiros e lhe foi repassado os segredos de flechas infinitas e sobre seu espirito antepassado 'Softus', o que você faz ? : \n 1 - segue seu instinto e acredita que ainda é possível vencer usando estas técnicas. \n 2 - Não entende o que aconteceu, achou que foi um delírio. ");
        escolha(movimento);
       
    }
}