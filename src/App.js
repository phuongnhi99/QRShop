import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Register from './components/register.component';
import Login from './components/login.component';
import Cart from './components/cart.component';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="container">
                                <img className="logo" src="https://image.freepik.com/free-vector/barbecue-grill-logo-template-premium-vector_144543-93.jpg" alt="Logo"></img>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to={'/index'} className="nav-link">Index</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/cart'} className="nav-link">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/register'} className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/login'} className="nav-link">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                
                <Switch>
                    <Route path='/index' component={ Index } />
                    <Route path='/register' component={ Register } />
                    <Route path='/login' component={ Login } />
                    <Route path='/cart' component={ Cart } />
                </Switch>

                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-20">
                                <div className="brand-name">
                                    Barbecue The Grill
                                </div>

                                <div className="social-icon pt-20 pb-20">
                                    <i className="fab fa-facebook fa-2x"></i>
                                    <i className="fab fa-instagram fa-2x"></i>
                                    <i className="fab fa-youtube fa-2x"></i>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-20 pb-20">
                                <div className="brand-description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br/>
                                    When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;