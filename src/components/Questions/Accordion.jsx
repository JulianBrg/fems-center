import React from 'react'
import "./Questions.css"
// imported icons
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

const Accordion = ({ title, desc, active, setActive }) => {
    return (
        <div className='accordionContainer'>
            <span className={(active === title ? 'activeTitle' : '') + " title" + " flex"}>
                {title}
                <span onClick={() => setActive(title)}>
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