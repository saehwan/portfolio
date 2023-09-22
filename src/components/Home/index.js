import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss';
const Home = () => {
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <hi>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                aehwan
                <br />
                web developer
                </hi>
                <h2>Frontend Developer / JavaScript expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home