var  valor = prompt("Você estava em mais um dia e treinamento e percebe um movimento estanho na floresta ao seu redor,  o que você faz ? \n 1 - pega seu arco e vai saber o que está acontecendo. \n 2 - pega seu arco e flecha e se prapara para usa-los.");

escolha(valor);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `    <h1>
                    você esqueceu suas flechas e foi atacado pelos zumbies.
                 </h1>
        
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
                 <h1>
                 você enxerga os zumbies e logo atira contra eles, os matando.
                 </h1>

                <div class="link">
                    <a href="../cap2/cap2.html"> continuar </a>
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