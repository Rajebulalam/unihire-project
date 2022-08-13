import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Pages/Detail';
import Details from './Pages/Details';
import Form from './Pages/Form';

function App() {
  return (
    <div>
      <div className='py-6 px-4 md:px-16 mx-0 md:mx-4'>
        <button type="submit" className='btn btn-primary'><Link to='/'>Home Page</Link></button>
      </div>
      <Routes>
        <Route path='/' element={<Details></Details>}></Route>
        <Route path='inventory/:id' element={<Detail></Detail>}></Route>
        <Route path='inventory/:id/form/:id' element={<Form></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
