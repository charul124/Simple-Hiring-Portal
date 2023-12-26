import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JobListingCreation from './components/JobListingCreation';
import { db } from './components/firebase.config';
// import "./firebase.js"
import Notification from './components/Notification.js';
function App() {

  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Navbar />} />
      <Route index element={<Home/>}/>
      <Route path='/joblistingcreation' element={<JobListingCreation db={db}/>} />
      </Routes>
    </Router>
    <Notification/>
    </>
    
  );
}

export default App;
