import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProviderDashboard } from './pages/ProviderDashboard';
import { ClientDashboard } from './pages/ClientDashboard';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <div className='container mx-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/provider-dashboard/:id" element={<ProviderDashboard />} />
              <Route path="/client-dashboard/:id" element={<ClientDashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
