var  valor1 = prompt("você precisa tomar uma decisão muito difícil. Os zumbies parecem estar dominando Resillium ou você se rende ou levanta a esperança de seu exército e lhes dá motivos para continuar, Os faz lembrar de como eram os vales e como as crianças eram felizes por morarem neste lugar.  você : \n 1 - Você como um líder começa a falar sobre ter a paz de volta e sobre o futuro de Resillium \n 2 - você não sabe o que fazer, são muitos zumbies e muitos mortos. ");

escolha(valor1);

function escolha(movimento)
{
    if(movimento == 1)
    {
        document.write(
            `
            
                 <h1>
                 seus companheiros de batalha lhe ouvem e escolhem tentar até suas últimas forças.
                 </h1>
                 <div class="link">
                 <a href="../cap4/cap4.html"> continuar </a>
                 </div>
            
            `
        );
    }
        else if(movimento == 2) 
    {
        document.write(
            `
            
                 <h1>
                 você e seu exército se rendem e são devorador por zumbies 
                 </h1>
        
                 <div class="link">
                 <a href="../index.html"> voltar </a>
                 </div>
            
            `
        );
    }
    else
    {
        movimento =  prompt("você precisa tomar uma decisão muito difícil. Os zumbies parecem estar dominando Resillium ou você se rende ou levanta a esperança de seu exército e lhes dá motivos para continuar, Os faz lembrar de como eram os vales e como as crianças eram felizes por morarem neste lugar.  você : \n 1 - Você como um líder começa a falar sobre ter a paz de volta e sobre o futuro de Resillium \n 2 - você não sabe o que fazer, são muitos zumbies e muitos mortos. ");
        escolha(movimento);
       
    }
}