import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 banner-text align-self-center">
                            <div className="banner-text-1 pb-10">
                                Từ 1/4 đến 30/4
                            </div>
                            <div className="banner-text-2">
                                Giảm giá 20%
                            </div>
                            <div className="banner-text-3 pt-30">
                                Bí quyết của chúng tôi nằm ở nước sốt tẩm ướp được chế biến từ nguyên liệu hoàn toàn tự nhiên, theo công thức bí truyền, hội tụ tinh hoa từ những miền ẩm thực nổi tiếng.
                            </div>
                        </div>
                        <div className="col-lg-6 banner-img">
                            <img src="https://images.unsplash.com/photo-1555178897-7774373fbe9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="banner"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;