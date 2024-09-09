function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa){
        section.innerHTML = "Nenhum filosofo encontrado!"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML
    let resultados = "";
    let titulo = "";
    let descrição= "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Concatena o HTML de cada resultado à string 'resultados'
        resultados += `
            <div class="item-resultado">
                <h3>${dado.titulo}</h3>
                <p class="descrição-meta">${dado.descrição} </p>
                <a href=${dado.link}></a>
            </div>
            `;
        }
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>"
    }

    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}