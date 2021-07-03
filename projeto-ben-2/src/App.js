import React from 'react'
import CardTweet from './components/pageTweets/CardTweet/CardTweet';



const App = () => { 
  
  {/*ConstPromocion do video*/}
  const tweetada = {
    "id": 1,
    "titulo": "O futuro pela transformação da tecnologia e inovação",
    "nome": "Anderson",
    "data": "03/07/2021",
    "comentarios": [
      {
        "id": 1,
        "comentario": "Os desafios tecnológicos da atividade de produção de petróleo em águas profundas tem demandado capacidade técnica e inovação há mais de 30 anos. Esse é o cenário que envolve nosso Centro de Pesquisa, e Desenvolvimento e Inovação (Cenpes), instalado em uma área total de 300 mil metros quadrados, no Rio de Janeiro."
      }
    ],
    "imageUrl": "https://nossaenergia.petrobras.com.br/media/uploads/posts_tiny/2020/06/cenpes-interna.jpg.1280x0_q85_crop.jpg"
  }
  
  return (
    <div 
    className="App" 
    style={{
      maxWidth:800,
      margin: '30px auto'
    }}
    >
      
      <CardTweet tweetada={tweetada}></CardTweet>
      {/* APAGAR AQUI PRA BAIXO - ISSO FOI SO TESTE */}
      <CardTweet tweetada={tweetada}></CardTweet>
      <CardTweet tweetada={tweetada}></CardTweet>
      <CardTweet tweetada={tweetada}></CardTweet>
    </div>
  );  
}

export default App;
