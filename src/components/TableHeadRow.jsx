import React, {Component} from 'react';

class TableHeadRow extends Component {

    render() {

        return (
            <th>{this.props.item}</th>
        )
    }

}

export default TableHeadRow
