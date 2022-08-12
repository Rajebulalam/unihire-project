import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Pages/Detail';
import Details from './Pages/Details';

function App() {
  return (
    <div>
      <div className='py-6 px-4 md:px-16 mx-0 md:mx-4'>
        <button type="submit" className='btn btn-primary'><Link to='/'>Go Home Page</Link></button>
      </div>
      <Routes>
        <Route path='/' element={<Details></Details>}></Route>
        <Route path='inventory/:id' element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
