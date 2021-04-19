import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullname: '',
            phone: '',
            password:''
        }
    }

    onChangeFullName(e) {
        this.setState({
            fullname: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            fullname: this.state.fullname,
            phone: this.state.phone,
            password: this.state.password
        };
        axios.post('http://localhost:4000/users/register', obj)
        .then(resp=>{
            console.log(resp.data);
          })  
          .catch(error=>{
            console.log(error)
          });

        this.setState({
            fullname: '',
            phone: '',
            password: ''
        })
    }

    render() {
        return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 register">
                            <h3 className="pt-40 text-center">ĐĂNG KÝ</h3>
                            <form className="pt-20 pb-40" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Họ và tên: </label>
                                    <input type="text" className="form-control"
                                        value={this.state.fullname}
                                        onChange={this.onChangeFullName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại: </label>
                                    <input type="text" className="form-control" value={this.state.phone}
                                        onChange={this.onChangePhoneNumber}/>
                                </div>
                                <div className="form-group">
                                    <label>Mật Khẩu: </label>
                                    <input type="text" className="form-control" value={this.state.password}
                                        onChange={this.onChangePassword}/>
                                </div>
                                <div className="form-group pt-20">
                                    <button type="submit" className="btn-form">Đăng ký</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}
