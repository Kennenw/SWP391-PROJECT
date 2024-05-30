import React from "react";

const ComPay = () => {
    return (
        <div className="boPay">
            <div className="pay-infor">
                <div className="pay-content">
                    <i className="fa-solid fa-circle-check"></i>
                    <div className="pay-success">THANH TOÁN THÀNH CÔNG</div>
                </div>
                <div className="pays">
                    <div className="pay-col" style={{padding: "30px 0px 30px 160px"}}>
                        <div className="pay-detail">Họ Và Tên: </div>
                        <div className="pay-detail">Số Điện Thoại: </div>
                        <div className="pay-detail">Giờ Chơi: </div>
                        <div className="pay-detail">Mã Thanh Toán: </div>
                        <div className="pay-detail">Giờ thanh toán: </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComPay;