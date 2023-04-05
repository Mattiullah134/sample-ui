import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import NavBar from './component/NavBar';
import EditProfile from './component/EditProfile';
import PageHeroSection from './component/PageHeroSection';
import RewardsCardDetail from './component/RewardsCardDetail';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      {(location.pathname !== '/editprofile' && location.pathname !== '/rewarddetail') && <PageHeroSection />}
      <Routes>
        <Route exat path='/editprofile' element={<EditProfile />} />
        <Route exat path='/rewarddetail' element={<RewardsCardDetail />} />
      </Routes>
      {(location.pathname !== '/editprofile' && location.pathname !== '/rewarddetail') && <HeroSection />}
      <Footer />
    </div>
  );
}

export default App;
