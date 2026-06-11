import './style.css';
import foto3 from '../../assets/maria3.jpeg';
import foto2 from '../../assets/maria2.jpeg';
import foto4 from '../../assets/maria4.jpeg';
import foto5 from '../../assets/maria5.jpeg';
import foto1 from '../../assets/maria1.jpeg';
import casal1 from '../../assets/casal1.jpeg';
import buque from '../../assets/buque.jpeg';
import viagem from '../../assets/viagem.jpeg';
import aniversario from '../../assets/aniversario.jpeg';
import deitados from '../../assets/deitados.jpeg';
import brincando from '../../assets/brincando.jpeg';
import praia from '../../assets/praia.jpeg';


export default function Galeria() {
    const fotos = [
        {
            imagem: foto3,
            alt: 'Beijo',
            legenda: 'O fotão ❤️'
        },
        {
            imagem: foto2,
            alt: 'Sentados na praça',
            legenda: 'Uma noite especial 🌹'
        },
        
        {
            imagem: foto5,
            alt: 'Voltando do jantar',
            legenda: 'Uma das mais bonitas 💜'
        },
        {
            imagem: foto1,
            alt: 'Açãí',
            legenda: 'Toda feliz tomando açaí 🍧'
        },
        {
            imagem: casal1,
            alt: 'Prieiro encontro',
            legenda: 'Nosso primeiro encontro 🤗'
        },
        {
            imagem: foto4,
            alt: 'Foto no Cristo',
            legenda: 'Fotinha depois de um bom passeio na Barra 🌊'
        },
        {
            imagem: buque,
            alt: 'Buque',
            legenda: 'De quando te pedi em namoro 💜'
        },
        {
            imagem: viagem,
            alt: 'Viagem',
            legenda: 'Nossa viagem para Salvador 🏖️'
        },
        {
            imagem: aniversario,
            alt: 'Beijo',
            legenda: 'Aniverário em familia ❤️'
        },
        {
            imagem: deitados,
            alt: 'deitados',
            legenda: 'Deitados pós almoço🥰'
        },
        {
            imagem: brincando,
            alt: 'Brincando',
            legenda: 'Brincando com as crianças 🎈'
        },
        {
            imagem: praia,
            alt: 'praia',
            legenda: 'Curtindo a praia com a sogra e familia 🌊'
        }
    ];

    return (
        <>
            <div className="galeria-header">
                <h1>Galeria</h1>
                <p>Aqui estão algumas das nossas fotos favoritas!</p>
            </div>

            <div className="galeria">
                {fotos.map((foto, index) => (
                    <div className="card-foto" key={index}>
                        <img src={foto.imagem} alt={foto.alt} />
                        <p>{foto.legenda}</p>
                    </div>
                ))}
            </div>
        </>
    );
}