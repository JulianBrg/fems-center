import React, { useEffect, useState } from 'react'
import './Questions.css'
import Accordion from './Accordion'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';

const Questions = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const [active, setActive] = useState("¿Quién puede acceder a Fems Center?");
    // const [active, setActive] = useState("");

    return (
        <div className='questions section container'>
            <div className="secHeading" data-aos="fade-up">
                <h3>
                    Preguntas frecuentes
                </h3>
            </div>
            <div className="secContainer grid">
                {/* We will import a component from a different file */}
                <div className="accordion grid">
                    <Accordion
                        title='¿Quién puede acceder a Fems Center?'
                        desc='Por lo general, Fems está abierto a cualquier persona interesada en iniciar o hacer crecer un negocio, independientemente de su nivel de experiencia o tipo de emprendimiento.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='¿Cómo puedo programar una consulta o reservar un servicio?'
                        desc='Puede programar una consulta llamando a nuestro número de teléfono de atención al cliente, al número de teléfono del profesional o visitándonos en persona en nuestra ubicación física.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='¿Cuáles son los servicios principales que ofrece su Center?'
                        desc='Ofrecemos una variedad de servicios que incluyen consultoría personalizada, capacitaciones, asesoramiento profesional y talleres de desarrollo personal.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title=' ¿Cuáles son los horarios de funcionamiento de su Center?'
                        desc='Nuestro Center está abierto de lunes a viernes de 8:00 a.m. a 8:00 p.m. y los sábados de 9:00 a.m. a 2:00 p.m. Estamos cerrados los domingos.'
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className='form'>
                    <div className="secHeading">
                        <h4 data-aos="fade-up">
                            ¿Tiene alguna pregunta específica?
                        </h4>
                        <p data-aos="fade-up">
                            Rellene el siguiente formulario y nuestro equipo se pondrá en contacto con usted lo antes posible.
                        </p>
                    </div>

                    <div className="formContent grid">
                        <input
                            name='nombre'
                            data-aos="fade-up"
                            type="email"
                            placeholder='Introduzca la dirección de correo electrónico'
                        />
                        <textarea
                            name='area'
                            placeholder='Escriba su pregunta aquí'
                            data-aos="fade-up"
                        ></textarea>
                        <button type='submit' className='btn' data-aos="fade-up">Enviar consulta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions