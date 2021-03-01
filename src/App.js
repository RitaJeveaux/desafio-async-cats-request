import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: false,
      src: ''
    }
  }

  // componentDidMount() {
  //   this.fetchApi()
  // }

  // async fetchApi() {
  //   const data = await fetch('https://api.thecatapi.com/v1/images/search')
  //     .then(response => response.json())
  //     .then(result => (result))
  //   console.log(data)
  // }

  async fetchApi() {
    this.setState({
      loading: true
    });
  
    const data = await fetch('https://api.thecatapi.com/v1/images/search');
    const response = await data.json();
    const result = await response;
    console.log(result);
  
    this.setState({
      loading: false,
      src: result[0].url
    });
  }

  render() {
    const {loading, src} = this.state;
    return (
      <div className="App">
        MEOOOOOW!
        {!loading ? <img src={src} /> : <p>Loading...</p>}
        <button onClick={() => this.fetchApi()}>Buscar foto</button>
      </div>
    );
  }
}

export default App;
//teste