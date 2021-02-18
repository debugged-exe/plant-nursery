import React from "react";
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import HomePage from "../../Pages/HomePage/HomePage";
import ProductPage from "../../Pages/ProductPage/ProductPage";
import {Route,Switch, HashRouter} from 'react-router-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            product:'',
        }
    }

    setProduct = (product) =>{
        this.setState({product:product});
    }

    render(){
    return (
        <div>
            <HashRouter basename='/'>
            <Navbar setProduct={this.setProduct}/>
            <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/product' component={()=><ProductPage product={this.state.product} />}/>
            </Switch>
            <Footer/>
            </HashRouter>
        </div>
    );
        
}
}

export default App;
