import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import SuccessStory from './Components/Successstory/SuccessStory';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import UserProfile from './Components/Profiles/UserProfile';
import SelfProfile from './Components/UserProfile/SelfProfile';
import UpdateSelfProfile from './Components/UserProfile/UpdateSelfProfile';
import FullDetails from './Components/Details/FullDetails';
import SocialWork from './Components/SicialWork/SocialWork';
import Howwework from './Components/Howwework/Howwework';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/success' element={<SuccessStory />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profiles' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup  />} />
          <Route path='/social' element={<SocialWork  />} />
          <Route path='/howwork' element={<Howwework  />} />
          <Route path='/selfprofile' element={<SelfProfile  />} />
          <Route path='/update-profile/:_id' element={<UpdateSelfProfile  />} />
          <Route path='/details/:_id' element={<FullDetails  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
