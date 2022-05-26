/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Typography, IconButton, Avatar } from '@mui/material';
import { green } from "@mui/material/colors";
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Badge from '@mui/material/Badge';
import Item from "../assets/Item.png"
const Profile = () => {
  return (
    <>
      <div className="profile-container">
          <div className="user-panel">
                <div className="avatar-section"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#7FFF7D" }} />
                </div>
                <div className="username-section">
                    <Typography sx={{ lineHeight: "26px", fontSize: "42px", fontWeight: 700, pt: "46px" }}> Elon Musk </Typography>
                    <Typography sx={{ lineHeight: "26px", fontSize: "20px", fontWeight: 700, color: "#BFBBBB", pt: "18px", pb: "23px" }}> @user_name </Typography>
                </div>
                <div className="button-section">
                    <button className="edit-button" >
                        Edit
                    </button>
                </div> 
          </div>
          <div className="document-panel">
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
                <div className="document"> 
                    <img src={Item} alt={"Item"}/> 
                </div>
          </div>
               
      </div>
      <style jsx>{`
        .profile-container {
          display: flex;
          flex-direction: row;
          gap: 180px;
        }
        .user-panel {
          display: flex;
          flex-direction: column;
          align-items: left;
          padding-top: 85px;
          padding-left: 120px;
        }
        .edit-button {
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
        .document-panel {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          gap: 33px 300px;

          padding-top: 85px;
          padding-right: 45px;
          padding-bottom: 297px;
        }
        .document {
          display: flex;
          flex-direction: column;
          padding-bottom: 33px;
         
        }
      `}</style>
    </>
  );
};

export default Profile;
