import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App' //Importamos al componente que queremos renderizar
import './Styles/Header.css'
import './Styles/Body.css'
import './Styles/Footer.css'


const root = createRoot(document.getElementById('root'))

//Componente es una funcion que devuelve un elemento



root.render(
    <React.Fragment>
        <App/>
    </React.Fragment>
)