var seuNome = prompt("Qual seu Nome ?");

escolha(seuNome);

function escolha(nome){
    document.write(

        
                  `
                    <div class="imagem">
                            <img src="../personagem_nome/image/arch.png" alt="">
                        </div><!--imagem-->
                        
                        
                        <div class="texto">
                                    <h2>${nome} você  é o(a) melhor arqueiro(a) que Resillium já teve, além de anos de treinamento 
                                        arduo você também possui um arco forjado pelo ferreiro com os restos da armadura de 
                                        seu pai que foi usada em outra grande guerra e flechas tão ponteaguda que perfura
                                        elmos e crânios facilmente.

                                        <br><br>
                                        Por muitos anos nossas terras permaneceram em paz, as pessoas não precisavam se 
                                        preocupar com guerras ou desordens naturais. Infelizmente uma nova espécie de seres
                                        estava sendo criada. 
                                        Alquimistas liderados por Izoton, usaram todo o conhecimento que tinham e criaram um 
                                        exército ZUMBIES para que pudessem dominar Resillium.</h2>
                                    
                            </div><!--texto-->

                            <div class="btn">
                                <ul>
                                    <li><a href="../cap1/cap1.html">começar</a></li>
                                </ul>
                            </div>
                

             
    `)
}