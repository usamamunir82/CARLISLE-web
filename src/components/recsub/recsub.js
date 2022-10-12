import './recsub.css'
import pic from './Rectangle 28.png'
const Recsub = () => {
    return (
        <div className='recsub-container'>
        <div className="recsub">
            <div className='resuba'>

                <div ><h2 className='waterproofing'>A complete waterproofing solution for your entire building
                </h2></div>
                <div>
                    <p className='EPDM-products'>Whether it be high up on a flat roof or down in an underground garage, our EPDM products and sealants offer a wide range of applications. Let us inspire you!</p>
                </div>
                <div className='disc'>
                    <button className='Discover'>Discover our Solution</button>
                </div>

            </div>
            <div className='water'>

                <img className='waterproofing-img' src={pic} style={{}}/>
            </div>




            </div>
        </div>
    )
}

export default Recsub;