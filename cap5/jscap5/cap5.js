var  valor5 = prompt("Após 3 anos em uma guerra que parecia nao ter fim, os maiores guerreiros de Resillium conseguirem capturar o alquimista Izoton e intercaptam seus planos e sócios, vocês tem a chance de fazer algo com eles entre as escolhas estão. você sujere : \n 1 - aprisionar cada um nas profundezas dos poços de Resillium. \n 2 - o mundo nunca mudará se não houver o perdão. ");

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
                 <a href="../cap6/cap6.html"> continuar </a>
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
        movimento =  prompt("Você estava em mais um dia e treinamento e percebe um movimento estanho na floresta ao seu redor,  o que você faz ? \n 1 - pega seu arco e vai saber o que está acontecendo. \n 2 - pega seu arco e flecha e se prapara para usa-los.");
        escolha(movimento);
       
    }
}