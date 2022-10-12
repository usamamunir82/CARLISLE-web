import "./news.css";
import pic from "./Img.png";
import pic2 from "./img2.png";
import pic3 from "./img3.png";
import dateback from "./date-back1.png";
import date1 from "./date1.png";

const News = () => {
  return (
    <div>
    <div className="news_container">
      <div className="news_card">
        <img src={pic} />
        <div className="dateback">
          <span className="date1">
            12 <br/>
            MAR
          </span>

        </div>
        <div className="news_card-content">
          <h2>CARLISLE welcomes delegates at the Schools & Academies Show</h2>
          <p>
            Team CARLISLE CM Europe are welcoming delegates attending the
            Schools & Academies Show at the NEC, Birmingham..
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="news_card">
        <img src={pic2} />
        <div className="dateback">
        <span className="date1">
            12 <br/>
            MAR
          </span>
    
        </div>
        <div className="news_card-content">
        <h2>Schools & Academies Show 2021: Meet us at the NEC!</h2>
        <p>
          On 30th November 2018 CARLISLE Construction Materials’ technical team
          will be exhibiting at the Contractor’s Day..
        </p>
        <button>Read More</button>
        </div>
      </div>
      <div className="news_card">
        
          <img src={pic3} />
          <div className="dateback">
          <span className="date1">
            12 <br/>
            MAR
          </span>
         
          </div>
          <div className="news_card-content">
        <h2>
          Klaas Kortegast Appointed Vice President Sales & Marketing for
          CARLISLE
        </h2>
        <p>
          Europe’s leading EPDM manufacturer CARLISLE® Construction Materials
          Europe is launching the next phase to expand capacit
        </p>
        <button>Read More</button>
        </div>
      </div>
    </div>
    <div className="news_card-post-button">
      <button>View All Posts</button>
     </div>
    </div>
  );
};

export default News;
