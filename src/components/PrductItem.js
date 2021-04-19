import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-lg-3 pt-40">
                <div className="product-item">
                    <div className="card mb-4 box-shadow">
                        <div className="product-img">
                            <img className="card-img-top" src={this.props.obj.image} alt="Product" />
                        </div>
                        <div className="card-body">
                            <div className="product-name">{this.props.obj.name}</div>
                            <div className="product-description pt-10">{this.props.obj.description}</div>
                            <div className="product-price pt-10">{this.props.obj.price} VND</div>
                            <div className="d-flex justify-content-between align-items-center pt-20">
                                <div className="btn-group w-100">
                                    <button type="button" className="btn-add-to-card w-100">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductItem;