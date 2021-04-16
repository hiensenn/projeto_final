var  valor5 = prompt("Após 3 dias  que parecia nao ter fim, os maiores guerreiros de Resillium conseguiram capturar o alquimista Izoton e intercaptam seus planos e sócios, graças a você, vocês tem a chance de fazer algo com eles, entre as escolhas estão. você sujere : \n\n 1 - aprisionar cada um nas profundezas dos poços de Resillium. \n 2 - o mundo nunca mudará se não houver o perdão. ");

escolha(valor5);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
            
                 <h1>
                 é uma boa escolha, Resillium está aos poucos se reerguendo e voltando aos seus mais lindos dias,
                 mas será se foi o suficinte?.
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
                    nunca confie em um genocida, só haverá mortes.
                 </h1>
        
                 
                 <div class="link">
                 <a href="../index.html"> voltar </a>
                 </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt("Após 3 dias  que parecia nao ter fim, os maiores guerreiros de Resillium conseguiram capturar o alquimista Izoton e intercaptam seus planos e sócios, graças a você, vocês tem a chance de fazer algo com eles, entre as escolhas estão. você sujere : \n\n 1 - aprisionar cada um nas profundezas dos poços de Resillium. \n 2 - o mundo nunca mudará se não houver o perdão. ");
        escolha(movimento);
       
    }
}