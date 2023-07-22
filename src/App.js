import Sectionthree from "./components/Sectionthree";
import Footer from "./components/Footer";
import Sectionone from "./components/Sectionone";
import Navbar from "./components/Navbar";
import Sectiontwo from "./components/Sectiontwo";
import curve from './images/bg-curve-desktop.svg'

function App() {
  return (
    <>
    <div className="max-w-[75rem] mx-auto">
      <Navbar/>
      <Sectionone/>
    
    </div>
    <div className="w-full">
        <img src={curve} alt="" className="w-full mr-auto"/>
      </div>
      <div className=" bg-lightblue w-full">
        <Sectiontwo/>
        </div>

        <div className=" bg-desaturateblue w-full">
        <Sectionthree/>

        </div>
        <div className=" bg-darkblue w-full">
        <Footer/>

        </div>



    </>
  );
}

export default App;
