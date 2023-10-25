import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import RoutesComponent from './RoutesComponent';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <RoutesComponent/>
    </BrowserRouter>
  );
}

export default App;
