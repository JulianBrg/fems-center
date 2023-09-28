import React from 'react'
import './Services.css'

export const CardList = ({ professionalState }) => {
    return (
        <div className="servicesContainer grid">
            {
                professionalState.map((professional) => {
                    return (
                        <div className="singleDestination" key={professional.id} data-aos="fade-up">
                            <div className="imgDiv">
                                <img src={professional.img} alt={professional.name} />
                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">
                                            {professional.name}
                                        </span>
                                        <p className='description'>
                                            {professional.description}
                                        </p>
                                        <img className='logo' src={professional.logo} alt={professional.name} />
                                        <ul className='products'>
                                            {
                                                professional.productos.map((producto, index) => {
                                                    return (
                                                        <li key={index}>{producto}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <button type="button" className='btn'>Contactar</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
