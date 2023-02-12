import React from "react";
import detailBtn from "../../assert/btb-detail.png";
import editBtn from "../../assert/btb-edit.png";
import deleteBtn from "../../assert/btb-delete.png";

const TableBodyControl = (props) => {
  return (
    <div className="notification__control">
      <img src={detailBtn} alt="" />
      <img src={editBtn} alt="" />
      <img src={deleteBtn} alt="" onClick={props.handleDelBody} />
    </div>
  );
};

export default TableBodyControl;
