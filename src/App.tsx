import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Pages/Home/index';
import Contato from './Components/Pages/Contato/index';
import GlobalStyle from './styles/global';
import { UseStorage } from './Components/Hooks/UseContext';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UseStorage>
          <GlobalStyle />
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
