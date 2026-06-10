import music from '../../assets/music.mp3';
import './style.css';

export default function MusicPlayer() {
  return (
    <div className="player-musica">
      <p>🎵 Aperte o play antes de continuar 💕</p>

      <audio controls loop>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}