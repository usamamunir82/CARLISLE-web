import "./brands.css";
import "./jades.css";
import { BsFillCaretUpFill } from "react-icons/bs";
import IconSwitch from "react-disable-icon"
import pics from "./jades.png";
import pic1 from "./Rectangle 151.jpg";
import pic2 from "./Rectangle 152.jpg";
import pic3 from "./Rectangle 153.jpg";
import pic4 from "./Rectangle 154.jpg";
import subpic from "./1.png";
import subpic2 from "./2.png";
import subpic3 from "./3.png";
import subpic4 from "./4.png";
import { useState } from "react";

const Brands = () => {
  const [jadesdata, setjadesData] = useState({
    id: "2",
    name: "HERTALAN",
    img: pic2,
    subimg: subpic2,
    details:
      "HERTALAN® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  });
  const [activeCard, setActiveCard] = useState("1");
  const [activeCard2, setActiveCard2] = useState("2");

  const [activeCard3, setActiveCard3] = useState("3");
  const [activeCard4, setActiveCard4] = useState("4");


  const [disabled, setDisabled] = useState(false)
  // console.log(UserData);

  const MouseOver = (ind, user) => {
    setjadesData({
      id: user.id,
      name: user.name,
      img: user.img,
      subimg: user.subimg,
      details: user.details,
    });
   if(activeCard===user.id){
    setActiveCard(false)
   }else
   setActiveCard("1")
   if(activeCard3===user.id){
    setActiveCard3(false)
   }else
   setActiveCard3("3")
   if(activeCard4===user.id){
    setActiveCard4(false)
   }else
   setActiveCard4("4")
   if(activeCard2===user.id){
    setActiveCard2(false)
   }else
   setActiveCard2("2")

    // setActiveCard(true)
    // setActiveCard(user.id);
    // className={`brand1 ${activeCard === user.id ? "bg-red" : ""}`
  };
  return (
    <div>
      <div className="brand">
        <div className="brands">
          <h2>Our Brands</h2>
          <p>
            Lorem ipsum dolor sit amet, coctetur adipiscing elit. Aenean euismod
            bibendum laoreet.
          </p>
        </div>
        <div className="brands-img">
          {UserData.map((user, ind) => (
            <div className="brand1" >
              <img src={user.img} onMouseOver={() => MouseOver(ind, user)} />
              <img src={user.subimg} className="brand-subimg1" />
            </div>
          ))}
        </div>
      </div>
<div className="icon">
  <div >
  {/* <IconSwitch  Icon = {<BsFillCaretUpFill/>} disabled = {disabled}    /> */}
    
  <BsFillCaretUpFill  className={`ico ${activeCard  ? "bg-red" :""}`}   />
  </div>
  <div>
  <BsFillCaretUpFill className={`ico ${activeCard2  ? "bg2-red" :""}`} />
  </div>
  <div>
  <BsFillCaretUpFill className={`ico ${activeCard3  ? "bg3-red" :""}`}/>
  </div>
  <div>
  <BsFillCaretUpFill className={`ico ${activeCard4  ? "bg4-red" :""}`}/>
  </div>

</div>
      <div className="j_container">
        <div className="jades-box">
          <div className="jades_img">
            <img src={jadesdata.img} />
          </div>
          <div className="jades-content">
            <h2>{jadesdata.name}</h2>
            <div className="zz">
              <p>{jadesdata.details}</p>
            </div>
            <div className="btn-jades">
              <button>More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;

const UserData = [
  {
    className: "j_container",
    id: "1",
    name: "RESITRIX",
    img: pic1,
    subimg: subpic,
    details:
      "RESITRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  },
  {
    id: "2",
    name: "HERTALAN",
    img: pic2,
    subimg: subpic2,
    details:
      "HERTALAN® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  },
  {
    id: "3",
    name: "AULTRIX",
    img: pic3,
    subimg: subpic3,
    details:
      "AULTRIX® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  },
  {
    id: "4",
    name: "ECOLAN",
    img: pic4,
    subimg: subpic4,
    details:
      "ECOLAN® ist die einzige Dichtungsbahn, die in einer beispiellosen Materialkombination aus dem Synthesekautschuk EPDM und hochwertigem polymermodifizierten Bitumen die Vorteile beider Werkstoffe vereint. Lorem ipsum dolor sit amet...",
  },
];
