var  valor = prompt(" você vê o martelo em cima da mesa e agora? \n 1 - faz tudo rápido e pega o martelo. \n 2 - se desespera. ");

escolha(valor);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
            
                 <h1>
                 Com sua força extrema de ferreiro, você acerta um golpe na cabeça do senhor o matando na hora.
        
                 <div class="link">
                    <a href="../ferreiro/cap3ferreiro.html"> continuar </a>
                 </div>
            
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                 <h1>
                  você deixa o martelo cair e acaba sendo mordido
                 </h1>

                <div class="link">
                    <a href="../index.html""> voltar </a>
                </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt(" você vê o martelo em cima da mesa?  1 - faz tudo rápido e pega o martelo 2 - se desespera .");
        escolha(movimento);
       
    }
}