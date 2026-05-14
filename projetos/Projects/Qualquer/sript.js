async function buscarClima(event) {
    event.preventDefault();
    
    const cidade = document.getElementById("cidadeInput").value;
    const resultadoDiv = document.getElementById("resultadoClima");
    const apiKey = "SUA_CHAVE_API_AQUI"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
    
    try {
        resultadoDiv.innerHTML = "Carregando...";
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error("Cidade não encontrada ou problema com a Chave da API (Unauthorized).");
        }
        
        const dados = await resposta.json();
        const temperatura = dados.main.temp;
        const descricao = dados.weather[0].description;
        
        resultadoDiv.innerHTML = `A temperatura em <strong>${dados.name}</strong> é de <strong>${temperatura}°C</strong> (${descricao}).`;
    } catch (erro) {
        resultadoDiv.innerHTML = `<span style="color: red;">Erro: ${erro.message}</span>`;
        console.error("Erro ao buscar clima:", erro);
    }
}

if (typeof document !== 'undefined') {
    document.getElementById("formClima").addEventListener("submit", buscarClima);
}
