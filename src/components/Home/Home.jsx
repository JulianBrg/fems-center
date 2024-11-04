import React from 'react'
import './Home.scss'

// import icons svg
import Facebook from '../../assets/icons/facebook-svgrepo-com.svg'
import Instagram from '../../assets/icons/instagram-svgrepo-com.svg'
import TikTok from '../../assets/icons/tiktok-logo-fill-svgrepo-com.svg'

const Home = () => {
  return (
    <>
      <div className='Home'>
        <div className="sectionText">
          <h1>FEMS CENTER</h1>
          <h2>Es tu momento de crecer</h2>
          <p>Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.</p>

          <div className='redes'>
            <a
              href="https://www.facebook.com/femsenaccion"
              target="_blank"
              rel="sponsored"
              title='Facebook'
              className='icon facebook'
            >
              {/* <FacebookIcon />Facebook */}
              <img src={Facebook} alt="Facebook Icon" className='icon' />
            </a>
            <a
              href="https://www.instagram.com/femscenter/"
              target="_blank"
              rel="sponsored"
              title='Instagram'
              className='icon instagram'
            >
              {/* <InstagramIcon />Instagram */}
              <img src={Instagram} alt="Instagran" className='icon' />
            </a>
            <a
              href="https://www.tiktok.com/@aquientrefems"
              target="_blank"
              rel="sponsored"
              title='Tiktok'
              className='icon tiktok'
            >
              {/* <TikTokIcon />Tiktok */}
              <img src={TikTok} alt="Tiktok Icon" className='icon' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home