// Seleccionamos los elementos de video y canvas
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');

// Función para acceder a la cámara
async function startCamera() {
    try {
        // Solicitamos acceso a la cámara del usuario
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Asignamos el flujo de video al elemento de video en la página
        video.srcObject = stream;
    } catch (error) {
        console.error("Error al acceder a la cámara:", error);
    }
}

// Llamamos a la función para iniciar la cámara cuando la página carga
startCamera();

// Función para capturar una foto del video
function capturePhoto() {
    const context = canvas.getContext('2d');
    // Ajustamos el tamaño del canvas al tamaño del video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // Dibujamos la imagen del video en el canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Evento para capturar la foto cuando se hace clic en el botón
captureButton.addEventListener('click', capturePhoto);
