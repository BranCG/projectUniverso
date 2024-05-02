//LOGICA DE RANDOM PARA CAPA DE ESTRELLAS
const COLORS = ["#fff2", "#fff4", "#fff7", "#fff", "#fff"]

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

generateSpaceLayer("1px", ".space-1", 200, "20s")
generateSpaceLayer("2px", ".space-2", 100, "15s")
generateSpaceLayer("3px", ".space-3" , 25, "10s") 


//VANEGADOR 
function queHacer(){
        alert("<!>Solo recuerda los cuadros que cambiaron de color y se movieron. ¡DESCUBRE que hay en ellos haciendo click! (POSATE ENCIMA DE UN CUADRO Y CONFIA EN LOS BORDER VERDES)..");
}

function proposito(){
        alert("<!>Este es un proyecto educativo sobre el espacio para practicar habilidades en HTML, CSS y JS. Esta plataforma está diseñada para que los niños puedan aprender de forma interactiva sobre planetas, estrellas, galaxias y más. Aunque es un sistema básico, me ha permitido profundizar en la programación frontend y crear una experiencia educativa y divertida para los más niños y jovenes.");
}



//VERIFICACION DE OBJETOS (1280 X 1024)
function verificar() {
    alert("La Tierra: Nuestro hogar, el único planeta conocido que alberga vida. Tiene una atmósfera única que permite la existencia de agua en estado líquido, un requisito clave para la vida tal como la conocemos.");
};

function verificar1() {
    alert("Mercurio: El planeta más cercano al Sol y el más pequeño del sistema solar. Tiene una superficie rocosa y está cubierto de cráteres. Su temperatura varía enormemente debido a la falta de atmósfera para retener el calor.");
};

function verificar2() {
    alert("Venus: Conocido como el planeta hermano de la Tierra debido a su tamaño y composición similares, aunque su atmósfera es extremadamente densa y está compuesta principalmente de dióxido de carbono, lo que crea un efecto invernadero descontrolado y una temperatura de superficie extremadamente alta.");
};
    
function verificar3() {
    alert("Marte: Conocido como el planeta rojo debido a su color característico, Marte tiene una atmósfera delgada y fría. Ha capturado la imaginación de las personas como un lugar donde podría existir vida pasada o presente.");
};
    
function verificar4() {
    alert("Júpiter: El planeta más grande del sistema solar, es un gigante gaseoso compuesto principalmente de hidrógeno y helio. Tiene una gran mancha roja, una tormenta gigante que ha estado activa durante siglos.");
};
    
function verificar5() {
    alert("Las estrellas: Las estrellas son gigantescas esferas de gas caliente que brillan con luz propia debido a la fusión nuclear en sus núcleos. Son los bloques de construcción fundamentales del universo, ya que generan y dispersan elementos químicos vitales para la formación de planetas, vida y todo lo que nos rodea. Las estrellas vienen en una variedad de tamaños, colores y edades, desde las enanas rojas más pequeñas y frías hasta las supergigantes azules más grandes y calientes. A lo largo de sus vidas, las estrellas experimentan cambios dramáticos, desde su nacimiento en nubes de gas y polvo hasta su eventual muerte en forma de enanas blancas, estrellas de neutrones o incluso agujeros negros, dejando un legado cósmico que perdura a lo largo de las edades.");
};
    
function verificar6() {
    alert("Saturno: Conocido por sus impresionantes anillos, Saturno es otro gigante gaseoso. Sus anillos están compuestos principalmente de partículas de hielo y roca, y son uno de los espectáculos más impresionantes del sistema solar.");
};

function verificar7() {
    alert("Urano: Un gigante de hielo con un eje de rotación inclinado casi 90 grados respecto a su plano orbital, lo que hace que gire de lado. Tiene anillos y una serie de lunas interesantes.");
};
    
function verificar8() {
    alert("Neptuno: El planeta más alejado del Sol, es otro gigante de hielo. Tiene vientos extremadamente rápidos y una gran mancha oscura similar a la mancha roja de Júpiter.");
};

function verificar9() {
    alert("El Sol: En el vasto universo, el sol se alza como una estrella única y poderosa, irradiando luz y calor a través del espacio vacío. Su presencia es la fuente de vida en nuestro sistema solar, proporcionando energía a todos los planetas que lo orbitan. Con su brillante resplandor, el sol nos recuerda la inmensidad y la belleza del cosmos, y nos invita a reflexionar sobre nuestro lugar en el universo.");
};

function verificar10() {

    alert("Los satélites, tanto naturales como artificiales, juegan un papel crucial en nuestra comprensión y exploración del espacio. Desde la Luna que ilumina nuestras noches hasta los satélites de comunicación que nos conectan globalmente, estos cuerpos en órbita nos ofrecen una ventana al universo y nos permiten realizar avances tecnológicos y científicos que de otra manera serían imposibles. Su presencia en el espacio nos recuerda la vastedad y la belleza de nuestro cosmos, inspirándonos a seguir explorando y descubriendo los misterios del universo.");
};

function verificar11() {
    alert("Galaxia de Andrómeda (M31): Es la galaxia más grande del Grupo Local, que también incluye a la Vía Láctea. Es una galaxia espiral similar a la Vía Láctea y se encuentra a unos 2.5 millones de años luz de distancia. En el futuro, se espera que Andrómeda y la Vía Láctea colisionen y se fusionen en una sola galaxia.");
};


function verificar12() {
    alert("Vía Láctea: Nuestra galaxia, en la que se encuentra el sistema solar. Es una galaxia espiral barrada que contiene entre 200 y 400 mil millones de estrellas, incluido nuestro Sol. La Vía Láctea tiene varios brazos espirales, y el sistema solar se encuentra en uno de ellos, llamado el Brazo de Orión.");
};