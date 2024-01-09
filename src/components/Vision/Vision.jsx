import React, { useEffect } from 'react'
import './Vision.scss'
// animation
import Aos from 'aos';


const Vision = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div className='mision section'>
            <div className="secContainer container">
                <div className="contain" data-aos="fade-up">

                    <div className='main grid'>
                        <div className='span' data-aos="fade-up">
                            <h2>Misión</h2>
                            <p>Impulsar y contribuir en el desarrollo personal y profesional de las mujeres a través de programas de empoderamiento y liderazgo en espacios compartidos de trabajo.</p>
                        </div>

                        <div className='span' data-aos="fade-up">
                            <h2>Visión</h2>
                            <p>Ser una plataforma de impulso para mujeres de toda la Republica Mexicana.</p>
                        </div>
                    </div>

                    <div className='programa' data-aos="fade-up">
                        <p>Basado en el Programa POTENCIAL FEM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision