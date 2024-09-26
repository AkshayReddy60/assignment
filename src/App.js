
import './App.css';
import Aboutus from './components/Aboutus/aboutus';
import ContactUs from './components/ContactUs/contactus';
import Destination from './components/Destinations/destinations';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Packages from './components/Packages/packages';


function App() {
  return (
    <><div className='app'>
    
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Destination/>
    <Packages/>
    <ContactUs/>
    
    </div>
    
    </>
  );
}

export default App;
