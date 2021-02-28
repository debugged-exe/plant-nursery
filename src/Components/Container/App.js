import React from "react";
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import HomePage from "../../Pages/HomePage/HomePage";
import seeds from '../../Database/Seeds';
import {Route, Switch, HashRouter} from 'react-router-dom';
import plants from '../../Database/Plants';
import Showplants from "../Showplants/Showplants";
import pots from '../../Database/Pots';
import tools from '../../Database/Tools';
import PlantPage from '../../Pages/PlantPage/PlantPage';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            product: '',
        }
    }

    setProduct = (product) => {
        this.setState({product: product});
        console.log("hwllo");
    }

    render() {
        return (
            <div>
               
                <HashRouter basename='/'>
                    <Navbar setProduct={this.setProduct}/>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/plants' component={() => <PlantPage/>} />
                        <Route exact path='/seeds' component={() => <Showplants products={seeds}/>} />
                        <Route exact path='/pots' component={() => <Showplants products={pots}/>} />
                        <Route exact path='/tools' component={() => <Showplants products={tools}/>} />
                    </Switch>
                    <Footer/>
                </HashRouter>
            </div>
        );

    }
}

export default App;
