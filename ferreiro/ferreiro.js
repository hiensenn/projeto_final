var seuNome = prompt("Qual seu Nome ?");

escolha(seuNome);

function escolha(nome){
    document.write(

        
                  `
                         <div class="imagem">
                            <img src="../ferreiro/image/ferreiro0.jpg" alt="">  
                        </div><!--imagem-->
                        
                        
                        <div class="texto">
                                    <h2>${nome} ajude o Ferreiro a salvar a rainha Taís Softus do terrível alquimista Izoton. 
                                    Com suas habilidades de forja o ferreiro conseguirá criar as mais diversas armas para se proteger e defender seus aliados..</h2>
                                    
                            </div><!--texto-->

                            <div class="btn">
                                <ul>
                                    <li><a href="../ferreiro/cap1ferreiro.html">começar</a></li>
                                </ul>
                            </div>
                

             
    `)
}