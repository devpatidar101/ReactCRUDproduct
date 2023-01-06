
import { BrowserRouter, Routes } from 'react-router-dom';
import { NavBar } from './componants/NavBar';
import { Route } from 'react-router-dom';
import { Home } from './componants/Home';
import { AddProduct } from './componants/AddProduct';
import { ProductsList } from './componants/ProductsList';


function App() {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add-product' element={<AddProduct/>}></Route>
    <Route path='/products-list' element={<ProductsList/>}></Route>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
