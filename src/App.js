import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import "./styles.scss"

const Layout=()=>{
  return(
    <div className='app'>
      <NavBar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/products/:id",
          element: <Products/>,
        },
        {
          path: "/product/:id",
          element: <Product/>,
        },
      ]
    },
    
  ]);
  return (
    <div className="App">
         <RouterProvider router={router} />

    </div>
  );
}

export default App;
