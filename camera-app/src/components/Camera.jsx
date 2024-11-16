import React, { useRef, useEffect, useState } from 'react';
import './Camera.css'; // Asegúrate de tener los estilos
import { FaAdjust, FaRegSave, FaVideo, FaPause, FaCamera } from 'react-icons/fa';

function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [photoCaptured, setPhotoCaptured] = useState(false);
    const [filter, setFilter] = useState('none');
    const [photoPreview, setPhotoPreview] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [videoURL, setVideoURL] = useState(null);
    const [photoCount, setPhotoCount] = useState(0);
    const [photoName, setPhotoName] = useState('');

    // Inicia la cámara
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);
            }
        } catch (error) {
            console.error("Error al acceder a la cámara:", error);
        }
    };

    useEffect(() => {
        startCamera();
    }, []);

    // Captura la foto con el filtro aplicado
    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Aplica el filtro antes de capturar la imagen
        context.filter = filter;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPhotoCaptured(true);
        setPhotoCount(photoCount + 1);
        setPhotoPreview(canvas.toDataURL()); // Guarda la imagen capturada
    };

    // Función para descargar la foto
    const downloadPhoto = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = photoName || 'captura.png';
        link.href = canvas.toDataURL(); // Asegura que se descargue la imagen con el filtro aplicado
        link.click();
    };

    // Comienza la grabación de video
    const startRecording = () => {
        if (mediaRecorder && mediaRecorder.state !== 'recording') {
            mediaRecorder.start();
            setIsRecording(true);
        }
    };

    // Detiene la grabación de video
    const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    useEffect(() => {
        if (mediaRecorder) {
            mediaRecorder.ondataavailable = (event) => {
                const videoBlob = event.data;
                const videoURL = URL.createObjectURL(videoBlob);
                setVideoURL(videoURL);
            };
        }
    }, [mediaRecorder]);

    // Actualiza el nombre de la foto
    const handlePhotoNameChange = (e) => setPhotoName(e.target.value);

    // Añade nuevos filtros
    const additionalFilters = [
        { label: 'Desenfoque', value: 'blur(5px)' },
        { label: 'Rotar Colores', value: 'hue-rotate(90deg)' },
        { label: 'Saturar', value: 'saturate(2)' },
    ];

    return (
        <div className="camera-container">
            <h1 className="camera-title">CamVo</h1>

            <div className="video-container">
                <video ref={videoRef} autoPlay className="video" style={{ filter, transform: 'scaleX(-1)', zoom }} />
                <canvas ref={canvasRef} className="canvas"></canvas>
            </div>

            <div className="photo-count-container">
                <h3>Fotos Capturadas: {photoCount}</h3>
            </div>

            <div className="filter-container">
                <button onClick={() => setFilter('none')} className="filter-button">
                    <FaAdjust /> Sin Filtro
                </button>
                <button onClick={() => setFilter('grayscale(100%)')} className="filter-button">
                    <FaAdjust /> Blanco y Negro
                </button>
                <button onClick={() => setFilter('sepia(100%)')} className="filter-button">
                    <FaAdjust /> Sepia
                </button>
                <button onClick={() => setFilter('invert(100%)')} className="filter-button">
                    <FaAdjust /> Invertir Colores
                </button>
                <button onClick={() => setFilter('brightness(1.5)')} className="filter-button">
                    <FaAdjust /> Brillo
                </button>
                <button onClick={() => setFilter('contrast(2)')} className="filter-button">
                    <FaAdjust /> Contraste
                </button>

                {/* Filtros adicionales */}
                {additionalFilters.map((filterOption, index) => (
                    <button key={index} onClick={() => setFilter(filterOption.value)} className="filter-button">
                        <FaAdjust /> {filterOption.label}
                    </button>
                ))}
            </div>

            <div className="zoom-container">
                <button onClick={() => setZoom(zoom + 0.1)} className="zoom-button">Zoom +</button>
                <button onClick={() => setZoom(zoom - 0.1)} className="zoom-button">Zoom -</button>
            </div>

            <div className="photo-name-container">
                <input
                    type="text"
                    placeholder="Nombre de la foto"
                    value={photoName}
                    onChange={handlePhotoNameChange}
                    className="photo-name-input"
                />
            </div>

            <div className="button-container">
                <button onClick={capturePhoto} className="button">
                    {photoCaptured ? 'Retomar Foto' : 'Tomar Foto'}
                </button>
                {photoCaptured && (
                    <button onClick={downloadPhoto} className="button download-button">
                        <FaRegSave /> Descargar Foto
                    </button>
                )}
            </div>

            <div className="video-button-container">
                {!isRecording ? (
                    <button onClick={startRecording} className="button">
                        <FaVideo /> Grabar Video
                    </button>
                ) : (
                    <button onClick={stopRecording} className="button">
                        <FaPause /> Detener Grabación
                    </button>
                )}
            </div>

            {videoURL && !isRecording && (
                <div className="video-preview-container">
                    <h2>Vista previa del video:</h2>
                    <video src={videoURL} controls className="video-preview" />
                </div>
            )}

            {photoCaptured && (
                <div className="photo-preview-container">
                    <h2>Vista previa de la foto:</h2>
                    <img src={photoPreview} alt="Vista previa" className="photo-preview" />
                </div>
            )}
        </div>
    );
}

export default Camera;
