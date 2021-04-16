var  valor = prompt(" você você um sonhor de costas que parece estar atordoado,  como age?  \n 1 - olá posso ajudar em alguma coisa?. \n 2 - para encostar no Sr. e vira-lo");

escolha(valor);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
                    <div class="texto">
                         <h1>
                            Ao encostar no ombro do senhor, ele se vira rapidamente para trás e consegue agarrar seu braço. Ele olha diretamente para você
                            e consegue mordê-lo! Sua visão começa a falhar e você percebe que está desmaiando, sem saber se é pela dor ou algo o contaminou.
                         </h1>
                    </div>
                
                    <div class="link">
                         <a href="../index.html"> voltar </a>
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
                          O senhor vira para o ladino com os olhos brancos, fazendo um susurro de dor, ele vem em sua direção mostrando os dentes!
                          Ele parece querer atacá-lo, então você dá 3 passos para trás e encontra em cima da mesa uma faca.

                     </h1>
                 </div>
                

                <div class="link">
                    <a href="../ladino/cap2ladino.html"> continuar </a>
                </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt(" 1 - olá posso ajudar em alguma coisa?. \n 2 - para encostar no Sr. e vira-lo");
        escolha(movimento);
       
    }
}