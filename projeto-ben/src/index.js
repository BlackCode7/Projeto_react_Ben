import './index.css'
//O importe desta lib é fundamental pra poder usar o jsx
// Porque ele mistura codigo html com javascript
import React from 'react'
import ReactDOM from 'react-dom'
// importando primeiro componente dentro de componentes
import Primeiro from './components/Primeiro'
// Importando componentes com parametros de
import ComParametro from './components/ComParametro'
// importando componente Menu.jsx
import Menu from './components/css/Menu'


// Recebe os elementos para fazer renderização
ReactDOM.render(
    // precisa das <div> pra colocar mais de 1 elemento dentro
    <div>
        <Menu></Menu>
        <Primeiro></Primeiro>

        <ComParametro 
        titulo="TituloComParametro"
        Subtitulo="SubtituloComParametro">
        </ComParametro>

    </div>,    
    document.getElementById('root')
)