import { useEffect, useState } from 'react'
import './Directory.scss'
import Footer from '../../components/Footer/Footer'
// import directory from '../../data/directory'
import allData from '../../data/allData';
// animation
import Aos from 'aos';
// Imported icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';

// import library SEO
import { Helmet } from 'react-helmet'
// input select
import Select from 'react-select'

// Component select
const options = [
    { value: '', label: 'Todos' },
    { value: 'ALIMENTOS', label: 'Alimentos' },
    { value: 'ART. DEL HOGAR', label: 'Art. del Hogar' },
    { value: 'BELLEZA', label: 'Belleza' },
    { value: 'CUIDADO PERSONAL', label: 'Cuidado Personal' },
    { value: 'COMERCIO', label: 'Comercio' },
    { value: 'DECORACION', label: 'Decoración' },
    { value: 'DENTISTA', label: 'Dentista' },
    { value: 'FISIOTERAPIA', label: 'Fisioterapia' },
    { value: 'JOYERÍA Y ACCESORIOS', label: 'Joyería y Accesorios' },
    { value: 'JUGUETES', label: 'Juguetes' },
    { value: 'MANUALIDADES', label: 'Manualidades' },
    { value: 'MAQUILLAJE', label: 'Maquillaje' },
    { value: 'MARKETING', label: 'Marketing' },
    { value: 'NUTRICIÓN', label: 'Nutrición' },
    { value: 'PSICOLOGÍA', label: 'Psicología' },
    { value: 'ROPA Y CALZADO', label: 'Ropa Y Calzado' },
    { value: 'REGALOS', label: 'Regalos' },
    { value: 'SPA', label: 'Spa' },
    { value: 'SUPLEMENTOS', label: 'Suplementos' },
    { value: 'TERAPIAS ALTERNATIVAS', label: 'Terapias Alternativas' },
    { value: 'WORKOUT', label: 'Workout' },
    { value: 'YOGA', label: 'Yoga' },
]

const Directory = () => {

    // setear los hooks useStates
    const [users, setUsers] = useState([]);
    // input name
    const [search, setSearch] = useState("");
    // input giro
    const [search2, setSearch2] = useState("");
    // select giro
    const [search3, setSearch3] = useState("");


    const showDirectory = () => {
        // setUsers(directory);
        setUsers(allData);
    }

    // función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    }
    const searcher2 = (e) => {
        setSearch2(e.target.value);
    }
    const searcher3 = (e) => {
        setSearch3(e.value);
    }

    let results = [];

    if (!search && !search3) {
        results = users;
    } else if (search && !search3) {
        results = users.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } else if (!search && search3) {
        results = users.filter((dato) =>
            dato.service.toLowerCase().includes(search3.toLocaleLowerCase())
        )
    } else if (search && search3) {
        results = users.filter((dato) =>
            dato.service.toLowerCase().includes(search3.toLocaleLowerCase())
        ).filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    useEffect(() => {
        showDirectory();
    }, [])

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Directorio de FEMS | Fems Center Tehuacán</title>
                <meta
                    property="description"
                    content="Directorio Fems te permite encontrar y contactar con las mujeres que forman parte de este espacio de coworking."
                />
                <link rel="canonical" href="https://femscenter.com/directorio/socias" />
            </Helmet>

            {/* <Navbar /> */}
            <div className='directory section container'>
                <div className="secTitle" >
                    <h1 className="redText" data-aos="fade-down">
                        Directorio
                    </h1>
                    <h2 data-aos="fade-down">Socias</h2>
                    <p data-aos="fade-down">Todos nuestros amigos se encuentran aquí</p>
                </div>

                <div className="grid">
                    <div className="searchField grid">
                        <div className="inputField flex" data-aos="fade-down">
                            <PersonIcon className="icon" />
                            <input
                                type="text"
                                placeholder='Nombre'
                                value={search}
                                onChange={searcher}
                            />
                        </div>
                        {/* <div className="inputField flex" data-aos="fade-down">
                            <PersonIcon className="icon" />
                            <input
                                type="text"
                                placeholder='Servicio'
                                value={search2}
                                onChange={searcher2}
                            />
                        </div> */}
                        <div data-aos="fade-down">
                            <Select
                                defaultValue={options[0]}
                                options={options}
                                isSearchable={false}
                                onChange={searcher3}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        background: '#fedcd2',
                                        width: "100-%",
                                        // width: "400px",
                                        height: "50px",
                                        borderRadius: "10px"
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <div className='table-latitude'>
                        <table cellSpacing={0}>
                            <thead data-aos="fade-down">
                                <tr>
                                    <th>NOMBRE</th>
                                    {/* <th>TELÉFONO</th> */}
                                    <th>SERVICIO</th>
                                    {/* <th>CORREO</th> */}
                                    <th>FACEBOOK</th>
                                    <th>INSTAGRAM</th>
                                </tr>
                            </thead>
                            <tbody data-aos="fade-down">
                                {
                                    results.map((user) => (
                                        <tr key={user._id}>
                                            <td title='Nombre'>{user.name}</td>
                                            {/* <td title='Teléfono'>{user.phone}</td> */}
                                            <td title='Servicio'>{user.service}</td>
                                            {/* <td title='Email'>{user.email}</td> */}
                                            <td title='Facebook'>
                                                <a href={user.facebook} target='_blank'>
                                                    <FacebookIcon className='icon' />
                                                </a>
                                            </td>
                                            <td title='Instagram'>
                                                <a href={user.instagram} target='_blank'>
                                                    <InstagramIcon className='icon' />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Directory