import React, {Component} from 'react';
import ajax from 'superagent';

import CategoryItem from './CategoryItem.jsx'

class CategoryList extends Component {

    constructor(props) {

        super(props)

        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        ajax.get('http://swapi.co/api/').set('Accept', 'application/json').end((error, response) => {
            if (!error && response) {
                this.setState({
                    categories: Object.keys(response.body)
                });
            } else {
                console.log('There was an error fetching from api', error);
            }
        });
    }

    render() {

        let items = this.state.categories.map((item, i) => {
            return <CategoryItem key={Math.random()} item={item} changeCategory={this.props.changeCategory}/>
        })

        return (
            <div className="menu">
                <ul>
                    {items}
                </ul>
            </div>
        )

    }

}

export default CategoryList
