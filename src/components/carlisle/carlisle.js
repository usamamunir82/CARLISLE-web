import pic from './carlisle.png'
import './carlisle.css'


const Carlisle=()=>{

    return(
        <div>
        <div className='carlisle2'>
            <div>
                <img className='carlisle2-img' src={pic}/>
            </div>
            <div className='carlisle-content' >
                <h2>We are Carlisle</h2>
                <p >While enhancing your skills at the CARLISLE® Academy, you will learn<br/> about our RESITRIX®, HERTALAN®, ALUTRIX®, HARDCAST® and <br/> ECOLAN® products. We will teach you the tried-and-tested benefits of <br/>EPDM solutions on and around roofs, façades and construction and offer<br/> you valuable tips for your daily business operations.</p>
              <div className='carlisle-btn'>  <button>View All Cases</button> </div>
            </div>

        </div>
        </div>
    )

    }
export default Carlisle;