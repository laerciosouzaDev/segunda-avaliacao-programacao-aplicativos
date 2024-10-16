document.getElementById("formularioVeiculo").addEventListener("submit", function(event) {
    event.preventDefault(); 
    //preventDefault durante qualquer fase do fluxo de eventos cancela o evento,
    //o que significa que qualquer ação padrão normalmente feita pela aplicação 
    //como um resultado do evento não ocorrerá

    
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;

    
    const novoVeiculo = document.createElement("li");
    novoVeiculo.textContent = `Marca: ${marca}, Modelo: ${modelo}, Ano: ${ano}`;

    const img = document.createElement("img")
    img.src = `img: ${img}`;

    
    document.getElementById("listaVeiculo").appendChild(novoVeiculo);

    
    document.getElementById("formularioVeiculo").reset();
});