import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App' //Importamos al componente que queremos renderizar
import { Header } from './Header'


const root = createRoot(document.getElementById('root'))

//Componente es una funcion que devuelve un elemento



root.render(
    <React.Fragment>
        <Header/>
        <App/>
    </React.Fragment>
)