import Item from "../assets/Item.png"
import { styled } from '@mui/material/styles';

const Profile = () => {
  return (
    <>
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

      <style jsx>{`
        .document-panel {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          gap: 33px 300px;
                
          padding-top: 127px;
          padding-right: 285px;
          padding-bottom: 297px;
          padding-left: 285px
        }
        @media screen and (max-width: 1370px) {
          .document-panel {
              gap: 33px 210px; 
            }
        }
        @media screen and (max-width: 1280px) {
          .document-panel {
              gap: 33px 200px;
              padding-left: 150px;
              padding-right: 150px;
            }
        }
        .document {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Profile;
