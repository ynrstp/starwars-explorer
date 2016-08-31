import React, {Component} from 'react';
import ajax from 'superagent';

import CategoryList from './CategoryList.jsx'
import Table from './Table.jsx'
import Modal from './Modal.jsx'

class App extends Component {

    constructor(props) {

        super(props)
        this.changeCategory = this.changeCategory.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            activeCategory: "people",
            data: [
                {
                    item: 0
                }
            ],
            modalVisible: false,
            modalData: 'http://swapi.co/api/people/1'

        }
    }

    componentDidMount() {
        ajax.get('http://swapi.co/api/people/').set('Accept', 'application/json').end((error, response) => {
            if (!error && response) {
                this.setState({data: response.body.results})
            } else {
                console.log('There was an error fetching from api', error);
            }
        });
    }

    changeCategory(newCategory) {
        ajax.get(`http://swapi.co/api/${newCategory}/`).set('Accept', 'application/json').end((error, response) => {
            if (!error && response) {
                this.setState({activeCategory: newCategory, data: response.body.results})
            } else {
                console.log('There was an error fetching from api', error);
            }
        });
    }

    toggleModal(url) {
        if (!url) {
            this.setState({
                modalVisible: !this.state.modalVisible
            })

        } else {
            ajax.get(url).set('Accept', 'application/json').end((error, response) => {
                if (!error && response) {
                    let parsedResponse = JSON.parse(response.text)
                    this.setState({
                        modalVisible: !this.state.modalVisible,
                        modalData: parsedResponse
                    })
                } else {
                    console.log('There was an error fetching from api', error);
                }
            })
        }

    }

    render() {

        return (
            <div>
                <Modal modalVisible={this.state.modalVisible} toggleModal={this.toggleModal} data={this.state.modalData}/>
                <CategoryList changeCategory={this.changeCategory}/>
                <Table data={this.state.data} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}

export default App
