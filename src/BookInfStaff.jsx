import React from "react";

const BookInStaff = () => {
    return (
        <div className="body-staff">
            <div className="check-in">THÔNG TIN KHÁCH HÀNG</div>
            <form className="check-input">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="outputCourtid" placeholder="Court id"></input>
                    <label htmlFor="outputCourtid" className="form-label">Court id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="outputBookingid" placeholder="Booking id"></input>
                    <label htmlFor="outputBookingid" className="form-label">Booking id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="outputUserid" placeholder="User id"></input>
                    <label htmlFor="outputUserid" className="form-label">User id</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="time" className="form-control" id="outputTime" placeholder="Time book"></input>
                    <label htmlFor="outputTime" className="form-label">Time book</label>
                </div>
                <button>Search</button>
            </form>    
        </div>
    );
};

export default BookInStaff;