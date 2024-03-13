import './contact.css'

function Contact() {
    return (
        <div className='container grid contact'>
            <div>
                <h1>Contáctanos</h1>
                <p>Consulta tus requerimientos o detalles de tu proyecto</p>

                <p>Empecemos a desarrollar tu sitio web para formalizar tu empresa o emprendimiento, para asi transmitir seguridad y confianza a tus clientes.</p>
                
                <form action="#">
                    <div>
                        <label>
                            <input type='text' required/>
                            <span>Nombre</span>
                        </label>
                        <label>
                            <input type='text' required/>
                            <span>Telefono</span>
                        </label>
                        <label>
                            <input type='text' required/>
                            <span>Correo</span>
                        </label>
                    </div>
                    
                    <div>
                        <label>
                            <textarea name="" id=""></textarea>
                            <span>Escribeme</span>
                        </label>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
            <div>
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=10.193542,-64.669736+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
        </div>
    )
}

export default Contact