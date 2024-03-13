import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const links = [
    {
        name: 'Inicio',
        href: './',
        icon: 'bx bx-home-alt'
    },
    {
        name: 'Acerca_de',
        href: './about',
        icon: 'bx bx-user'
    },
    {
        name: 'Habilidades',
        href: './skills',
        icon: 'bx bx-cog'
    },
    {
        name: 'Tienda',
        href: './tienda',
        icon: 'bx bxs-store'
    },
    {
        name: 'Proyectos',
        href: './proyectos',
        icon: 'bx bx-folder'
    },
    {
        name: 'Contactos',
        href: './contact',
        icon: 'bx bx-map'
    },
    {
        name: 'Criterios',
        href: './criterios',
        icon: 'bx bx-vector'
    },
]

function NavBar() {
    const [menu, setMenu] = useState(false)

    const desplegarMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav>
            <div>
                <span 
                    className='logo'
                ><i class='bx bxl-sketch'></i></span>
            </div>
            <ul className={menu ? 'menuActive' : ''}>
                {
                links.map(item => (
                    <li>
                        <Link to={item.href}>
                            <span><i className={item.icon}></i></span> <span>{item.name}</span>
                        </Link>
                    </li>
                ))
                }
            </ul>
            <div className='redes'>
                <span><i class='bx bxl-facebook'></i></span>
                <span><i class='bx bx-envelope'></i></span>
            </div>
            <div className='menu'>
                <label className="hamburger">
                    <input type="checkbox" onClick={desplegarMenu} />
                    <svg viewBox="0 0 32 32">
                        <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path class="line" d="M7 16 27 16"></path>
                    </svg>
                </label>

            </div>
        </nav>
    )
}

export default NavBar