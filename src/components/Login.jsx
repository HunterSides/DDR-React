/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import DashLogo from '../DashLogo.png'
import { apps, user } from "@dash-incubator/dapp-sdk";



const Login = () => {

  
  
  return (
    <>
      <div className="login-container">
          <div className="logo-section">
                <img src={DashLogo} className="logo" alt="Logo" />
          </div>

          <div className="login-section">
              <form>
                  <div className="text-area">
                    <input className="text-input" placeholder="Username" type="text" name="name" id="name"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Password" type="text" name="name" id="name"/>
                  </div>
              </form> 
          
        <div className="button-section">
            <button className="login-button" >
              Login
            </button>
            <button className="create-account-button" >
              Create Account
            </button>
        </div>      
        </div>
      </div>
      <style jsx>{`
        .login-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          width: 679px;
          height: 496px;
          padding-top: 166px;
          padding-left: 45px;
        }
        textarea:focus, input:focus{
          outline: none;
        }

        .login-section {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        
        .text-area {
          padding-top: 50px;
        }
        .text-input {
          width: 440px;
          height: 50px;
          border: none;
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
            gap: 60px
        }
        .login-button {
          
          padding-right: 30px;
          padding-left: 30px;
          border: none;
          background-color: rgba(0, 141, 228, 1 );
          cursor: pointer;

          color: rgba(255, 255, 255, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "M PLUS 1p Bold", sans-serif;
          font-style: normal;
          font-weight: 700;
        }

        .create-account-button {
          padding-top: 7px;
          padding-bottom: 7px;
          padding-right: 17px;
          padding-left: 17px;
          border: none;
          background-color: rgba(255, 255, 255, 1);
          cursor: pointer;

          color: rgba(0, 141, 228, 1 );
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: "M PLUS 1p Bold", sans-serif;
          font-style: normal;
          font-weight: 700;
        }
       
      `}</style>
    </>
  );
};

export default Login;
