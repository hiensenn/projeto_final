var seuNome = prompt("Qual seu Nome ?");

escolha(seuNome);

function escolha(nome){
    document.write(

        
                  `
                         <div class="imagem">
                            <img src="../ladino/ladino.jpg" alt="">  
                        </div><!--imagem-->
                        
                        
                        <div class="texto">
                                    <h2>${nome} você é  um ladino que usa  suas habilidades para fazer pequenos furtos, descobrir táticas de guerras inimigas
                                     e trabalhos para o Rei, atualmente está morando em uma cabana, em uma vila pequena para qual acabou de se mudar,
                                     para fugir por um tempo dos guardas da corte ao qual tinha saqueado seus tesouros, não conheço ninguém de Resillium..</h2>
                                    
                            </div><!--texto-->

                            <div class="btn">
                                <ul>
                                    <li><a href="../ladino/cap1ladino.html">começar</a></li>
                                </ul>
                            </div>
                

             
    `)
}