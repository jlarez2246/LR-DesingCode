import React, { useEffect } from 'react'
import './skills.css'
import TagCloud from 'TagCloud'

function Skills() {
    const percentage = 50
    const circleWidth = 200
    const radius = 85
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100

    useEffect(() => {
        return () => {
            const container = '.tagcloud'
            const texts = [
                'HTML',
                'CSS',
                'SCSS',
                'JavaScript',
                'React',
                'vue',
                'Nuxt',
                'NodeJS',
                'Babel',
                'JQuery',
                'ES6',
                'GIT',
                'AgularJS',
                'TypeScript',
                'PHP',
                'Python',
                'Larabel',
                'Worpress',
                'Ruby',
                'Astro',
                'MySQL',
                'MariaDB',
                'NoSQL',
                'SQL',
                'Stylus',
                'Django',
                'java',
                'C++',
                'Oracle',
                'C#',
                'MongoDB',
                'Kotlin',
                'CEO'
            ];

            const options = {
                radius: 250,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            }
            TagCloud(container, texts, options)
        }
    }, []);
    return (
        <div className='container grid skill'>
            <div>
                <h1>Habilidades</h1>
                <p>El area principal de nuestra experiencia radica en el desarrollo front-end y back-end. Tenemos experiencia en HTML5, CSS3, JS, PHP, SQL, Node JS, React Js, Python, Oracle, SEO, crear aplicaciones web, aplicativos android y Sistemas web. Asimismo en el desarrollo completo con CMS de código abierto como WordPress, Drupal, Magento y otros</p>
                
                <div className='valores'>
                    <div>
                        <i className='bx bx-donate-heart'></i>
                        <h3>Solidaridad</h3>
                    </div>
                    <div>
                        <i className='bx bxl-mongodb'></i>
                        <h3>Onestidad</h3>
                    </div>
                    <div>
                        <i className='bx bx-heart-circle'></i>
                        <h3>Compromiso</h3>
                    </div>
                </div>
            </div>


            <div>
                <div>

                <div className='text-shpere'>
                    <span className='tagcloud'></span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Skills