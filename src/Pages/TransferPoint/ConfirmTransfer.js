import "../TransferPoint/Css/ConfirmTransfer.css";
import PlusWhite from "../../assert/plus-white.png";
import { useState } from "react";





function ConfirmTransfer(props) {

    const [showBtn, setShowBtn] = useState(false);
    const showButton = () => {
        setShowBtn(!showBtn);
    }

    
    return (
        <div className="page__comfirm">
            <form className="comfirm__modal">
                <div className="modal__icon">
                    <img className="modal__icon--img" src={PlusWhite} alt=""/>
                </div>
                <div className="modal--line"></div>
                <div className="modal__content">
                    <h3 className="modal__content--title">Creat TransferPoint</h3> 
                    <p className="modal__content--ask">You are creating top up for user</p>
                    <p className="modal__content--req">If you are sure to create this user,<br />Please enter the <span>AMOUNT</span>.</p>
                    <input className="modal__content--input" type="number" required onClick={showButton}/>
                </div>
                {showBtn && <div className="modal__btn" handle={showButton}>
                    <button className="btn btn--cancel" onClick={props.handle}>Cancel</button>
                    { <button className="btn btn--confirm" type="submit">Confirm</button>}
                </div>}

             
            
            </form>
            {/* <p className="confirm--pls">Please Re-Enter <span>AMOUNT</span></p> */}
        </div>
    )
}

export default ConfirmTransfer;