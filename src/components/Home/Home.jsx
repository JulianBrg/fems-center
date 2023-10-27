import React, { useEffect } from 'react'
import './Home.scss'
// import assets
import background from "../../assets/back.svg";
// import background from "../../assets/back.webp";

// import img1 from "../../assets/img6.webp";
// import img2 from "../../assets/img7.webp";
// import img3 from "../../assets/img8.webp";
// import img4 from "../../assets/img9.webp";


// import icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {



  return (
    <div className='Home'>
      <div className="videoBg">
        {/* <video src={Video} autoPlay loop muted></video> */}
        {/* <img src={background} alt="background"/> */}
      </div>

      <div className="sectionText">
        <h1>Fems Center</h1>
        <h2>Es tu momento de crecer</h2>
        <p >Desarrolla tu potencial en espacios coworking y actividades para crecer profesional y personalmente.</p>

        <div className='redes'>
          <a
            href="https://www.facebook.com/femsenaccion"
            target="_blank"
            rel="sponsored"
            title='Facebook'
            className='icon facebook'
          >
            <FacebookIcon />Facebook
          </a>
          <a
            href="https://www.instagram.com/femscenter/"
            target="_blank"
            rel="sponsored"
            title='Instagram'
            className='icon instagram'
          >
            <InstagramIcon />Instagram
          </a>
          <a
            href="https://www.tiktok.com/@aquientrefems"
            target="_blank"
            rel="sponsored"
            title='Tiktok'
            className='icon tiktok'
          >
            <TikTokIcon />Tiktok
          </a>
        </div>
      </div>

      {/* <div className="popularPlaces">
        <div className="content">
          <h3>Fotos</h3>
          <div className="images flex" >
            <img src={img1} alt="Images blog" />
            <img src={img2} alt="Images blog" />
            <img src={img3} alt="Images blog" />
            <img src={img4} alt="Images blog" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
const TikTokIcon = ({ color = "#fff" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="22px"
      height="22px"
      className='tiktok'
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

export default Home