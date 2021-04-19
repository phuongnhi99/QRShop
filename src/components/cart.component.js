import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {persons: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/persons')
            .then(response => {
                console.log(response.data);
                this.setState({persons: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.persons.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div className="container">
                <h3 className="pt-40 pb-20" align="center">GIỎ HÀNG</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng cộng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}