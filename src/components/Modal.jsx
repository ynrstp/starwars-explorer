import React, { Component } from 'react';

class Modal extends Component {

  getData(number) {
    return (
      <li>
        <span className="property">{Object.keys(this.props.data)[number]}</span>
        : {this.props.data[Object.keys(this.props.data)[number]]}</li>
    );
  }

  getAll() {
    const blocks = [];
    const loopLength = Object.keys(this.props.data).length;

    for (let i = 0; i < loopLength; i++) {
      blocks.push(this.getData(i));
    }
    return blocks;
  }

  render() {
    const modalClass = this.props.modalVisible
      ? 'modal modal-active'
      : 'modal';
    const coverClass = this.props.modalVisible
      ? 'cover cover-active'
      : 'cover';
    return (
      <div className={coverClass} onClick={() => this.props.toggleModal()}>
        <div className={modalClass}>
          <ul>
            {this.getAll()}
          </ul>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  data: React.PropTypes.object.isRequired,
  modalVisible: React.PropTypes.bool.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
};

export default Modal;
