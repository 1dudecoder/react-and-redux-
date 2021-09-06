import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ProductDetails from './Action/container/ProductDetails';
import ProductListing from './Action/container/ProductListing';
import Navbar from './Navbar'

// https://github.com/zalmoxisus/redux-devtools-extension
//https://fakestoreapi.com/products

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


export default App; 
