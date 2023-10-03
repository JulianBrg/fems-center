import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Helmet } from 'react-helmet'

const Activities = () => {
    return (
        <>
            <Helmet>
                <title>Actividades | Fems Center</title>
                <meta
                    property="description"
                    content="Explora las actividades que ofrecemos"
                />
            </Helmet>

            <Navbar />
            <div>Activities</div>
        </>
    )
}

export default Activities