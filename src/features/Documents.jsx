import Item from "../assets/Item.png"
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

          padding-top: 62px;
          padding-right: 285px;
          padding-bottom: 297px;
          padding-left: 285px
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
