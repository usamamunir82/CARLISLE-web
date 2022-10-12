import './header.css'
import pic from './logo.png'

const Header = () => {
    return (
        <div className='header'>
            <section>
            <div className='mheader' >
                <div>
                    <img className="himg" src={pic} />
                </div>
                <div className='headul'>
                    <ul className='hul'>
                        <li>OUR SOLOUTIONS</li>
                        <li>PRODUCTS & BRANDS</li>
                        <li>CASE STUDIES</li>
                        <li>SERVICE PORTAL</li>
                        <li>ACADEMY</li>
                        <li>ABOUT COM</li>
                    </ul>
                </div>
                <div className='hbuton'>
                    <button className='hbut'>Hello</button>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Header;