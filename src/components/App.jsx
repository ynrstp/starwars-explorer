import React, { Component } from 'react';
import ajax from 'superagent';

import CategoryList from './CategoryList.jsx';
import Table from './Table.jsx';

import Modal from './Modal.jsx';
import Loading from './Loading.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.changeCategory = this.changeCategory.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      activeCategory: 'people',
      data: [
        {
          item: 0,
        },
      ],
      modalVisible: false,
      modalData: 'http://swapi.co/api/people/1',
      loading: false,
    };
  }

  componentDidMount() {
    ajax.get('http://swapi.co/api/people/').set('Accept', 'application/json').end((error, response) => {
      if (!error && response) {
        this.setState({ data: response.body.results });
      } else {
        // console.log('There was an error fetching from api', error);
      }
    });
  }

  changeCategory(newCategory) {
    const results = [];

    this.setState({ loading: true });

    // make ajax request to the API and if the response includes a "next page-key, make
    // another API call"
    const getData = (url) => {
      ajax.get(url).set('Accept', 'application/json').end((error, response) => {
        if (!error && response) {
          results.push(...response.body.results);
          if (response.body.next !== null) {
            getData(response.body.next);
          } else {
            this.setState({ activeCategory: newCategory, data: results, loading: false });
          }
        } else {
          // console.log('There was an error fetching from api', error);
        }
      });
    };
    getData(`http://swapi.co/api/${newCategory}/`);
  }

  // When an item is clicked, make the modal visible and load the data with an ajax request
  toggleModal(url) {
    if (!url) {
      this.setState({
        modalVisible: !this.state.modalVisible,
      });
    } else {
      ajax.get(url).set('Accept', 'application/json').end((error, response) => {
        if (!error && response) {
          const parsedResponse = JSON.parse(response.text);
          this.setState({
            modalVisible: !this.state.modalVisible,
            modalData: parsedResponse,
          });
        } else {
          // console.log('There was an error fetching from api', error);
        }
      });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <CategoryList changeCategory={this.changeCategory} />
          < Loading />
        </div>
      );
    }
    return (
      <div>
        <Modal
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          data={this.state.modalData}
        />
        <CategoryList changeCategory={this.changeCategory} />
        <Table data={this.state.data} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default App;
