import React, {Component} from 'react';

class Modal extends Component {

    getData(number) {

        return <li>
            <span className="property">{Object.keys(this.props.data)[number]}</span>
            : {this.props.data[Object.keys(this.props.data)[number]]}</li>
    }

    getAll() {
        let blocks = []
        let loopLength = Object.keys(this.props.data).length

        for (let i = 0; i < loopLength; i++) {
            blocks.push(this.getData(i))
        }
        return blocks
    }

    render() {
        const modalClass = this.props.modalVisible
            ? 'modal modal-active'
            : 'modal'
        const coverClass = this.props.modalVisible
            ? 'cover cover-active'
            : 'cover'
        return (
            <div className={coverClass} onClick={() => this.props.toggleModal()}>
                <div className={modalClass}>
                    <ul>
                        {this.getAll()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Modal
