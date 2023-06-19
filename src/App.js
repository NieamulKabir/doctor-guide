import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className=''>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
