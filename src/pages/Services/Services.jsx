import './Services.scss'
import React, { useEffect, useState } from 'react'
import { ButtonList, CardList } from '../Services'
import Footer from '../../components/Footer/Footer'
// data
import data from '../../data/data'
// Imported icons
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

// animation
import Aos from 'aos';
// SEO
import { Helmet } from 'react-helmet'


const Services = () => {

    // obtiene del arreglo las categorías
    const allCategories = ['Todos', ...new Set(data.map(professional => professional.category))];

    const [categories, setCategories] = useState(allCategories);
    const [professionalState, setProfessionalState] = useState(data);

    // filtra por categoría
    const filterCategory = (category) => {
        if (category === 'Todos') {
            setProfessionalState(data)
            return
        }

        const filteredData = data.filter(profesional => profesional.category === category);
        setProfessionalState(filteredData);
    }

    // state para input
    const [search, setSearch] = useState('');

    // obtener el value búsqueda por input
    const searcher = (e) => {
        setSearch(e.target.value);
    }

    const filterName = (name) => {
        if (name === '') {
            setProfessionalState(data)
            return
        } else {
            const filteredData = data.filter((profesional) => profesional.name.toLowerCase().includes(search.toLocaleLowerCase()));
            setProfessionalState(filteredData);
            setSearch('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            filterName(data)
            setSearch('');
        }
    }

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);

    return (
        <>
            <Helmet>
                <title>Servicios Asociadas | Fems Center Tehuacán</title>
                <meta
                    property="description"
                    content=" Ven a Fems Center si quieres obtener los mejores servicios y productos para tu hogar, tu salud, tu belleza y tu entretenimiento"
                />
                <link rel="canonical" href="https://femscenter.com/servicios/asociadas" />
            </Helmet>

            <div className='services section container'>
                <div className="secContainer">

                    <div className="secTitle" data-aos="fade-up">
                        <h1 className="redText">
                            Productos y Servicios
                        </h1>
                        <h2>Conoce los productos y servicios de nuestras socias</h2>
                        {/* <p>Conoce los servicios y productos de nuestras socias.</p> */}
                    </div>

                    <div className="searchField grid">
                        <div className="inputField flex" data-aos="fade-up">
                            <PersonIcon className="icon" />
                            <input
                                type="text"
                                placeholder='Nombre'
                                value={search}
                                onChange={searcher}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <button
                            type='button'
                            onClick={() => filterName(search)}
                            className='btn flex'
                            data-aos="fade-up">
                            <SearchIcon />
                            Buscar
                        </button>
                    </div>

                    <div className="secMenu">
                        <ul className="flex" data-aos="fade-up">
                            <ButtonList
                                categories={categories}
                                filterCategory={filterCategory}
                            />
                        </ul>
                    </div>

                    <CardList professionalState={professionalState} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services