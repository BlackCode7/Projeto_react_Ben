import React from 'react'
import CardTweet from './components/pageTweets/CardTweet/CardTweet'; 
import './App.css';


const App = () => { 
  
  {/*ConstPromocion do video*/}
  const tweetada = {
    "id": 1,
    "titulo": "Primeiro título",
    "nome": "Anderson",
    "data": "03/07/2021",
    "comentarios": [
      {
        "id": 1,
        "comentario": "texto de comentario do tweet"
      }
    ],
    "imageUrl": "https://i.ytimg.com/vi/YzYIt_4mvMM/maxresdefault.jpg"
  }
  
  return (
    <div className="App">
      <CardTweet tweetada={tweetada}></CardTweet>
    </div>
  );  
}

export default App;
