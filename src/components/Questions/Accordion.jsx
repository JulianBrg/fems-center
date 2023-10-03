import React, { useEffect } from 'react'
import "./Questions.scss"
// imported icons
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
// animation
import Aos from 'aos';
import 'aos/dist/aos.cjs';

const Accordion = ({ title, desc, active, setActive }) => {

    useEffect(() => {
        Aos.init({ duration: 2500 })
    }, [])

    return (
        <div className='accordionContainer' data-aos="fade-up" onClick={() => setActive(title)}>
            <span className={(active === title ? 'activeTitle' : '') + " title" + " flex"}>
                {title}
                <span >
                    {
                        active === title ? (
                            <BsArrowUpCircle className='icon' />
                        ) : (
                            <BsArrowDownCircle className='icon' />
                        )
                    }
                </span>
            </span>
            <p className={(active === title ? "show" : "") + " description"}>
                {desc}
            </p>
        </div>
    );
}

export default Accordion