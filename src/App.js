import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import ArtPieceDisplay from './components/ArtPieceDisplay';


// APP
class App extends Component {
  constructor() {
    super();

    this.state = {
      artPieces: [],
    }
  }

  componentDidMount() {
    const apiKey = 'Ra6oa8D2';

    // $.ajax({})
    // accepts an object that specifies the aspects of the request
    axios({
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      method: 'GET',
      responseType: 'json',
      params: {
        key: apiKey,
      },
    }).then((response) => {
      console.log(response);

      this.setState({
        artPieces: response.data.artObjects,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my faMcy art app</h1>

        {this.state.artPieces.map((art, index) => {
          // displays data coming from the API call
          // the most top level node needs a key on it (previously, before refactoring this bit for function component, it was on the returned div)
          return (
            <ArtPieceDisplay art={art} index={index} key={index}/>
          )
        })}
      </div>
    );
  }
}

export default App;
