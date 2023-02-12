import React from "react";
import { data } from "../../dataNotification";
import TableBodyControl from "./TableBodyControl";

const TableBodyList = (props) => {
  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td style={{ maxWidth: "50px" }}>{item.title}</td>
          <td style={{ maxWidth: "50px" }}>{item.content}</td>
          <td style={{ maxWidth: "50px" }}>{item.date}</td>
          <td>
            <TableBodyControl
              handleDelBody={props.handleDelBody}
            ></TableBodyControl>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBodyList;
