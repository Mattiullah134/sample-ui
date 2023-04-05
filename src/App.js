import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import NavBar from './component/NavBar';
import EditProfile from './component/EditProfile';
import PageHeroSection from './component/PageHeroSection';
import RewardsCardDetail from './component/RewardsCardDetail';
import RewardsCardDetail1 from './component/RewardsCardDetail1';
import RewardsCardDetail2 from './component/RewardsCardDetail2';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      {(location.pathname !== '/editprofile' && location.pathname !== '/rewarddetail') && <PageHeroSection />}
      <Routes>
        <Route exat path='/editprofile' element={<EditProfile />} />
        <Route exat path='/rewarddetail' element={<RewardsCardDetail />} />
        <Route exat path='/rewarddetail1' element={<RewardsCardDetail />} />
        <Route exat path='/rewarddetail2' element={<RewardsCardDetail2 />} />
      </Routes>
      {(location.pathname !== '/editprofile' && location.pathname !== '/rewarddetail') && <HeroSection />}
      <Footer />
    </div>
  );
}

export default App;
