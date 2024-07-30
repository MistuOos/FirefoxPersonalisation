/* ------------------- Refresh cash on reload ------------------- */


/* ------------------- Affichage Fond Ecran ------------------- */
document.addEventListener("DOMContentLoaded", function (){
    const videoSource = document.getElementById('video-source');
    const backgroundOverlay = document.querySelector('.background-overlay');

    // Liste des fichiers vidéo et des images de fond
    const videos = [
        {video: 'FondEcran_1.mp4', background: 'FondEcran_1.png'},
        {video: 'FondEcran_2.mp4', background: 'FondEcran_2.png'},
        {video: 'FondEcran_3.mp4', background: 'FondEcran_3.png'},
        {video: 'FondEcran_4.mp4', background: 'FondEcran_4.png'},
        {video: 'FondEcran_5.mp4', background: 'FondEcran_5.png'},
        {video: 'FondEcran_6.mp4', background: 'FondEcran_6.png'},
        {video: 'FondEcran_7.mp4', background: 'FondEcran_7.png'},
        {video: 'FondEcran_8.mp4', background: 'FondEcran_8.png'},
        {video: 'FondEcran_9.mp4', background: 'FondEcran_9.png'},
        {video: 'FondEcran_10.mp4', background: 'FondEcran_10.png'},
        {video: 'FondEcran_11.mp4', background: 'FondEcran_11.png'},
        {video: 'FondEcran_12.mp4', background: 'FondEcran_12.png'},
        {video: 'FondEcran_13.mp4', background: 'FondEcran_13.png'},
        {video: 'FondEcran_14.mp4', background: 'FondEcran_14.png'},
        {video: 'FondEcran_15.mp4', background: 'FondEcran_15.png'},
        {video: 'FondEcran_16.mp4', background: 'FondEcran_16.png'},
        {video: 'FondEcran_17.mp4', background: 'FondEcran_17.png'},
        {video: 'FondEcran_18.mp4', background: 'FondEcran_18.png'},
        {video: 'FondEcran_19.mp4', background: 'FondEcran_19.png'},
        {video: 'FondEcran_20.mp4', background: 'FondEcran_20.png'}
        // Ajoutez ici les noms de vos autres vidéos et images de fond
    ];

    // Choisir un fichier vidéo et une image de fond au hasard
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];

    // Mettre à jour l'image de fond
    backgroundOverlay.style.backgroundImage = `url('img/Background/${selectedVideo.background}')`;

    /*
    setTimeout(function() {
        // Mettre à jour la source de la vidéo
        videoSource.src = `video/${selectedVideo.video}`;

        // Recharger la vidéo
        const video = document.getElementById('background-video');
        video.load();
    }, 3000); // 3000 millisecondes = 5 secondes
    */
    // Mettre à jour la source de la vidéo
    videoSource.src = `video/${selectedVideo.video}`;


    // Recharger la vidéo
    const video = document.getElementById('background-video');
    video.load();
});

/* ------------------- Barre de recherche ------------------- */
function performSearch(event){
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    const query = document.getElementById('msg').value;
    if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank'); // Ouvre un nouvel onglet avec l'URL de recherche
    }
    document.getElementById('msg').value = '';
}

/* ------------------- YTB Raccourci ------------------- */
document.getElementById('youtubeShortcut').addEventListener('click', function (){
    window.open('https://www.youtube.com', '_blank');
});

/* ------------------- Twitch Raccourci ------------------- */
document.getElementById('twShortcut').addEventListener('click', function (){
    window.open('https://www.twitch.tv/', '_blank');
});

/* ------------------- Gmail Raccourci ------------------- */
document.getElementById('GmailShortcut').addEventListener('click', function (){
    window.open('https://mail.google.com', '_blank');
});

/* ------------------- UTT Raccourci ------------------- */
document.getElementById('UttShortcut').addEventListener('click', function (){
    window.open('https://cas.utt.fr/cas/login?service=https://ent2.utt.fr/uPortal/Login', '_blank');
});


