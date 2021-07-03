import React from 'react'
import './CardTweet.css'

    const pageTweets = ({ tweetada }) => (
        <div className="cardtweet-css">            
            <div className="cardtweet-css_titulo-image-coment">
                <p className="cardtweet-css_nome-data">{tweetada.nome} {tweetada.data}</p>
                <h1 className="cardtweet-css_titulo">{tweetada.titulo}</h1>
                <img src={tweetada.imageUrl} className="cardtweet-css_image"/>
                <footer className="cardtweet-css_comentario">
                    {/* Condiconal rendering, se tiver algum comentario ele imprime este bloco*/}
                    {tweetada.comentarios.length > 0 && (
                        <div>"{tweetada.comentarios[0].comentario}"</div>
                    )}
                    <div className="contador">
                        {tweetada.comentarios.length} 
                        {tweetada.comentarios.length > 1 ? 'comentarios': 'comentario'}
                    </div>
                    <button className="botao">Savar</button>
                </footer>
            </div>
            
        </div>
    );

export default pageTweets