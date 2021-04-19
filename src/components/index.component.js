import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import ProductItem from './PrductItem';
import Banner from './banner.component';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products')
            .then(response => {
                console.log(response.data);
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    productItem() {
        return this.state.products.map(function (object, i) {
            return <ProductItem obj={object} key={i}/>;
        });
    }
    render() {
        return (
            <Router>
                <Banner />
                <div className="container">
                    <div className="row pb-40">
                        {this.productItem()}
                    </div>
                </div>
            </Router>
        );
    }
}