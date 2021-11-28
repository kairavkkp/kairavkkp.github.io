import React, { useEffect, useRef } from "react";

const ProjectModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{props.title}</h4>
        </div>
        <div className="modal-body">{props.paragraph}</div>
        <div className="modal-footer">
          <button className="modal-close-button" onClick={props.onClose}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
