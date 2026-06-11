import { useState } from 'react';
import './style.css';
import fotoFinal from '../../assets/beijao.jpeg';

export default function Surpresa() {
    const [aberta, setAberta] = useState(false);

    return (
        <div className="surpresa">

            {!aberta ? (
                <div
                    className="envelope"
                    onClick={() => setAberta(true)}
                >
                    💌
                    <p>Clique para abrir sua carta ❤️</p>
                </div>
            ) : (
                <>
                    <div className="chuva-coracoes">
                        {[...Array(40)].map((_, i) => (
                            <span
                                key={i}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${4 + Math.random() * 6}s`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    fontSize: `${18 + Math.random() * 24}px`
                                }}
                            >
                                ❤️
                            </span>
                        ))}
                    </div>

                    <div className="coracao-pulsando">
                        ❤️
                    </div>

                    <h1>Se você chegou até aqui...</h1>

                    <img
                        src={fotoFinal}
                        alt="Nós dois"
                        className="foto-final"
                    />

                    <div className="carta-final">
                        <p>
                            Eu fiz cada página deste site pensando em você.
                        </p>

                        <p>
                            Cada foto, cada mensagem e cada detalhe existe porque você transformou a minha vida em algo muito mais bonito.
                        </p>

                        <p>
                            Obrigado por todos os momentos, por cada sorriso, por cada abraço e por ser exatamente quem você é.
                        </p>

                        <p>
                            Você é a minha pessoa favorita no mundo inteiro.
                        </p>

                        <h2>
                            Eu te amo hoje, amanhã e em todos os dias que vierem ❤️
                        </h2>
                    </div>
                </>
            )}
        </div>
    );
}