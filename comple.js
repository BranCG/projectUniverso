//LOGICA DE RANDOM PARA CAPA DE ESTRELLAS.
const COLORS = ["#fff2", "#fff4", "#fff7", "#fff", "#fff", "#f77700", "#3606bb"]

const generateSpaceLayer = (size, selector, totalStarts, duration) => {
    const layer = [];
    for (let i = 0; i < totalStarts; i++){
        const color = COLORS[Math.floor(Math.random()* COLORS.length)];
        const x= Math.floor(Math.random() * 100);
        const y= Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};

generateSpaceLayer("1px", ".space-1", 200, "21s")
generateSpaceLayer("2px", ".space-2", 100, "14s")
generateSpaceLayer("4px", ".space-3" , 25, "7s") 


//POPUPPPPPP
function mostrarDescripcion(descripcion) {
        document.getElementById("descripcion-texto").innerHTML = descripcion;
        document.getElementById("descripcion").style.display = "block";
}

    document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("descripcion").style.display = "none";
}

