import Header from './components/header/header'
import Homepage from './components/homepage/homepage';
import Rectangle from './components/rectangle/rectangle';
import Recsub from './components/recsub/recsub';
import Carlisle from './components/carlisle/carlisle';
import Brands from './components/brands/brands';
// import Jades from './components/jedes/jades';
import Casestudy from './components/case study/case-study';
import News from './components/news and blogs/news';
import './App.css'
import Help from './components/help/help';
import Footer from './components/footer/footer';
import Navmob from './components/nav-mobile/nav-mobile';
function App() {
  return (
    <div>
      <div className="hamburger">
     <Navmob  />
     </div>
      <div className='nav-header'>
        
     <Header/>
     
     </div>
     
     <Homepage/>
     <Rectangle/>
     <Recsub/>
     <Carlisle/>
     <Brands/>
     {/* <Jades/> */}
     <Casestudy/>
     <div className='new'><h2 >News & Blogs</h2></div>
     <News/>
     <Help/>
     <Footer/>
    
    </div>
  );
}

export default App;
