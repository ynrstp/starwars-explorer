import React, {Component} from 'react';

class CategoryItem extends Component {

    render() {

        return (
            <li onClick={() => this.props.changeCategory(this.props.item)}>{this.props.item}</li>
        )

    }

}

export default CategoryItem
