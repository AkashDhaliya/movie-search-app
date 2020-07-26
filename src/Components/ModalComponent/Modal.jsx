import React, { Component } from "react";

const Modal =  (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div className={this.props.showMovieDetailmodal ? "modal show-modal" : "modal"}>
          <div className="modal-content">
            <WrappedComponent />
          </div>
        </div>
      );
    }
  };
};

export default Modal;
