import React, { Component } from 'react';

class TableRow extends Component {

  fetchElement(number) {
    return (
      <td>
        <div className="td-container">
          {this.props.item[Object.keys(this.props.item)[number]]}</div>
      </td>
    );
  }

  stackElements() {
    const stack = [];
    const loopLength = Object.keys(this.props.item).length;

    for (let i = 0; i < loopLength; i++) {
      stack.push(this.fetchElement(i));
    }

    return stack;
  }

  render() {
    return (
      <tr onClick={() => this.props.toggleModal(this.props.link)}>
        {this.stackElements()}
      </tr>

    );
  }

}

TableRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
  link: React.PropTypes.object.isRequired,
};

export default TableRow;
