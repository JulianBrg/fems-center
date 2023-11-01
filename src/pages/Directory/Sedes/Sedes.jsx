import { useEffect, useState } from 'react'
import './Sedes.scss'
import Footer from '../../../components/Footer/Footer'
// animation
import Aos from 'aos';

// import library SEO
import { Helmet } from 'react-helmet'
import { Card } from './Card/Card';
import directorySedes from '../../../data/directorySedes';


const Sedes = () => {

    const [sedesState, setSedesState] = useState(directorySedes);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Directorio Sedes | Fems Center</title>
                <meta
                    property="description"
                    content="Encuentra y busca a nuestras socias"
                />
            </Helmet>

            {/* <Navbar /> */}
            <div className='sedes section container'>
                <div className="secTitle" >
                    <h1 className="redText" data-aos="fade-down">
                        Directorio
                    </h1>
                    <h2 data-aos="fade-down">Sedes</h2>
                    <p data-aos="fade-down">Todos nuestros lugares asociados se encuentran aquí</p>
                </div>

                <Card sedesState={sedesState} />
            </div>
            <Footer />
        </>
    )
}

export default Sedes