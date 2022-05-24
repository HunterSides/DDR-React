/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Typography, IconButton, Avatar } from '@mui/material';
import { green } from "@mui/material/colors";
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Badge from '@mui/material/Badge';

const EditProfile = () => {
  return (
    <>
      <div className="edit-container">
          <div className="avatar-section"> 
            <Badge 
              overlap="circular" 
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
              badgeContent={
                <IconButton aria-label="add-avatar">
                  <AddCircleIcon sx={{ height: 30, width: 30, color: "#008DE4" }}/>
                </IconButton>
              }>
                <Avatar sx={{ width: 225, height: 225, bgcolor: "#7FFF7D" }} />
            </Badge>
          </div>

          <div className="edit-section">
              <form>
                  <div className="text-area">
                    <input className="text-input" placeholder="First name" type="text" name="name" id="firstname"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Last name" type="text" name="name" id="lastname"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="Username" type="text" name="name" id="username"/>
                  </div>
                  <div className="create-password-area">
                    <Typography sx={{ lineHeight: "26px", fontWeight: 700, color: "#BBBBBB", px: "104px" }}> Create new password (if needed)</Typography>
                    <input className="text-input" placeholder="Current password" type="text" name="name" id="current-password"/>
                  </div>
                  <div className="text-area">
                    <input className="text-input" placeholder="New password" type="text" name="name" id="new-password"/>
                  </div>
              </form> 
            <div className="button-section">
                <button className="save-button" >
                  Save
                </button>
            </div>      
        </div>
      </div>
      <style jsx>{`
        .edit-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 819px;
          width: 440px;
          margin-left: auto;
          margin-right: auto;
        }
        .avatar-section {
          padding-top: 102px;
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
        }
        .edit-section {
          display: flex;
          flex-direction: column;
          gap: 27px;  
        }
        textarea:focus, input:focus{
          outline: none;
        }
        .text-area {
          padding-top: 23px;
          padding-bottom: 23px;
        }
        .create-password-area {
          padding-bottom: 23px;
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
        .save-button {
          padding: 10px 30px;
          border: none;
          background-color: rgba(0, 141, 228, 1 );
          cursor: pointer;
          height: 41px;
          width: 118px;

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

export default EditProfile;
