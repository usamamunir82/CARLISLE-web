import pic1 from "./homepage-hero.jpg";
import "./body.css";
import pic2 from "./flatRroof.png";
import pic3 from "./facedes.png";
import pic4 from "./structural.png";
const Homepage = () => {
  return (
    <div>
      <img className="carlisle" src={pic1} />
      <div className="box">
        <div className="epdm">
          <h2>EPDM solutions for flat roofs, façades and buildings</h2>

          <p>
            Whether it be a roof terrace, living roof or stylish façade,
            waterproofing of buildings or a garden pond – EPDM products from
            CARLISLE® CM Europe are as diverse as your construction projects.
          </p>
        </div>
        <div className="project-card">
          <div className="project-about">
            <h3>What is your Project About</h3>
          </div>
          <div className="card">
            <div className="flat-roof">
              <img src={pic2} />

              <p>FLAT ROOF</p>
            </div>
            <div className="facedes">
              <img src={pic3} />
              <p>FACEDES</p>
            </div>
            <div className="structural-water">
             
                <img src={pic4} />
        
              <p>STUCTIRAL WATERPROOFING</p>
           
            </div>
          </div>
          <div className="btn-sol">
            <button className="find-solution">Find Solution</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
