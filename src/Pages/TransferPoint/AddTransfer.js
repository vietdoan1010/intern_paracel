import { useState } from "react";
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from '../TransferPoint/data/dataSelect';
import "../TransferPoint/Css/AddTransfer.css";

import ConfirmTransfer from "./ConfirmTransfer";




const animatedComponents = makeAnimated();
function AddTransfer(props) {

    const [showConfirmTransfer, setShowConfirmTransfer] = useState(false);
    const showConfirm = () => {
        setShowConfirmTransfer(!showConfirmTransfer);
    }

    return (
        <form className="page__addtransc">
            <div className="add__content-column">

                <div className="add__content_name">

                    <div className="content__name-seeder">
                        <label className="content--title">Seeder</label>
                        <Select
                            className="content--select"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={colourOptions}
                        />
                    </div>
                    <div className="content__name-receiver">
                        <label className="content--title">Receiver</label>
                        <Select
                            className="content--select"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={colourOptions}
                        />
                    </div>
                </div>
                <div className="add__content_name">
                    <div className="content__amount">
                        <label className="content--title">Amount</label>
                        <br />
                        <input className="content__amount--input" type="number" required />
                    </div>

                    <div className="content__mess">
                        <label className="content--title">Message</label>
                        <br />
                        <textarea className="content__mess--input" type="text" required />
                    </div>
                </div>
            </div>


            <div className="add__btn">
                <button className="btn btn--cancel" onClick={props.handle}>Cancel</button>
                {!showConfirmTransfer &&  <button className="btn btn--confirm" type="submit" onClick={showConfirm}>Confirm</button>}
            </div>
        
                {showConfirmTransfer&& <ConfirmTransfer handle={showConfirm}/>}


        </form>
    )
}

export default AddTransfer;