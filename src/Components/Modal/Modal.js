import { createPortal } from "react-dom";
import { Component } from "react/cjs/react.production.min";
import PropTypes from "prop-types";
import s from "./Modal.module.css";
export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.code === "Escape") this.props.close();
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;
    const portalModal = document.querySelector("#nodalRoot");
    return createPortal(
      <div className={s.Overlay} onClick={this.closeModal}>
        <div className={s.Modal}>{children}</div>
      </div>,
      portalModal
    );
  }
}

Modal.propTypes = { children: PropTypes.element };
