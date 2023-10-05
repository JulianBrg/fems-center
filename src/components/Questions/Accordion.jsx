import React, { useEffect } from 'react'
import "./Questions.scss"
// imported icons
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// animation
import Aos from 'aos';

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
                            <ArrowCircleUpIcon className='icon' />
                        ) : (
                            <ArrowCircleDownIcon className='icon' />
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