function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    

    if(campoPesquisa===""){
        section.innerHTML="Nenhum dragão encontrado com estas descrições. Tente novamente!";
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let caracteristicas = "";


  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
     
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        caracteristicas = dado.caracteristicas.toLowerCase();


        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || caracteristicas.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}">
                <h2>
                    <a>${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a>Características: ${dado.caracteristicas}</a>
            </div>
        `;
        }
    }
    if (!resultados){
        section.innerHTML="Nenhum dragão encontrado com estas descrições. Tente novamente!";
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}