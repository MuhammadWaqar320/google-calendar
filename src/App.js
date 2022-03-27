
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/homepage/home';
const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
