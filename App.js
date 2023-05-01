import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';
import { Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Cards /> } />
      <Route path='/cart' element={ <CardsDetails /> } />
    </Routes>
    </>
        
  );
}

export default App;
