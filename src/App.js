
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

