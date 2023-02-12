import "../TopUp/Css/ConfirmTopUp.css";
import PlusWhite from "../../assert/plus-white.png";
import { useState } from "react";





function ConfirmTopUp(props) {
    const [confirmAmount, setConfirmAmount] = useState('');

    const [showBtn, setShowBtn] = useState(false);
    
    const changeConfirmAmount = (e) => {
        setConfirmAmount(e.target.value)
        setShowBtn(true);
    }
    return (
        <div className="page__comfirm">
            <form className="comfirm__modal">
                <div className="modal__icon">
                    <img className="modal__icon--img" src={PlusWhite} alt=""/>
                </div>
                <div className="modal--line"></div>
                <div className="modal__content">
                    <h3 className="modal__content--title">Creat Top Up</h3> 
                    <p className="modal__content--ask">You are creating top up for user</p>
                    <p className="modal__content--req">If you are sure to create this user,<br />Please enter the <span>{props.valueAmount||'AMOUNT' }</span>.</p>
                    <input className="modal__content--input" type="number" 
                    required 
                    onChange={changeConfirmAmount}/>
                    
                    {props.valueAmount !== confirmAmount && <p className="confirm--pls">Please Re-Enter <span>{props.valueAmount||'AMOUNT' }</span></p>}
                </div>
                
                {
                    showBtn && 
                <div className="modal__btn">
                    <button className="btn btn--cancel" onClick={props.handle}>Cancel</button>
                    { <button className="btn btn--confirm" type="submit">Confirm</button>}
                </div>
                }
            </form>
        </div>
    )
}

export default ConfirmTopUp;