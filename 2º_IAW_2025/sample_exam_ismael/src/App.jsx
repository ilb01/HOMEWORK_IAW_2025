import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
      </Routes>
      <Main/>
      <Footer />
    </Router>
  );
}

export default App;
