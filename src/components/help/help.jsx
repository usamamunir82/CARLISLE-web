import "./help.css";
import pic from './Ellipse.png'

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-container-content">
        <div className="how-help">
          <h2>How can we <br/> help?</h2>
          <p>Waterproof EPDM solutions for flat roofs, façades and buildings</p>
        </div>
        <div className="have-question">
          <h2 className="have-qs">Have a Question?</h2>
          <p>If you have a question feel free to contact us</p>
          <h5>+31 (0) 38 339 3333</h5>
          <h5>info.nl@ccm-europe.com</h5>
        </div>
        <div className="advice">
          <div className="advice-content">
            <h2>Need an Advice</h2>
          </div>
          <div className="Ellipse">
            <img className="Ellipse-img" src={pic} alt=""/>
            <div className="Ellipse-content">
                <p>If you have any questions about your project, feel free to request advice</p>
                
            </div>
          </div>
          <div className="abc">
                <button className="Ellipse-content-button">Request Advice</button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
