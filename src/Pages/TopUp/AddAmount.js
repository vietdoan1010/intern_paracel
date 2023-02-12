import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../TopUp/data/dataSelect';
import "../TopUp/Css/AddAmount.css";
import ConfirmTopUp from './ConfirmTopUp';
import { useState } from "react";





const animatedComponents = makeAnimated();
function AddAmount(props) {
    const [amount, setAmount] = useState('')

    const [showConfirmTopUp, setShowConfirmTopUp] = useState(false);
    const showConfirm = () => {
        setShowConfirmTopUp(!showConfirmTopUp);
    }
    const changeAmount = (e) => {
        setAmount(e.target.value)
    }




    return (
        <form className="page__add" > 
            <div className="add__content">
                <div className="content__name">
                    <label className="content--title">Full Name</label>
                    <Select
                        className="content--select"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={colourOptions}
                        required
                    />
                </div>

                <div className="content__amount">
                    <label className="content--title">Amount</label>
                    <br />
                    <input className="content__amount--input" type="number" required onChange={changeAmount}/>
                </div>

                <div className="content__mess">
                    <label className="content--title">Message</label>
                    <br />
                    <textarea className="content__mess--input" type="text" required />
                </div>
            </div>

            <div className="add__btn">
                <button className="btn btn--cancel" onClick={props.handle}>Cancel</button>
                {!showConfirmTopUp && <button className="btn btn--confirm" onClick={showConfirm}>Confirm</button>}
            </div>
            {showConfirmTopUp && <ConfirmTopUp handle={showConfirm} valueAmount={amount}/>}
        </form>
    )
}

export default AddAmount;