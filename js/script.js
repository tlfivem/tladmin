var music=document.getElementById("music"),isPlaying=!0,button=document.getElementById("toggle");function togglePlay(){isPlaying?music.pause():music.play()}isPlaying&&button.classList.add("rainbow-text"),music.volume=.2,music.onplaying=function(){isPlaying=!0},music.onpause=function(){isPlaying=!1};
window.onload = function() {
    document.getElementById("song").play();
}