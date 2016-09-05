import React, { Component } from 'react';

import TableRow from './TableRow.jsx';
import TableHeadRow from './TableHeadRow.jsx';

class Table extends Component {

  render() {
    const rows = [];
    this.props.data.forEach((item, i) => {
      rows.push(<TableRow
        key={i}
        item={item}
        link={item.url}
        toggleModal={this.props.toggleModal}
      />);
    });

    const elements = [];
    Object.keys(this.props.data[0]).forEach((item) => {
      elements.push(<TableHeadRow key={Math.random()} item={item} />);
    });

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {elements}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

}

Table.propTypes = {
  data: React.PropTypes.object.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
};

export default Table;
