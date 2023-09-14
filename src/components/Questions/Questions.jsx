import React, { useState } from 'react'
import './Questions.css'
import Accordion from './Accordion'

const Questions = () => {

    const [active, setActive] = useState("¿Quién puede acceder a Fems Center?");
    // const [active, setActive] = useState("");

    return (
        <div className='questions section container'>
            <div className="secHeading">
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
                        title=' ¿Cuál es el costo de utilizar los servicios de Fems Center?'
                        desc='Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='Pregunta 3?'
                        desc='Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing.'
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title='Pregunta 4?'
                        desc='Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing.'
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className='form'>
                    <div className="secHeading">
                        <h4>
                            ¿Tiene alguna pregunta específica?
                        </h4>
                        <p>
                            Rellene el siguiente formulario y nuestro equipo se pondrá en contacto con usted lo antes posible.
                        </p>
                    </div>

                    <div className="formContent grid">
                        <input
                            type="email"
                            placeholder='Introduzca la dirección de correo electrónico'
                        />
                        <textarea placeholder='Escriba su pregunta aquí'></textarea>
                        <button className='btn'>Enviar consulta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions