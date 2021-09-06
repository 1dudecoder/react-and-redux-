import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ProductDetails from './Action/container/ProductDetails';
import ProductListing from './Action/container/ProductListing';
import Navbar  from './Navbar'


function App() {
  return (
    <>
    <Router>
          <Navbar />
      <Switch>
        <Route path="/product/:productid">
          <ProductDetails />
        </Route>
        <Route path="/">
          <ProductListing />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

//https://fakestoreapi.com/products

export default App; 
