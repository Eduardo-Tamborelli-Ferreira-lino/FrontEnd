// Pagina Inical
const destaques = document.getElementById('destaques-showcase');
const loading = document.querySelector('.loading');

let allProducts = [];
let ordensPorCategoria = {
    'Entradas': 'asc',
    'Pratos Principais': 'asc',
    'Sobremesas': 'asc',
    'Bebidas': 'asc'
};

document.addEventListener('DOMContentLoaded', async function () {

    loading.classList.remove('hidden');

    if (document.getElementById('destaques-showcase')) {
        await searchProducts();
    }
    else if (document.getElementById('catalogo-wrapper')) {
        await loadMenu();
    }

    loading.classList.add('hidden');

});

async function searchProducts() {

    try {
        let allhtml = '';

        const apiUrl = `https://api-restaurante-5iqb.onrender.com/api/produtos`
        const apiRespon = await fetch(apiUrl);
        const apiJson = await apiRespon.json();

        allProducts = apiJson;

        if (allProducts.length <= 0) {
            alert('Error to get the informations!');
            return;
        }

        allProducts.sort((a, b) => {

            return a.preco - b.preco;

        });

        allProducts.forEach(product => {

            if (product.destacado === true) {

                const precoFormatado = product.preco.toFixed(2).replace('.', ',');

                allhtml += `
                    <div class="card" onclick="window.location.href='detail.html?id=${product.id}'" style="cursor: pointer">
                        <img src="${product.imagem}" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                        <div class="card-body">
                            <span class="card-category text-muted">${product.categoria}</span>
                            <h3 class="card-title">${product.nome}</h3>
                            <p class="card-desc">${product.descricao}</p>
                            <div class="card-footer">
                                <span class="price">R$ ${precoFormatado}</span>
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                    Ver Mais
                                </button>
                            </div>
                        </div>
                    </div>
                `
            }
        });

        destaques.innerHTML = allhtml;

    }
    catch (error) {
        alert('Error in the search' + error);
    }
}

const catalog = document.getElementById('catalogo-wrapper');

async function loadMenu() {

    try {
        let sectionStartes = '';
        let sectionMainDish = '';
        let sectionDesserts = '';
        let sectionDrinks = '';

        let startesHtml = '';
        let mainsHtml = '';
        let dessertsHtml = '';
        let drinksHtml = '';

        if (allProducts.length === 0) {
            const apiUrl = `https://api-restaurante-5iqb.onrender.com/api/produtos`;
            const apiRespon = await fetch(apiUrl);
            const apiJson = await apiRespon.json();
            allProducts = apiJson;
        }

        if (allProducts.length <= 0) {
            alert('Error to get the informations!');
            return;
        }

        const starterDish = allProducts.filter(entrada => entrada.categoria === 'Entradas');
        const mainDish = allProducts.filter(entrada => entrada.categoria === 'Pratos Principais');
        const dessert = allProducts.filter(entrada => entrada.categoria === 'Sobremesas');
        const drink = allProducts.filter(entrada => entrada.categoria === 'Bebidas');

        starterDish.sort((a, b) =>{
            return ordensPorCategoria['Entradas'] === 'asc' ? a.preco - b.preco : b.preco - a.preco
        })

        mainDish.sort((a, b) =>{
            return ordensPorCategoria['Pratos Principais'] === 'asc' ? a.preco - b.preco : b.preco - a.preco
        })

        dessert.sort((a, b) =>{
            return ordensPorCategoria['Sobremesas'] === 'asc' ? a.preco - b.preco : b.preco - a.preco
        })

        drink.sort((a, b) =>{
            return ordensPorCategoria['Bebidas'] === 'asc' ? a.preco - b.preco : b.preco - a.preco
        })

        starterDish.forEach(product => {

            const precoFormatado = product.preco.toFixed(2).replace('.', ',');

            startesHtml += `
                <div class="card" onclick="window.location.href='detail.html?id=${product.id}'" style="cursor: pointer">
                    <img src="${product.imagem}" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${product.categoria}</span>
                        <h3 class="card-title">${product.nome}</h3>
                        <p class="card-desc">${product.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${precoFormatado}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            `
        });

        mainDish.forEach(product => {

            const precoFormatado = product.preco.toFixed(2).replace('.', ',');

            mainsHtml += `
                <div class="card" onclick="window.location.href='detail.html?id=${product.id}'" style="cursor: pointer">
                    <img src="${product.imagem}" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${product.categoria}</span>
                        <h3 class="card-title">${product.nome}</h3>
                        <p class="card-desc">${product.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${precoFormatado}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            `
        });

        dessert.forEach(product => {

            const precoFormatado = product.preco.toFixed(2).replace('.', ',');

            dessertsHtml += `
                <div class="card" onclick="window.location.href='detail.html?id=${product.id}'" style="cursor: pointer">
                    <img src="${product.imagem}" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${product.categoria}</span>
                        <h3 class="card-title">${product.nome}</h3>
                        <p class="card-desc">${product.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${precoFormatado}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            `
        });

        drink.forEach(product => {

            const precoFormatado = product.preco.toFixed(2).replace('.', ',');

            drinksHtml += `
                <div class="card" onclick="window.location.href='detail.html?id=${product.id}'" style="cursor: pointer">
                    <img src="${product.imagem}" alt="Nome do Produto" class="card-image" onerror="this.src='https://placehold.co/300x200?text=Sem+Imagem'">
                    <div class="card-body">
                        <span class="card-category text-muted">${product.categoria}</span>
                        <h3 class="card-title">${product.nome}</h3>
                        <p class="card-desc">${product.descricao}</p>
                        <div class="card-footer">
                            <span class="price">R$ ${precoFormatado}</span>
                            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.location.href='detail.html?id=${product.id}'">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            `
        });

        sectionStartes = `
            <div class="bloco-grupo-pratos" style="margin-bottom: 3rem;">

                <!-- Cabeçalho da Seção com Título e Filtro de Preço -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                  <h2>Entradas <span style="font-size: 1rem; color: #888; font-weight: normal;"> - ${starterDish.length} itens</span></h2>
                  <select onchange = "mudarOrdenacao('Entradas', this.value)" class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
                    <option value="asc" ${ordensPorCategoria['Entradas'] === 'asc' ? 'selected' : '' }>Menor Preço</option>
                    <option value="desc" ${ordensPorCategoria['Entradas'] === 'desc' ? 'selected' : '' }>Maior Preço</option>
                  </select>
                </div>

                <!-- Grid de Produtos da Categoria -->
                <div class="grid">
                    ${startesHtml}
                </div>
            </div>
        `
        sectionMainDish = `
            <div class="bloco-grupo-pratos" style="margin-bottom: 3rem;">

                <!-- Cabeçalho da Seção com Título e Filtro de Preço -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                  <h2>Pratos Principais <span style="font-size: 1rem; color: #888; font-weight: normal;"> - ${mainDish.length} itens</span></h2>
                  <select onchange = "mudarOrdenacao('Pratos Principais', this.value)" class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
                    <option value="asc" ${ordensPorCategoria['Pratos Principais'] === 'asc' ? 'selected' : '' }>Menor Preço</option>
                    <option value="desc" ${ordensPorCategoria['Pratos Principais'] === 'desc' ? 'selected' : '' }>Maior Preço</option>
                  </select>
                </div>

                <!-- Grid de Produtos da Categoria -->
                <div class="grid">
                ${mainsHtml}
                </div>
            </div>
        `
        sectionDesserts = `
            <div class="bloco-grupo-pratos" style="margin-bottom: 3rem;">

                <!-- Cabeçalho da Seção com Título e Filtro de Preço -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                  <h2>Sobremesas <span style="font-size: 1rem; color: #888; font-weight: normal;"> - ${dessert.length} itens</span></h2>
                  <select onchange = "mudarOrdenacao('Sobremesas', this.value)" class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
                    <option value="asc" ${ordensPorCategoria['Sobremesas'] === 'asc' ? 'selected' : '' }>Menor Preço</option>
                    <option value="desc" ${ordensPorCategoria['Sobremesas'] === 'desc' ? 'selected' : '' }>Maior Preço</option>
                  </select>
                </div>

                <!-- Grid de Produtos da Categoria -->
                <div class="grid">
                    ${dessertsHtml}
                </div>
            </div>
        `
        sectionDrinks = `
            <div class="bloco-grupo-pratos" style="margin-bottom: 3rem;">

                <!-- Cabeçalho da Seção com Título e Filtro de Preço -->
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 1rem; margin-bottom: 2rem;">
                  <h2>Bebidas <span style="font-size: 1rem; color: #888; font-weight: normal;"> - ${drink.length} itens</span></h2>
                  <select onchange = "mudarOrdenacao('Bebidas', this.value)" class="seletor-ordem" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #444; background-color: #222; color: #fff;">
                    <option value="asc" ${ordensPorCategoria['Bebidas'] === 'asc' ? 'selected' : '' }>Menor Preço</option>
                    <option value="desc" ${ordensPorCategoria['Bebidas'] === 'desc' ? 'selected' : '' }>Maior Preço</option>
                  </select>
                </div>

                <!-- Grid de Produtos da Categoria -->
                <div class="grid">
                    ${drinksHtml}
                </div>
            </div>
        `

        catalog.innerHTML = sectionStartes + sectionMainDish + sectionDesserts + sectionDrinks;
    }
    catch (error) {
        alert('Error in the search' + error);
    }
}

function mudarOrdenacao(categoria, ordem) {
    ordensPorCategoria[categoria] = ordem; 
    loadMenu(); 
}