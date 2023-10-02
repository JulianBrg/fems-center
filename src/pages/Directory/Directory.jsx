import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Directory.css'
import directory from '../../data/directory'
// animation
import Aos from 'aos';
import 'aos/dist/aos.css';
// Imported icons
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiUser } from 'react-icons/bi'
// import library SEO
import { Helmet } from 'react-helmet'

const Directory = () => {
    // setear los hooks useStates
    const [users, setUsers] = useState([]);
    // inputs
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");

    // funcion para traer los datos de la api
    // const URL = 'https://jsonplaceholder.typicode.com/users'
    // const showData = async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setUsers(data);
    // }

    const showDirectory = () => {
        setUsers(directory);
    }
    // funcion de busqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    }
    const searcher2 = (e) => {
        setSearch2(e.target.value);
    }

    // metodo de filtrado 1
    let results = [];

    if (!search && !search2) {
        results = users;
    } else if (search && !search2) {
        results = users.filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } else if (!search && search2) {
        results = users.filter((dato) =>
            dato.servicio.toLowerCase().includes(search2.toLocaleLowerCase())
        )
    } else if (search && search2) {
        results = users.filter((dato) =>
            dato.servicio.toLowerCase().includes(search2.toLocaleLowerCase())
        ).filter((dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    // metodo de filtrado 2
    // const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        showDirectory();
        // showData();
    }, [])

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <>
            <Helmet>
                <title>Fems Center - Directorio</title>
                <meta
                    property="description"
                    content="Encuentra y busca a nuestras socias"
                />
            </Helmet>

            <Navbar />
            <div className='directory section container'>
                <div className="secTitle" >
                    <span className="redText" data-aos="fade-down">
                        Directorio
                    </span>
                    <h3 data-aos="fade-down">Busca y Encuentra</h3>
                    <p data-aos="fade-down">Todos nuestros amigos se encuentran aquí</p>
                </div>

                <div className="grid">
                    <div className="searchField grid">
                        <div className="inputField flex" data-aos="fade-down">
                            <BiUser className="icon" />
                            <input
                                type="text"
                                placeholder='Nombre'
                                value={search}
                                onChange={searcher}
                            />
                        </div>
                        <div className="inputField flex" data-aos="fade-down">
                            <BiUser className="icon" />
                            <input
                                type="text"
                                placeholder='Servicio'
                                value={search2}
                                onChange={searcher2}
                            />
                        </div>
                    </div>
                    <div className='table-latitude'>
                        <table cellSpacing={0}>
                            <thead data-aos="fade-down">
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>TELEFONO</th>
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
                                            <td title='Telefono'>{user.phone}</td>
                                            <td title='Servicio'>{user.servicio}</td>
                                            <td title='Email'>{user.email}</td>
                                            <td title='Facebook'>
                                                <a href={user.facebook} target='_blank'>
                                                    <BiLogoFacebookSquare className='icon' />
                                                </a>
                                            </td>
                                            <td title='Instagram'>
                                                <a href={user.instagram} target='_blank'>
                                                    <BiLogoInstagramAlt className='icon' />
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