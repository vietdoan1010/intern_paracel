import "../TopUp/Css/topup.datatable.css";
//jQuery libraries
import $ from "jquery";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-datetime/js/dataTables.dateTime.js"

import "../TopUp/Css";
import Plus from "../../assert/plus.png";
import noteImage from "../../assert/note.png";

import notdata from "../../assert/notdata.png";
import edit from "../../assert/btb-detail.png";

import NotData from "./NotData";
import AddAmount from "./AddAmount";
import DeTailTopUp from "./DetailTopUp";
import Footer from "../../components/Footer";
import { ExportToExcel } from "./ExportCSV";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import moment from "moment";



const TopUp = (props) => {

  const fileName = "DataTableTopUp";



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

  const [showAddAmount, setShowAddAmount] = useState(false);
  const showAdd = () => {
    setShowAddAmount(!showAddAmount);
  }

  const [showDetailTopUp, setShowDetail] = useState(false);
  const showDetail = () => {
    setShowDetail(!showDetailTopUp,);
  }


  // Custom filtering function which will search data in column four between two values
  //   $.fn.dataTable.ext.search.push(
  //     function( settings, data, dataIndex ) {
  //         if ($('#min').val() != '') {
  //           var min = new Date($('#min').val());
  //         } else {
  //           var min = null;
  //         }
  //         if ($('#max').val() != '') {
  //           var max = new Date($('#max').val());
  //         } else {
  //           var max = null;
  //         }
  //         var date = new Date( data[4] );

  //         if (
  //             ( min === null && max === null ) ||
  //             ( min === null && date <= max ) ||
  //             ( min <= date   && max === null ) ||
  //             ( min <= date   && date <= max )
  //         ) {
  //             return true;
  //         }
  //         return false;
  //     }
  // );




  $(document).ready(function () {

    //   minDate = $('#min').dtDateTime({
    //     format: 'MMMM Do YYYY'
    //   })
    // maxDate = $('#max').dtDateTime({
    //   format: 'MMMM Do YYYY'
    // })

    // Disable search and ordering by default
    $.extend($.fn.dataTable.defaults, {
      // searching: true,
      // ordering: false,
      info: false,
      pageLength: 10,
      order: [[1, "acs"]],//desc
    });
    // Setup - add a text input to each footer cell
    $("#example thead tr:eq(1) th").each(function () {
      // var title = $(this).text();
      $(this).html('<input type="text" class="topup__column-search" />');
    });

    const example = $("#example").DataTable();
    example.destroy();

    // DataTable
    var table = $("#example").DataTable({
      orderCellsTop: true,
      // dom: "Bfrtip",
      buttons: [
        {
          extend: "colvis",

        },
      ],
    });

    // Apply the search
    $("#example thead").on(
      "keyup",
      ".topup__column-search",
      function () {
        table.column($(this).parent().index()).search(this.value).draw();
      }
    );

    //   $('#min, #max').on('change', function () {
    //     table.draw();
    // });

  });



  return (
    <>
      <div className="top__up">
        <div className="top__up__header">
          <div className="header__content">
            <div className="header__content-image">
              <img src={noteImage} alt="" />
            </div>
            <span className="header__content--title">Top Up</span>
          </div>
          {!showAddAmount && <div className="header__add" onClick={showAdd}>
            <div className="header__add--btn">
              <img className="header__add--icon" src={Plus} alt="" />
              <span className="header__add--title">ADD</span>
            </div>
          </div>}
          {showAddAmount && <AddAmount handle={showAdd} />}

        </div>
        {!showAddAmount && <div className="top__up__table">
          <div className="page__topup-transc">
            <h3 className="tranc-title">{data.length} Transactions </h3>
            <button className="transc-today">Today</button>
            <ExportToExcel apiData={data} fileName={fileName} />
          </div>
          <table id="example" class="display">
            <thead>
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Transaction ID</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Amount</th>
                <th>Point Before Top up</th>
                <th>Point After Top up</th>
                <th>Date</th>

              </tr>
            </thead>

            <thead>
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Transaction ID</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Amount</th>
                <th>Point Before Top up</th>
                <th>Point After Top up</th>
                <th>Date</th>

              </tr>
            </thead>

            <tbody>
              {data.map((item) => {
                const createAtConvertDate = moment(data.created_at).format(
                  "MMM Do YYYY"
                );
                return (
                  <tr key={item.id}>
                    <td>
                      {!showDetailTopUp && <img className="content__add--icon" alt="" src={edit} onClick={showDetail} />}
                    </td>
                    <td>{`#${item.id}`}</td>
                    <td style={{ maxWidth: "20px" }}>{`#${item.transaction_id}`}</td>
                    <td style={{ maxWidth: "30px" }}>{item.username}</td>
                    <td style={{ maxWidth: "100px" }}>{item.fullname}</td>
                    <td style={{ maxWidth: "30px" }}>{item.amount}</td>
                    <td style={{ maxWidth: "20px" }}>{item.point_before}</td>
                    <td style={{ maxWidth: "30px" }}>{item.point_after}</td>
                    <td>{createAtConvertDate}</td>

                  </tr>
                );
              })}
            </tbody>
          </table>


        


        </div>}
        {!showAddAmount && <Footer />}
        {showAddAmount && <AddAmount handle={showAdd} />}
        {showDetailTopUp && <DeTailTopUp handle={showDetail} />}



      </div>
    </>
  );
}

export default TopUp;