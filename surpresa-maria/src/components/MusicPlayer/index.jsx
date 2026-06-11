import { useState } from 'react';
import music from '../../assets/music.mp3';
import './style.css';

export default function MusicPlayer() {
    const [minimizado, setMinimizado] = useState(false);

    return (
        <div className={`player-musica ${minimizado ? 'mini' : ''}`}>
            <div className="player-topo">
                <p>🎵 Toque para ouvir</p>

                <button
                    className="btn-player"
                    onClick={() => setMinimizado(!minimizado)}
                >
                    {minimizado ? '+' : '−'}
                </button>
            </div>

            <audio
                className="audio-player"
                controls
                loop
            >
                <source src={music} type="audio/mpeg" />
            </audio>
        </div>
    );
}