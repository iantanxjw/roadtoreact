import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { isTemplateElement, tsConstructorType } from '@babel/types';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: '3',
    points: 4,
    objectID: 0,
  },
  {
    tite: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };
    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange() {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="App">
      <form>
        <input 
        type="text"
        onChange={this.onSearchChange}
        />
      </form>

        {this.state.list.map(item => {
          const onHandleDismiss = () =>
            this.onDismiss(item.objectID);
        
          return(
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
                >
                  Dismiss
              </button>
            </span>
          </div> 
        );
      }
    )}
    </div> 
    );
  }
}

export default App;
