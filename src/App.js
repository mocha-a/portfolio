import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Home from './component/portfolio/Home';
import Footer from './component/Footer';


import './style/_style.scss';

function App() {

  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
