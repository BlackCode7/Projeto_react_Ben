import React from 'react'
import './CardTweet.css'

    const pageTweets = ({ tweetada }) => (
        <div>
            <p>{tweetada.nome} {tweetada.data}</p>
            <h1>{tweetada.titulo}</h1>
            <img src={tweetada.imageUrl}/>
            <footer>
                {/* Condiconal rendering, se tiver algum comentario ele imprime este bloco*/}
                {tweetada.comentarios.length > 0 && (
                    <div>{tweetada.comentarios[0].comentario}</div>
                )}
                <div>{tweetada.comentarios.length} Comentários do tweet</div>
            </footer>
        </div>
    );

export default pageTweets