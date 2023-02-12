import "../TransferPoint/Css/DetailTransfer.css";

import Left from "../../assert/left.png";
import Close from "../../assert/x.png";
import Coin from "../../assert/coin.png";

import { dataDetailTransfer } from "../TransferPoint/data/dataDetailTransfer";



function DetailTransfer(props) {

    return (
        <div className="page_detail">
            {dataDetailTransfer.map((item) => {
                return (

                    <div className="detail_transfer" key={item.id}>
                        <div className="header_detail">
                            <img className="header_detail-left" src={Left} alt="" />
                            <h3 className="header_detail-heading">Top Up Details</h3>

                            <img className="header_detail-close" alt=""  src={Close} onClick={props.handle} />

                        </div>
                        <div className="content_detail">

                            <div className="detail_coin">
                                <img className="detail_coin-img" alt=""  src={Coin} />
                                <span className="detail_coin-heading">TransferPoint</span>
                                <span className="detail_coin-amount">{item.coin}</span>

                            </div>
                            <div className="detail_group">
                                <span className="detail_group-title style">Status</span>
                                <span className="detail_group-status color">{item.status}</span>
                            </div>
                            <div className="detail_group">
                                <span className="detail_group-title style">ID Transaction</span>
                                <span className="detail_group-status">{item.TransactionID}</span>
                            </div>
                            <div className="detail_info">
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">ID</span>
                                    <span className="detail_group-status">{item.id}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Username (Sender)</span>
                                    <span className="detail_group-status">{item.UsernameSender}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Full Name (Sender)</span>
                                    <span className="detail_group-status">{item.FullNameSender}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Username (Receiver)</span>
                                    <span className="detail_group-status">{item.UsernameReceiver}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Full Name (Receiver)</span>
                                    <span className="detail_group-status">{item.FullNameReceiver}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Amount</span>
                                    <span className="detail_group-status">{item.Amount}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Date</span>
                                    <span className="detail_group-status">{item.Date}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Message</span>
                                    <span className="detail_group-status">{item.Message}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DetailTransfer;