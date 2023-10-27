import React from 'react'
import './Card.scss'
// Imported icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Card = ({ sedesState }) => {
    return (
        <div className="cardContainer grid">
            {
                sedesState.map((sede) => {
                    return (
                        <div className="card" key={sede.id} data-aos="fade-down">
                            <div className="imgDiv">
                                <img src={sede.img} alt={sede.name} />
                                <div className="descInfo">
                                    <div className="text">
                                        <span className="name">
                                            {sede.name}
                                        </span>
                                        <p className='description'>
                                            {sede.direccion}
                                        </p>
                                        <p className='description'>
                                            {sede.phone}
                                        </p>
                                        <p className='description'>
                                            {sede.email}
                                        </p>
                                        <a className='website' href={sede.website} target='_blank'>SITIO WEB</a>
                                    </div>
                                    <div className="redes">
                                        <a href={sede.facebook} target='_blank'><FacebookIcon className="icon facebook" /></a>
                                        <a href={sede.instagram} target='_blank'><InstagramIcon className="icon instagram" /></a>
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
