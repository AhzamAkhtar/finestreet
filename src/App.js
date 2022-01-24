import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom";
import FirstPart from './FirstPart';
import Navbar from './Navbar';
import Errorpage from './Errorpage';
import Summary from './Summary';
import Form from './Form';
import End from './End';
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<FirstPart />}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/end" element={<End/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
/*<Navbar />
    <FirstPart />*/