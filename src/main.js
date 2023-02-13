import './style.css';
import song from '../public/yang-terdalam.mp3';
console.log(song);

const audioElement = document.getElementById('song');
audioElement.src = song;
audioElement.controls = true;
