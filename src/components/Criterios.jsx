import './criterios.css'

function Criterios() {
  return (
    <div className='container grid criterios'>
        <div>
            <h1>Criterios de la empresa:</h1>
            <h2>1-Exelencia técnica y calidad del desarrollo:</h2>
            <p>Compromiso con los estándares de 
programación, arquitectura de software sólida, testing exhaustivo y optimización 
de rendimiento.</p>

            <h2>2-innovacion tecnológica:</h2>
            <p>Enfoque en la adopción de tecnologías de 
vanguardia, desarrollo de soluciones creativas y adaptación a las últimas 
tendencias del mercado.</p>

            <h2>3-Seguridad y protección de datos:</h2>
            <p>Implementación de sólidas medidas de 
ciberseguridad, cifrado de datos, protección de la privacidad y cumplimiento de 
estándares de seguridad de la información.</p>

            <h2>4-Escalabilidad de las soluciones:</h2>
            <p>Capacidad para diseñar soluciones web y 
tecnológicas que puedan crecer y adaptarse a las necesidades cambiantes de los 
clientes y del mercado.</p>

            <h2>5-Gestión de proyectos eficiente:</h2>
            <p>Habilidad para gestionar proyectos 
complejos de desarrollo, utilizando metodologías ágiles, gestión de recursos y 
comunicación efectiva.</p>

            <h2>6- Satisfacción del cliente:</h2>
            <p>Orientación clara hacia la comprensión de las 
necesidades del cliente, comunicación efectiva y entrega oportuna de productos y 
servicios de calidad.</p>

            <h2>7- Gestión del talento técnico:</h2>
            <p>Atracción, retención y desarrollo del talento 
en áreas de desarrollo web y tecnologías, así como la creación de un entorno de 
trabajo estimulante y colaborativo.</p>
 
        </div>
        <div>
            <div className='organigrama'>
                <h1>Estructura organisacional de la empresa</h1>
                <div className='nivel-3'>
                    <div>Jerencia General</div>
                </div>
                <div className='nivel-2'>
                    <div>dep. de desarrollo <span></span></div>
                    <div>dep. de diseño <span></span></div>
                </div>
                <div className='nivel-1'>
                    <div>fronten <span></span></div>
                    <div>backend <span></span></div>
                    <div>backend <span></span></div>
                    <div>diseño grafico <span></span></div>
                    <div>diseño UX <span></span></div>
                    <div>diseño UI <span></span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Criterios