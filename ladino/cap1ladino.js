var  valor = prompt(" você vê um velho de costas que parece estar atordoado,  como age?  \n 1 - olá posso ajudar em alguma coisa?. \n 2 - para encostar no Sr. e vira-lo");

escolha(valor);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
                    <div class="texto">
                         <h1>
                            Ao encostar no ombro do senhor, ele se vira rapidamente para trás e consegue agarrar seu braço. você foi mordido!
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
                          O senhor vira para o ladino com os olhos brancos,  ele vem em sua direção mostrando os dentes!
                          então você corta s cabeça dele com sua adaga.

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