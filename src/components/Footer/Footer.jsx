import './Footer.scss'
// imported logo
import logo from '../../assets/fems.svg';
// imported icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';


const Footer = () => {

  const tienda = 'https://femscenter.mitiendanube.com/';
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <img className="logoFems" src={logo} alt="Fems logo footer" title='Fems Center Footer' />
          </div>

          <div className="socials flex">
            <a href="https://www.facebook.com/femsenaccion" target="_blank" rel="sponsored" title='Facebook'>
              <FacebookIcon className='icon' />
            </a>
            <a href="https://www.instagram.com/femscenter/" target="_blank" rel="sponsored" title='Instagram'>
              <InstagramIcon className='icon' />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Principales
          </span>
          <ul>
            <li className="navLink">
              <NavLink to="/" title='Inicio'>
                Inicio
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/membresias" title='Membresías'>
                Membresías
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/servicios/FEMS" title='Servicios'>
                Servicios
              </NavLink>
            </li>
            <li className="navLink">
              <a href={tienda} className="btnNav transparent" target="_blank" title='Showroom'>Showroom</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Información de contacto</span>
          <ul>
            <li><a href="tel:238 168 0876" title='Numero Telefónico'>+52 238 168 0876</a></li>
            <li><a href='mailto:potencialfem@gmail.com' title='Correo Electrónico'>potencialfem@gmail.com</a></li>
            <li><a target='_blank' href='https://www.google.com.mx/maps/place/C.+Gardenia+532,+Jacarandas,+75730+Tehuac%C3%A1n,+Pue./@18.4711957,-97.3995079,17z/data=!3m1!4b1!4m6!3m5!1s0x85c5bd2ae5a705d3:0x8add4bccb2b2a7c2!8m2!3d18.4711957!4d-97.3969276!16s%2Fg%2F11cp9dgj64?entry=ttu' title='Ubicación'>C. Gardenia 532, Jacarandas, 75730 Tehuacán, Pue.</a></li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Privacidad
          </span>
          <ul>
            <li className="navLink">
              <NavLink to="/términos-y-condiciones" className="btnNav transparent" title='Términos y Condiciones'>
                Términos y Condiciones
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/políticas-de-privacidad" className="btnNav transparent">
                Políticas de Privacidad
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="date">
        <p><span>&copy;</span>{year} Fems Center</p>
      </div>
    </div>
  )
}

export default Footer