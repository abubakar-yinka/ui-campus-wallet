import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Submenu from "../Submenu/Submenu";
import '../../App.css'

const Landing = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Hero />
    <Submenu />
  </>
  );

}



export default Landing;
