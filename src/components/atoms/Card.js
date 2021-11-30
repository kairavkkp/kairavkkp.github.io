import React, { useState } from "react";

import ReactModal from "react-modal";

const Card = ({ heading, paragraph, imgUrl }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <button className="btn" onClick={() => setShow(true)}>
          Explore
        </button>
        <ReactModal isOpen={show}
        className="modal"
        overlayClassName="overlay">
          <div onClick={() => setShow(false)}>
            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="modal-header">
                <h1>{heading}</h1>
              </div>

              <div className="modal-main">
              <div className="sidebar">
                <button className="sidebar-button">About</button>
                <button className="sidebar-button">About</button>
              </div>
              <div className="modal-body">{paragraph}</div>
              </div>
              <div className="modal-footer">
                <button
                  className="modal-close-button"
                  onClick={() => setShow(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    </div>
  );
};

export default Card;
