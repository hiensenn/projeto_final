var  valor1 = prompt("Enquanto está arrumando sua mala para sair de casa em direção aos guerreiros, você ouve de longe um grito de socorro, e você reconhece aquela voz. É a Rainha Taís e ela está sendo atacada por Izoton :\n 1 - você ataca o terrível izoton com seu martelo e o mata. \n 2 - ajuda a rainha a se levantar e fugir enquanto Izoton está desacordado");

escolha(valor1);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
            
                <h1>
                     você derrota Izoton e seus companheiros intercéptam seus aliados , agora Resillium está em paz.
                </h1>

                <div class="link">

                        <a href="../index.html"> continuar </a>
                </div>
            
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                 <h1>
                 VAo tentar tirar proveito da situação e atacar Izoton enquanto ele estava cego, você entrega sua ação fazendo barulho com seus passos pesados, Izoton percebe a aproximação e num ato de desespero se joga na sua 
                 direção com suas garras de monstro, cravando-as em seu peito e te matando antes mesmo que você conseguisse atingir o golpe com seu martelo.
                 </h1>
        
                <div class="link">
                <a href="../index.html"> voltar </a>
                </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt("Enquanto está arrumando sua mala para sair de casa em direção aos guerreiros, você ouve de longe um grito de socorro, e você reconhece aquela voz. É a Rainha Taís e ela está sendo atacada por Izoton :\n 1 - você ataca o terrível izoton com seu martelo e o mata. \n 2 - ajuda a rainha a se levantar e fugir enquanto Izoton está desacordado");
        escolha(movimento);
       
    }
}