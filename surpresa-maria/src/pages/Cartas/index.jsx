import './style.css';
import { Link } from 'react-router-dom';

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
        },
        {
    titulo: 'Seu sorriso',
    texto: 'Existem muitas coisas bonitas no mundo, mas poucas conseguem iluminar um dia inteiro como o seu sorriso ilumina o meu.'
},
{
    titulo: 'Meu lugar favorito',
    texto: 'Descobri que o meu lugar favorito não é uma cidade, uma praia ou um restaurante. Meu lugar favorito é qualquer lugar onde você esteja.'
},
{
    titulo: 'Pequenos momentos',
    texto: 'As pessoas falam muito sobre grandes momentos, mas os meus favoritos são os simples: conversar com você, ouvir sua voz e compartilhar o dia ao seu lado.'
},
{
    titulo: 'Você mudou tudo',
    texto: 'Antes de você, os dias eram apenas dias. Depois de você, cada momento ganhou mais cor, mais significado e mais felicidade.'
},
{
    titulo: 'Minha paz',
    texto: 'Em meio à correria da vida, você se tornou o lugar onde encontro calma, conforto e paz. Seu abraço parece ter o poder de melhorar qualquer dia.'
},
{
    titulo: 'Meu pensamento',
    texto: 'Entre todos os pensamentos que passam pela minha cabeça durante o dia, você continua sendo o meu favorito.'
},
{
    titulo: 'A melhor coincidência',
    texto: 'Se existe destino, ele foi generoso comigo. Se existe acaso, ele me deu o melhor presente possível quando colocou você no meu caminho.'
},
{
    titulo: 'Seu jeito',
    texto: 'Não é apenas a sua beleza que me encanta. É o seu jeito de rir, de falar, de cuidar das pessoas e de transformar momentos simples em lembranças especiais.'
},
{
    titulo: 'Cada detalhe',
    texto: 'Quanto mais tempo passa, mais eu percebo que me apaixono não apenas por quem você é, mas também por todos os pequenos detalhes que fazem você ser única.'
},
{
    titulo: 'Meu futuro favorito',
    texto: 'Quando penso no futuro, percebo que os planos ficam muito mais bonitos quando você faz parte deles.'
},
{
    titulo: 'Uma certeza',
    texto: 'Em um mundo cheio de dúvidas e mudanças, existe uma certeza que cresce todos os dias dentro de mim: eu amo você.'
},
{
    titulo: 'Obrigado por existir',
    texto: 'Às vezes me pego pensando em quantas coisas precisaram acontecer para que nossas histórias se cruzassem. E então percebo o quanto sou grato por isso.'
},
{
    titulo: 'Meu presente favorito',
    texto: 'A vida me deu muitos presentes ao longo do caminho, mas nenhum deles se compara à felicidade de ter você ao meu lado.'
},
{
    titulo: 'Você e eu',
    texto: 'Não importa se estamos vivendo um grande momento ou apenas dividindo o silêncio. Estar com você sempre faz tudo parecer melhor.'
},
{
    titulo: 'Para sempre',
    texto: 'Não sei exatamente como será o amanhã, mas sei que quero continuar criando memórias, colecionando sorrisos e vivendo momentos ao seu lado.'
},
{
    titulo: 'A última cartinha',
    texto: 'Se você chegou até aqui, significa que leu cada palavra que escrevi pensando em você. Mas ainda existe uma última coisa que eu gostaria de te mostrar... ❤️'
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

                <Link to="/surpresa" className="btn-surpresa">
                    🎁 Abrir surpresa final
                </Link>
            </div></>
    );
}
    