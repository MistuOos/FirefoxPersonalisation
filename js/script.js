// js/script.js

document.addEventListener("DOMContentLoaded", function() {
    const videoSource = document.getElementById('video-source');
    const backgroundOverlay = document.querySelector('.background-overlay');

    // Liste des fichiers vidéo et des images de fond
    const videos = [
        { video: 'FondEcran_1.mp4', background: 'FondEcran_1.jpg' },
        { video: 'FondEcran_2.mp4', background: 'FondEcran_2.jpg' },
        { video: 'FondEcran_3.mp4', background: 'FondEcran_3.jpg' },
        { video: 'FondEcran_4.mp4', background: 'FondEcran_4.jpg' },
        { video: 'FondEcran_5.mp4', background: 'FondEcran_5.jpg' },
        { video: 'FondEcran_6.mp4', background: 'FondEcran_6.jpg' },
        { video: 'FondEcran_7.mp4', background: 'FondEcran_7.jpg' },
        { video: 'FondEcran_8.mp4', background: 'FondEcran_8.jpg' },
        { video: 'FondEcran_9.mp4', background: 'FondEcran_9.jpg' },
        { video: 'FondEcran_10.mp4', background: 'FondEcran_10.jpg' },
        { video: 'FondEcran_11.mp4', background: 'FondEcran_11.jpg' },
        { video: 'FondEcran_12.mp4', background: 'FondEcran_12.jpg' },
        { video: 'FondEcran_13.mp4', background: 'FondEcran_13.jpg' },
        { video: 'FondEcran_14.mp4', background: 'FondEcran_14.jpg' },
        { video: 'FondEcran_15.mp4', background: 'FondEcran_15.jpg' },
        { video: 'FondEcran_16.mp4', background: 'FondEcran_16.jpg' },
        { video: 'FondEcran_17.mp4', background: 'FondEcran_17.jpg' },
        { video: 'FondEcran_18.mp4', background: 'FondEcran_18.jpg' },
        { video: 'FondEcran_19.mp4', background: 'FondEcran_19.jpg' },
        { video: 'FondEcran_20.mp4', background: 'FondEcran_20.jpg' }
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
