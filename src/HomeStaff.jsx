import React from "react";
import { Link } from "react-router-dom";

const HomeStaff = () => {
    return (
        <div className="body-staff">
            <div className="check-in">THỦ TỤC CHECK IN</div>
            <div className="choose-staff">LỰA CHỌN PHƯƠNG THỨC TÌM KIẾM SÂN QUA CÁC TÙY CHỌN DƯỚI ĐÂY.</div>
            <form className="check-input">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputCourtid" placeholder="Choose court id"></input>
                    <label htmlFor="inputCourtid" className="form-label">Court id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputBookingid" placeholder="Choose booking id"></input>
                    <label htmlFor="inputBookingid" className="form-label">Booking id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputUserid" placeholder="Choose user id"></input>
                    <label htmlFor="inputUserid" className="form-label">User id</label>
                </div>
                <button><Link to = "/BookInStaff">Search</Link></button>
            </form>    
        </div>
    );
};

export default HomeStaff;