import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Shared/Components/Header/Header';
import Footer from '../Shared/Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import Ambassadorship from '../Pages/Ambassadorship/Ambassadorship';
import Community from '../Pages/Community/Community';
import Education from '../Pages/Education/Education';
import Events from '../Pages/Events/Events';
import Membership from '../Pages/Membership/Membership';
import Participation from '../Pages/Participation/Participation';
import Services from '../Pages/Services/Services';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to="/" element={<Home/>}/>
        <Route to="/ambassadorship" element={<Ambassadorship/>}/>
        <Route to="/community" element={<Community/>}/>
        <Route to="/education" element={<Education/>}/>
        <Route to="/events" element={<Events />}/>
        <Route to="/membership" element={<Membership />}/>
        <Route to="/participation" element={<Participation />}/>
        <Route to="services" element={<Services />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
