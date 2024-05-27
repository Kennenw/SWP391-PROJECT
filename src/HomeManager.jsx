import React from "react";
import { Link } from "react-router-dom";

const HomeManager = () => {
    return (
        <div className="body-manager">
            <div className="choose-manager">THÔNG TIN ĐẶT LỊCH</div>
            <form className="check-input">
            <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputCustomerid" placeholder="Choose customer id"></input>
                    <label htmlFor="inputCustomerid" className="form-label">Customer id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputCourtid" placeholder="Choose court id"></input>
                    <label htmlFor="inputCourtid" className="form-label">Court id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputBookingtype" placeholder="Choose booking type"></input>
                    <label htmlFor="inputBookingtype" className="form-label">Booking id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="time" className="form-control" id="inputTime" placeholder="Choose time"></input>
                    <label htmlFor="inputTime" className="form-label">Time</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputTotal" placeholder="Choose total"></input>
                    <label htmlFor="inputTotal" className="form-label">Total</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputPaymentStatus" placeholder="Choose payment status"></input>
                    <label htmlFor="inputPaymentStatus" className="form-label">Payment status</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputNote" placeholder="Choose note"></input>
                    <label htmlFor="inputNote" className="form-label">Note</label>
                </div>
                <button type="submit">Search</button>
            </form>    
        </div>
    );
};

export default HomeManager;