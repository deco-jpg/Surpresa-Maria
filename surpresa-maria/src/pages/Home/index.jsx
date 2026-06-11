import './style.css';
import foto1 from '../../assets/casal1.jpeg';
import carro from '../../assets/carro.jpeg';
import fotoespelho from '../../assets/fotoespelho.jpeg';
import buque from '../../assets/buque.jpeg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <><div className="titulo">
            <h1>
                O que é isso?
            </h1>
            <p>
                Fiz essa página para mostrar o quanto eu te amo, e o quanto você é importante para mim. Você é a pessoa mais incrível que eu
                já conheci, e eu sou muito grato por ter você na minha vida. Eu te amo muito, e quero passar o resto da minha vida ao seu lado.
            </p>
        </div>
            <div className="mensagem1">
                <p>
                    O nosso primeiro encontro foi tão especial para mim, e eu nunca vou esquecer aquele day.
                    Eu me senti tão feliz e sortudo por estar com você, e eu sabia que queria passar mais tempo com você.
                    Desde então, cada momento que passamos juntos tem sido incrível, e eu sou muito grato por ter você na minha vida.
                    Eu te amo muito, e quero passar o resto da minha vida ao seu lado.
                    <img src={foto1} alt="primeiro encontro" />
                </p>
            </div>

            <div className="mensagem2">
                <p>
                    Essa foto foi tirada por mim enquanto estávamos indo para a sua casa, e eu me lembro de como eu estava nervoso e animado ao mesmo tempo.
                    Eu estava tão feliz por estar com você, e eu sabia que queria passar mais tempo com você.
                    <img src={carro} alt="foto no carro" />
                </p>
            </div>

            <div className="mensagem3">
                <p>
                    Eu te amo muito, e quero passar o resto da minha vida ao seu lado.
                    <img src={fotoespelho} alt="Foto no espelho" />
                </p>
            </div>

            <div className="mensagem4">
                <p>
                    E aqui foi o dia em que eu te pedi em namoro.
                </p>
                <p>
                    Eu estava tão feliz e contente por te ver feliz pelo buquê e pelo pedido.
                </p>
                <img src={buque} alt="buque" />
            </div>

            <div className="mensagem5">
                <p>
                    Explora essa página e veja o quanto eu te amo.
                </p>
            </div>

           
           
        </>



    )
}