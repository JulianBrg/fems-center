import { useEffect, useState } from 'react'
import './Directory.scss'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import directory from '../../data/directory'
// animation
import Aos from 'aos';
import 'aos/dist/aos.css';
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
    { value: 'nutrición', label: 'Nutrición' },
    { value: 'dentista', label: 'Dentista' },
    { value: 'FISIOTERAPIA', label: 'Fisioterapia' },
    { value: 'COMERCIO', label: 'Comercio' },
    { value: 'WORKOUT', label: 'Workout' },
    { value: 'YOGA', label: 'Yoga' },
    { value: 'PSICOLOGÍA', label: 'Psicología' },
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
        setUsers(directory);
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

    // método de filtrado 1
    // let results = [];

    // if (!search && !search2) {
    //     results = users;
    // } else if (search && !search2) {
    //     results = users.filter((dato) =>
    //         dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // } else if (!search && search2) {
    //     results = users.filter((dato) =>
    //         dato.servicio.toLowerCase().includes(search2.toLocaleLowerCase())
    //     )
    // } else if (search && search2) {
    //     results = users.filter((dato) =>
    //         dato.servicio.toLowerCase().includes(search2.toLocaleLowerCase())
    //     ).filter((dato) =>
    //         dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // }

    let results = [];

    if (!search && !search3) {
        results = users;
    } else if (search && !search3) {
        results = users.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } else if (!search && search3) {
        results = users.filter((dato) =>
            dato.servicio.toLowerCase().includes(search3.toLocaleLowerCase())
        )
    } else if (search && search3) {
        results = users.filter((dato) =>
            dato.servicio.toLowerCase().includes(search3.toLocaleLowerCase())
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
                <title>Directorio | Fems Center</title>
                <meta
                    property="description"
                    content="Encuentra y busca a nuestras socias"
                />
            </Helmet>

            <Navbar />
            <div className='directory section container'>
                <div className="secTitle" >
                    <h1 className="redText" data-aos="fade-down">
                        Directorio
                    </h1>
                    <h2 data-aos="fade-down">Busca y Encuentra</h2>
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
                                    <th>TELÉFONO</th>
                                    <th>SERVICIO</th>
                                    <th>CORREO</th>
                                    <th>FACEBOOK</th>
                                    <th>INSTAGRAM</th>
                                </tr>
                            </thead>
                            <tbody data-aos="fade-down">
                                {
                                    results.map((user) => (
                                        <tr key={user.id}>
                                            <td title='Nombre'>{user.name}</td>
                                            <td title='Teléfono'>{user.phone}</td>
                                            <td title='Servicio'>{user.servicio}</td>
                                            <td title='Email'>{user.email}</td>
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