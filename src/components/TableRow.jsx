import React, {Component} from 'react';

class TableRow extends Component {

    fetchElement(number) {

        return (
            <td>
                <div className="td-container">{this.props.item[Object.keys(this.props.item)[number]]}</div>
            </td>
        )
    }

    stackElements() {
        let stack = []
        let loopLength = Object.keys(this.props.item).length

        for (let i = 0; i < loopLength; i++) {
            stack.push(this.fetchElement(i))
        }

        return stack
    }

    render() {

        return (
            <tr onClick={() => this.props.toggleModal(this.props.link)}>
                {this.stackElements()}
            </tr>

        )
    }

}

export default TableRow
