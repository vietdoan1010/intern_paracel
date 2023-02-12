import { useEffect, useState } from "react";
import closeButton from "../../assert/x.png";

const ShowCreateNotification = (props) => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    // cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlPreviewFile = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    // console.log(URL.createObjectURL(file));

    setAvatar(file);
  };
  return (
    <div className="shadow-full">
      <div className="notification__create">
        <div className="notification__create-header">
          <p className="notification__create-name">Create Notification</p>
          <img
            src={closeButton}
            alt=""
            className="notification__create-close"
            onClick={props.handle}
          />
        </div>
        <div className="notification__create-container">
          <div className="notification__create-title">
            <h1>Title</h1>
            <input type="text" placeholder="Enter ....." />
          </div>
          <div className="notification__create-body">
            <div className="notification__create-photo">
              <div className="notification__create-photo-top">
                <p>Choose Photo</p>
                <input
                  type="file"
                  name="choose file"
                  id="notification__create-file"
                  onChange={handlPreviewFile}
                />
                {!avatar ? (
                  <div className="notification__create-image"></div>
                ) : (
                  <div className="notification__create-image--show">
                    {avatar && (
                      <img src={avatar.preview} alt="" id="preview-file" />
                    )}
                  </div>
                )}
              </div>
              <button>Create</button>
            </div>
            <div className="notification__create-content">
              <h2>CONTENT</h2>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCreateNotification;
