import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const correctOTP = "123456" // fetched from your server

function OtpInputWithValidation({ numberOfDigits }) {
  
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  useEffect(() => { 
    if(otp.join("") !== "" && otp.join("") !== correctOTP){
      setOtpError("❌ Wrong OTP Please Check Again")
    }else{
      setOtpError(null)
    } 
   }, [otp]);

  return (
    <div className="loginN">
      <div className = "container-fluid">
        <div className = "row justify-content-center mt-3">
          <div className = "text-center">
            <p className = "lead login">Verify email</p>
          </div>
          <div className = "col-md-4 text-center" style={{width: "auto"}}>
            <p className = "lead re">Input OTP have sent to your email</p>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        {otp.map((digit, index)=>(
          <input key={index} value={digit} maxLength={1}  
          onChange={(e)=> handleChange(e.target.value, index)}
          onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
          ref={(reference) => (otpBoxReference.current[index] = reference)}
          className={`border w-20 h-auto text-black p-3 rounded-md block bg-white focus:border-2 focus:outline-none appearance-none`}
          />
        ))}
      </div>
      <p className={`text-lg text-black mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p>
      <div className = "d-grid" style={{ margin: '1rem 0'}}>
        <NavLink to="/NewPassword" className = "btn btn-primary pt-3 pb-3">Submit</NavLink>
      </div> 
    </div>
  );
}

export default OtpInputWithValidation;
