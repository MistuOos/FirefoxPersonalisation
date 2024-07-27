// js/script.js

document.addEventListener("DOMContentLoaded", function() {
    const videoSource = document.getElementById('video-source');
    const backgroundOverlay = document.querySelector('.background-overlay');

    // Liste des fichiers vidéo et des images de fond
    const videos = [
        { video: 'FondEcran_1.mp4', background: 'FondEcran_1.jpg' },
        { video: 'FondEcran_2.mp4', background: 'FondEcran_2.jpg' },
        { video: 'FondEcran_3.mp4', background: 'FondEcran_3.jpg' }
        // Ajoutez ici les noms de vos autres vidéos et images de fond
    ];

    // Choisir un fichier vidéo et une image de fond au hasard
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];

    // Mettre à jour la source de la vidéo
    videoSource.src = `video/${selectedVideo.video}`;

    // Mettre à jour l'image de fond
    backgroundOverlay.style.backgroundImage = `url('img/${selectedVideo.background}')`;

    // Recharger la vidéo
    const video = document.getElementById('background-video');
    video.load();
});
