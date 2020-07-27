import React, { Component } from "react";

const Modal = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div
          className={
            this.props.showMovieDetailmodal ? "modal show-modal" : "modal"
          }
        >
          <div className="modal-content">
            <span
              className="close-button"
              onClick={this.props.hideMovieDetailmodal}
            >
              ×
            </span>
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
};

export default Modal;
