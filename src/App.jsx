
import './App.css'
import AdminPanel from './components/AdminPanel'
import StudentVerification from './components/Form'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />

        <Route path="/form" element={<StudentVerification />} />
        <Route path="/panel" element={<AdminPanel />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
