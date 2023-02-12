import "../../CSS/jquery.dataTables.min.css";
import "../../CSS/notification.css";
//jQuery libraries
import $ from "jquery";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import { useState } from "react";

import lifeBuoy from "../../assert/life-buoy.png";
import plusBtn from "../../assert/plus.png";

import Footer from "../../components/Footer";
import ShowCreateNotification from "./ShowCreateNotification";
import DeleteNotification from "./DeleteNotification";
import TableBodyList from "./TableBodyList";
import { data } from "../../dataNotification";
// import "datatables.net-dt/css/jquery.dataTables.min.css";

function Notification(props) {
  $(document).ready(function () {
    // Disable search and ordering by default
    $.extend($.fn.dataTable.defaults, {
      //     // searching: false,
      //     // ordering: false,
      info: false,
      pageLength: 10,
    });
    // Setup - add a text input to each footer cell
    $("#example thead tr:eq(1) th").each(function () {
      // var title = $(this).text();
      $(this).html('<input type="text" class="notification__column-search" />');
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
      ".notification__column-search",
      function () {
        table.column($(this).parent().index()).search(this.value).draw();
      }
    );
  });

  const [create, setCreate] = useState(false);
  const [del, setDel] = useState(false);

  const handleShowCreate = () => {
    setCreate(!create);
  };

  const handleDelete = () => {
    setDel(!del);
  };

  return (
    <div className="notification">
      {create && (
        <ShowCreateNotification
          handle={handleShowCreate}
        ></ShowCreateNotification>
      )}
      {del && (
        <DeleteNotification handleDel={handleDelete}></DeleteNotification>
      )}
      <div className="notification__header">
        <div className="notification__header-title">
          <div className="notification__header-image">
            <img src={lifeBuoy} alt="" />
          </div>
          <p className="notification__header-content">Notification</p>
        </div>
        <button className="notification__header-btn" onClick={handleShowCreate}>
          <img src={plusBtn} alt="" className="notification__header-icon" />
          <p className="notification__header-add">add</p>
        </button>
      </div>
      <div className="notification__table">
        <div className="notification__table-curren">
          There are currently {data.length} post
        </div>
        <table id="example" className="display notification__datatables">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <thead id="header-search">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <TableBodyList handleDelBody={handleDelete}></TableBodyList>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Notification;
