import React from 'react'
import './tienda.css'

const planes = [
    {
        h2: "Basico",
        price: '200$',
        li: [
            [true, 'Diseño Web Adaptable'],
            [true, 'Landing o 4 secciones'],
            [true, 'Hosting y dominio por 1 Año'],
            [true, 'Hasta 3 correos'],
            [false, 'SEO básico - Posicionamiento'],
            [true, 'Google maps & redes sociales'],
            [false, 'Galeria de productos'],
            [false, 'Web administrable'],
            [false, 'Seguridad SSL'],
            [false, 'Registro de Clientes'],
            [false, 'Carrito de compras'],
            [false, 'Modulo de Delivery'],
            [false, 'Control de Pedidos'],
            [false, 'Pasarela de Pago'],
            [false, '10Gb Almacenamiento'],
            [true, 'Entrega en 5 días']
        ]
    },
    {
        h2: "Emprededor",
        price: '700$',
        li: [
            [true, 'Diseño Web Adaptable'],
            [true, 'Hasta 7 secciones'],
            [true, 'Hosting y dominio por 1 Año'],
            [true, 'Hasta 5 correos'],
            [true, 'SEO básico - Posicionamiento'],
            [true, 'Google maps & redes sociales'],
            [true, 'Galeria de productos'],
            [false, 'Web administrable'],
            [true, 'Seguridad SSL'],
            [false, 'Registro de Clientes'],
            [false, 'Carrito de compras'],
            [false, 'Modulo de Delivery'],
            [false, 'Control de Pedidos'],
            [false, 'Pasarela de Pago'],
            [false, '10Gb Almacenamiento'],
            [true, 'Entrega en 10 días']
        ]
    },
    {
        h2: "Profecional",
        price: '1700$',
        li: [
            [true, 'Diseño Web Adaptable'],
            [true, 'Hasta 10 secciones'],
            [true, 'Hosting y Dominio .Com'],
            [true, 'Hasta 10 correos'],
            [true, 'SEO Estandar - Posicionamiento'],
            [true, 'Google maps & redes sociales'],
            [true, 'Catálogo de productos'],
            [true, 'Web administrable'],
            [true, 'Seguridad SSL'],
            [false, 'Registro de Clientes'],
            [false, 'Carrito de compras'],
            [false, 'Modulo de Delivery'],
            [false, 'Control de Pedidos'],
            [false, 'Pasarela de Pago'],
            [true, '10Gb Almacenamiento'],
            [true, 'Entrega en 15 días']
        ]
    },
    {
        h2: "E-Commerce",
        price: '2200$',
        li: [
            [true, 'Diseño Web Adaptable'],
            [true, 'Hasta 12 secciones'],
            [true, 'Hosting y Dominio .Com'],
            [true, 'Hasta 15 correos'],
            [true, 'SEO Estandar - Posicionamiento'],
            [true, 'Google maps & redes sociales'],
            [true, 'Catálogo de productos'],
            [true, 'Web administrable'],
            [true, 'Seguridad SSL'],
            [true, 'Registro de Clientes'],
            [true, 'Carrito de compras'],
            [true, 'Modulo de Delivery'],
            [true, 'Control de Pedidos'],
            [true, 'Pasarela de Pago'],
            [true, '10Gb Almacenamiento'],
            [true, 'Entrega en 20 días']
        ]
    }
]

function Tienda() {

    return (
        <div className='container'>
            <div className='tienda'>
                <h1>Planes web</h1>
                <p>Todos nuestros planes cuentan con un desarrollo de código depurado, optmizado, con buenas prácticas y modernas Tecnologías web, ya sea en el front o back-end</p>
                
                <div>
                    {
                        planes.map(plan => (
                            <div>
                                <h2>{plan.h2}</h2>
                                <p>desde</p>
                                <h3>{plan.price}</h3>
                                <ul>
                                    {
                                        plan.li.map(li => (
                                            <li className={li[0] ? 'sisa': 'none'}>{li[1]}</li>
                                        ))
                                    }

                                </ul>
                                <button>Comprar</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tienda