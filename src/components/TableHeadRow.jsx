import React, { Component } from 'react';

class TableHeadRow extends Component {

  render() {
    return (
      <th>{this.props.item}</th>
    );
  }

}

TableHeadRow.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default TableHeadRow;
