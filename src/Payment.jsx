import React from "react";

const Payment = () => {
    return (
        <div className="boPay">
            <div className="pay-infor">
                <div className="pay-content">THÔNG TIN THANH TOÁN</div>
                <div className="pays">
                    <div className="pay-col" style={{padding: "30px 0px 30px 160px"}}>
                        <div className="pay-detail">Họ Và Tên: </div>
                        <div className="pay-detail">Số Điện Thoại: </div>
                        <div className="pay-detail">Giờ Chơi: </div>
                        <div className="pay-detail">Mã Thanh Toán: </div>
                        <div className="pay-detail">Giờ thanh toán: </div>
                    </div>
                    <div className="pay-col">
                        <div className="qr-code">
                            <img src="https://i.ibb.co/QppPhTJ/Picture2.png" />
                            <div className="pay-qr">QUÉT MÃ ĐỂ THANH TOÁN</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-pay">
                <div className="pay-process">CÁC BƯỚC THANH TOÁN ONLINE</div>
                <div className="pay-row">
                    <div className="pay-step">
                        <h3>1</h3>
                        <div className="font-pay">MỞ APP THANH TOÁN ONLINE</div>
                    </div>
                    <div className="pay-step">
                        <h3>2</h3>
                        <div className="font-pay">QUÉT MÃ QR CODE TRÊN MÀN HÌNH</div>
                    </div>
                    <div className="pay-step">
                        <h3>3</h3>
                        <div className="font-pay">NHẬP MÃ VÀ XÁC NHẬN</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;