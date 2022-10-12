import "./footer.css";
import pic from "./logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-content-logo">
          <img src={pic} alt="" />
          <h4>Construction Materials Ltd.</h4>
          <p>
            Ground Floor, Lancaster House Fountain Court, Concorde Way
            Millennium Business Park NG19 7DW Mansfield Nottinghamshire
          </p>
          <div className="at-the-rate">
          <p>© 2022 Carlisle. All Rights Reserved.</p>
          </div>
        </div>
        <div className="go-direct">
          <div className="aas">
            
            <p >Go direct to</p>
          </div>
          <div className="ass-content">
            <p>Find a design</p>
            <p>Products</p>
            <p>Downloads</p>
          </div>
          <div className="aas-too">
            <p>Brands</p>
          </div>
          <div className="ass-content">
            <p>HERTALAN </p>
            <p> RESITRIX</p>
            <p>ALUTRIX</p>
            <p>Ecolan</p>
          </div>
        </div>
        <div className="Soloution">
          <div className="aas">
            <h4>Soloution</h4>
          </div>
          <div className="ass-content">
            <p> Find roof</p>
            <p>not find roof</p>
            <p>responsibility</p>
          </div>
          <div className="aas-too">
            <p>Carlisle CCM</p>
          </div>
          <div className="ass-content">
            <p>About</p>
            <p>Contact </p>
            <p>Jobs & Careers</p>
          </div>
        </div>
        <div className="product-types">
          <div className="aas">
            <h5>Product types</h5>
          </div>
          <div className="ass-content">
            <p>EPDM</p>
            <p>TPO</p>
          </div>
          <div className="aas-tooo">
            <p>Legal</p>
          </div>
          <div className="ass-content">
            <p>Terms and conditions </p>
            <p>Legal Informatio</p>
            <p>Data protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
