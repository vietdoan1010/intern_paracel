import "../TransferPoint/Css/TransferPoint.css";
import "../TransferPoint/Css/Transfer.datatable.css";

//jQuery libraries
import $ from "jquery";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";

import { Link } from "react-router-dom";
import Plus from "../../assert/plus.png";
import DownLoad from "../../assert/download.png";
import noteImage from "../../assert/note.png";
import edit from "../../assert/btb-detail.png";

import AddTransfer from "./AddTransfer";
import Footer from "../../components/Footer";
import DetailTransfer from "./DetailTransfer";

import { useState } from "react";

import { dataTransfer } from "../TransferPoint/data/dataTransfer";



const TransferPoint = (props) => {

  const [showAddTransfer, setShowAddTransfer] = useState(false);
  const showAdd = () => {
    setShowAddTransfer(!showAddTransfer);
  }

  const [showDetailTransfer, setShowDetail] = useState(false);
  const showDetail = () => {
    setShowDetail(!showDetailTransfer,);
  }


  $.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
      if ($('#min').val() != '') {
        var min = new Date($('#min').val());
      } else {
        var min = null;
      }
      if ($('#max').val() != '') {
        var max = new Date($('#max').val());
      } else {
        var max = null;
      }
      var date = new Date(data[4]);

      if (
        (min === null && max === null) ||
        (min === null && date <= max) ||
        (min <= date && max === null) ||
        (min <= date && date <= max)
      ) {
        return true;
      }
      return false;
    }
  );

  $(document).ready(function () {
    // Disable search and ordering by default
    $.extend($.fn.dataTable.defaults, {
      // searching: false,
      ordering: false,
      info: false,
      pageLength: 5,
      // order: [[1, "DECS"]],
    });
    // Setup - add a text input to each footer cell
    $("#example thead tr:eq(1) th").each(function () {
      // var title = $(this).text();
      $(this).html('<input type="text" class="transfer__column-search" />');
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
      ".transfer__column-search",
      function () {
        table.column($(this).parent().index()).search(this.value).draw();
      }
    );

    $('#min, #max').on('change', function () {
      table.draw();
    });
  });

  return (
    <>
      <div className="transfer__point">
        <div className="transfer__point__header">
          <div className="header__content">
            <div className="header__content-image">
              <img src={noteImage} alt="" />
            </div>
            <span className="header__content--title">Transaction Point</span>
          </div>
          {!showAddTransfer && <div className="header__add" onClick={showAdd}>
            <Link to="./" className="header__add--btn">
              <img className="header__add--icon" alt="" src={Plus} />
              <span className="header__add--title">ADD</span>
            </Link>
          </div>}
          {showAddTransfer && <AddTransfer handle={showAdd} />}

        </div>
        {!showAddTransfer ? <div className="transfer__point__table">
          <div className="transfer__point-transc">
            <h3 className="tranc-title">{dataTransfer.length} Transactions </h3>
            <button className="transc-today">Today</button>
            <button className="transc-down">
              <img className="btn-down" alt="" src={DownLoad} />
            </button>
          </div>

          <table id="example" class="display">
            <thead>
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Transaction ID</th>
                <th>Sender</th>
                <th>Sender(Full name)</th>
                <th>Receiver</th>
                <th>Receiver(Full name)</th>
                <th>Amount</th>
                <th>Date</th>

              </tr>
            </thead>

            <thead>
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Transaction ID</th>
                <th>Sender</th>
                <th>Sender(Full name)</th>
                <th>Receiver</th>
                <th>Receiver(Full name)</th>
                <th>Amount</th>
                <th>Date</th>

              </tr>
            </thead>

            <tbody>
              {dataTransfer.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      {!showDetailTransfer && <img className="content__add--icon" alt="" src={edit} onClick={showDetail} />}
                    </td>
                    <td>{`#${item.id}`}</td>
                    <td style={{ maxWidth: "30px" }}>{`#${item.TransactionID}`}</td>
                    <td style={{ maxWidth: "30px" }}>{item.Sender}</td>
                    <td style={{ maxWidth: "30px" }}>{item.SenderFullName}</td>
                    <td style={{ maxWidth: "30px" }}>{item.Receiver}</td>
                    <td style={{ maxWidth: "30px" }}>{item.ReceiverFullName}</td>
                    <td style={{ maxWidth: "30px" }}>{item.Amount}</td>
                    <td>{item.Date}</td>

                  </tr>
                );
              })}
            </tbody>
          </table>
          <table border="0" cellspacing="5" cellpadding="5">
            <tbody><tr>
              <td>Minimum date:</td>
              <td><input type="date" id="min" name="min" /></td>
            </tr>
              <tr>
                <td>Maximum date:</td>
                <td><input type="date" id="max" name="max" /></td>
              </tr>
            </tbody></table>
        </div> : ""}
        {showAddTransfer && <AddTransfer handle={showAdd} />}
        {showDetailTransfer && <DetailTransfer handle={showDetail} />}
        <Footer />
      </div>
    </>
  );
}

export default TransferPoint;
