/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import DashLogo from '../assets/DashLogo.png'
import { apps, user } from "@dash-incubator/dapp-sdk";



const Signup = () => {

  
  
  return (
    <>
      <div className="signup-container">
          <div className="logo-section">
                <img src={DashLogo} className="logo" alt="Logo" />
          </div>

          <div className="signup-section">
              <form>
                  <div className="text-area">
                    <input className="text-input" placeholder="First name" type="text" name="name" id="name"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Last name" type="text" name="name" id="name"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Username" type="text" name="name" id="name"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Password" type="text" name="name" id="name"/>
                  </div>
              </form> 
            <div className="button-section">
                <button className="signup-button" >
                  Sign up
                </button>
            </div>      
        </div>
      </div>
      <style jsx>{`
        .signup-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 679px;
          height: 496px;
          padding-top: 101px;
          padding-left: 60px;
        }
        textarea:focus, input:focus{
          outline: none;
        }

        .signup-section {
            display: flex;
            flex-direction: column;
            gap: 50px;
            
        }
        
        .text-area {
          padding-top: 46px;
          padding-right: 20px
        }
        .text-input {
          width: 440px;
          height: 50px;
          border: none;
          padding-top: 10px;
          padding-left: 10px;
          background-color: #E8E8E8;
        }
        .text-input::placeholder {
          color: #BBBBBB;
          font-style: normal;
          font-weight: 700;
          font-size: 26px;
        }
        .button-section {
            display: flex;
            justify-content: center;
            
        }
        .signup-button {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-right: 25px;
          padding-left: 20px;
          border: none;
          background-color: rgba(0, 141, 228, 1 );
          cursor: pointer;
          height: 41px;
          

          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          letter-spacing: 0%;
          
          font-family: "M PLUS 1p Bold", sans-serif;
          font-style: normal;
          font-weight: 700;
        }

     
       
      `}</style>
    </>
  );
};

export default Signup;
