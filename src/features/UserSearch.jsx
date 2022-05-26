/* eslint-disable no-unused-vars */
import { Typography, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <>
          <div className="user-panel">
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#FFF27D" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#67C4F8" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#A4F1B5" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#DD6767" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#FFF27D" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#67C4F8" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#A4F1B5" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
                <div className="user"> 
                    <Avatar sx={{ width: 225, height: 225, bgcolor: "#DD6767" }} />
                    <Typography sx={{ lineHeight: "26px", fontSize: "26px", fontWeight: 700, pt: "21px" }}> User Name </Typography>
                </div>
          </div>
      <style jsx>{`
        .user-panel {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          gap: 119px 180px;

          padding-top: 130px;
          padding-right: 240px;
          padding-bottom: 222px;
          padding-left: 240px;
        }
        .user {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Profile;
