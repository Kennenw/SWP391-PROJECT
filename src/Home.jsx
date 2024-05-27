import React from "react";
import './StyleHome.css';

const Home = () => {
    return (
        <div className="allBody">
            <div className="body">
                <h1>Hello !</h1>
                <h3>Book a badminton court schedule with...</h3>
                <form style={{display: "flex"}}>
                    <div className="form-floating">     
                        <input type="text" className="form-control" id="inputPlace" placeholder="Choose place book court"></input>
                        <label htmlFor="inputPlace" className="form-label">Place book court</label>
                    </div>
                    <div className="form-floating">
                        <input type="date" className="form-control" id="inputDate" placeholder="Choose date"></input>
                        <label htmlFor="inputDate" className="form-label">Date play</label>
                    </div>
                    <div className="form-floating">
                        <input type="time" className="form-control" id="inputTime" placeholder="Choose time"></input>
                        <label htmlFor="inputTime" className="form-label">Time play</label>
                    </div>
                    <button style={{width: "58px"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
            </div>

            <div className="comment">
            {/* https://e0.pxfuel.com/wallpapers/909/942/desktop-wallpaper-badminton-sports-hq-badminton.jpg */}
        {/* <img src="https://cdn.shopvnb.com/uploads/images/tin_tuc/qua-cau-long-co-bao-nhieu-canh-qua-cau-long-tieu-chuan-thi-dau-la-nhu-the-nao--1.webp">  */}
                <h1 style={{margin: "0 36px", color: "white", marginBottom: "60px", fontSize: "34px"}}>Customer experience</h1>
                <div className="commentbox" style={{display: "flex"}}>
                    <div className="comment1"> 
                        <h3>Bảo Kha</h3>
                        <h5>The badminton court is very clean and cool,bringing me many interesting experiences</h5>
                    </div>
                    <div className="comment1">
                        <h3>Bảo Kha</h3>
                        <h5>I really love the service at the court...i spent alot òf time playing with my family</h5>
                    </div>
                    <div className="comment1">
                        <h3>Bảo Kha</h3>
                        <h5>I love the professionalism of the court booking process and the wonderful experiences at the court</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;