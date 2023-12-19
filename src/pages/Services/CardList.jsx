
import { NavLink } from 'react-router-dom'
import './Services.scss'

export const CardList = ({ professionalState }) => {
    return (
        <div className="servicesContainer grid">
            {
                professionalState.map((professional) => {
                    return (
                        <div className="singleDestination" key={professional.id} data-aos="fade-up">
                            <div className="imgDiv">
                                <img src={professional.img} alt={professional.name} title={professional.name} />
                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">
                                            {professional.name}
                                        </span>
                                        <p className='description'>
                                            {professional.description}
                                        </p>
                                        {/* <img className='logo' src={professional.logo} alt={professional.name} /> */}
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
                                    {/* {
                                        professional.category == "Servicio" ?
                                            <a href={`https://api.whatsapp.com/send?phone=+52${professional.phone}&text=Hola,%20quisiera%20saber%20de%20sus%20servicios.%20Gracias`} className='btn' target='_blank'>Contactar</a>
                                            :
                                            <a href={`https://api.whatsapp.com/send?phone=+52${professional.phone}&text=Hola,%20quisiera%20saber%20de%20sus%20productos.%20Gracias`} className='btn' target='_blank'>Contactar</a>
                                    } */}
                                    <div>
                                        <NavLink to={`/servicios/asociadas/${professional.name}`} className="btn" >Ver mas</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
