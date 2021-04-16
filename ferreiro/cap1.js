var  valor = prompt(" Um senhor está de costas comendo carne e você vai até ele sem entender nada, o que você faz? \n 1 - olá posso ajudar em alguma coisa?. \n 2 - para encostar no Sr. e vira-lo");

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
                     e consegue mordê-lo! 
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
                             O senhor vira para você com os olhos brancos, ele vem em sua direção 
                             mostrando os dentes! Ele parece querer atacá-lo, você observa seu poderoso martelo.
                      </h1>
                 </div>
             

                <div class="link">
                    <a href="../ferreiro/cap2ferreiro.html"> continuar </a>
                </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt("Um senhor está de costas comendo carne e você vai até ele sem entender nada, o que você faz? \n 1 - olá posso ajudar em alguma coisa?. \n 2 - para encostar no Sr. e vira-lo");
        escolha(movimento);
       
    }
}