import './style.css';

export default function Cartinhas() {
    const cartinhas = [
        {
            titulo: 'Encontrei o meu amor',
            texto: 'Eu não estava procurando amor. Estava ocupado vivendo. Aí você apareceu e transformou a minha vida na melhor parte do meu dia.'
        },
        {
            titulo: 'Meu coração ri alto',
            texto: 'Meu coração, antes de você, era um lugar educado e silencioso. Agora ele ri alto, dança sem motivo e faz escândalo só de ouvir seu nome.'
        },
        {
            titulo: 'Perdendo o controle',
            texto: 'Se amar você é perder o controle, então nem quero me encontrar. Porque me perder em você é o único lugar onde eu me sinto inteiro.'
        }
    ];

    return (
      <><div className="cartinhas">
            <h1>Cartinhas para Você 💌</h1>

            {cartinhas.map((cartinha, index) => (
                <article className="card-cartinha" key={index}>
                    <h2>{cartinha.titulo}</h2>
                    <p>{cartinha.texto}</p>
                </article>
            ))}
        </div>
        <div className="ultima-cartinha">
                <h2>Uma última coisa...</h2>
                <p>
                    Se você chegou até aqui, saiba que cada foto, cada palavra e cada detalhe
                    desta página foram feitos pensando em você. Obrigado por fazer os meus dias
                    mais felizes. Eu te amo. ❤️
                </p>
            </div></>
    );
}
    