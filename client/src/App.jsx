// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from "./view/Login/Login.jsx";
import Shopping from "./view/Shopping/Shopping.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./componentes/navbar/navbar.jsx";

function App() {

  return (
    <>
    <div className="appGrid" >
        <header className="nav">
          <Navbar />
        </header>
        <main 
            className="mai"
            style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
          <Routes>
              <Route  path="/" element={<Login/>}/>
              <Route path="/shopping" element={<Shopping/>} />
          </Routes>
        </main>
        <footer className="foo">
            <p>footer</p>
        </footer>
    </div>
    </>
  )
}

export default function AppWithRouter (){
  return (
      <Router>
          <App />
      </Router>
  );
}
