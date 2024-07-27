// script.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    const body = document.querySelector('body');

    video.addEventListener('loadeddata', () => {
        body.style.backgroundImage = 'none'; // Masquer l'image de fond une fois la vidéo chargée
    });
});
