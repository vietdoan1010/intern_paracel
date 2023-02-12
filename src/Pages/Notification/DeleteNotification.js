import closeButton from "../../assert/x.png";

const DeleteNotification = (props) => {
  return (
    <div className="shadow-full">
      <div className="notification__delete">
        <div className="notification__delete-header">
          <p className="notification__delete-name">Delete</p>
          <img
            src={closeButton}
            alt=""
            className="notification__delete-close"
            onClick={props.handleDel}
          />
        </div>
        <div className="notification__delete-container">
          <div className="notification__delete-title">
            <h1>You are sure you want to delete</h1>
          </div>
          <div className="notification__delete-body">
            <button onClick={props.handleDel}>Cancel</button>
            <button className="notification__delete-body--confirm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteNotification;
