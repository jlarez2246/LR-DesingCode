import React from 'react'
import './home.css'

function Home() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='container grid home'>
            <div>
                <h1>
                    L&R Desing Code. <br />
                    Expertos en <br />
                    Desarrollo Web
                </h1>
                <p>¡Que podemos hacer por usted!</p>
                <p>Sabemos la importancia de tener presencia en internet, es por eso que te haremos destacar ante la competencia con un excelente desarrollo web, adaptable, administrable, atractivo y posicionado en Google.</p>
                <button>Contactame</button>
            </div>
            <div className='boxx'>
                <div className='box'>
                    {numbers.map((number) => (
                        <div key={number} style={{ '--i': number }}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home