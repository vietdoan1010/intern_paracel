import "../TopUp/Css/DetailTopUp.css";

import Left from "../../assert/left.png";
import Close from "../../assert/x.png";
import Coin from "../../assert/coin.png";

import axios from "axios";

import { useState, useRef, useEffect } from "react";




function DeTailTopUp(props) {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NTgzNzUyMzIsImV4cCI6MTY1OTU4NDgzMiwibmJmIjoxNjU4Mzc1MjMyLCJqdGkiOiJiZHQ1M05LMVV2aVFzaDlTIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.7QBn1xHcOUkGOsrlYMEJ7Q4WJG-0CntHL-2XxbdLNOY";
  const [data, setData] = useState([]);
  // console.log("data",data);


  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/admin/topup/list",
        config
      );
      console.log("response: ", response);
      if (response.data.success) {
        // console.log("string",response.data.data)
        setData(response.data.data);

      }
    } catch (error) {
      if (error.response) {
        console.log("error.response:", error.response.data);;
      }
    }
  };

  useEffect(() => {
    handleFetchData.current();
    return () => { };
  }, []);

    return (
        <div className="page_detail">

                    <div className="detail_topup">
                        <div className="header_detail">
                            <img className="header_detail-left" src={Left} alt=""/>
                            <h3 className="header_detail-heading">Top Up Details</h3>

                            <img className="header_detail-close" alt="" src={Close} onClick={props.handle} />

                        </div>
            {data.map((item) => {
                return (
                        <div className="content_detail" key={item.id}>

                            <div className="detail_coin">
                                <img className="detail_coin-img" alt="" src={Coin} />
                                <span className="detail_coin-heading">Top Up</span>
                                <span className="detail_coin-amount">{item.amount}</span>

                            </div>
                            <div className="detail_group">
                                <span className="detail_group-title style">Status</span>
                                <span className="detail_group-status color">{item.success}</span>
                            </div>
                            <div className="detail_group">
                                <span className="detail_group-title style">ID Transaction</span>
                                <span className="detail_group-status">{item.transaction_id}</span>
                            </div>
                            <div className="detail_info">
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">ID</span>
                                    <span className="detail_group-status">{item.id}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Username</span>
                                    <span className="detail_group-status">{item.username}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Full Name</span>
                                    <span className="detail_group-status">{item.fullname}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Point Before Top up</span>
                                    <span className="detail_group-status">{item.point_before}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Point After Top up</span>
                                    <span className="detail_group-status">{item.point_after}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Date</span>
                                    <span className="detail_group-status">{item.created_at}</span>
                                </div>
                                <div className="detail_group-info">
                                    <span className="detail_group-title style">Message</span>
                                    <span className="detail_group-status">{item.message}</span>
                                </div>
                            </div>
                        </div>
                );
            })}
                    </div>
        </div>
    )
}

export default DeTailTopUp;