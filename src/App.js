import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.api_key = "mB2Oko638Vjt4o0H8m6nwpiIRVrRM4Eh";
    this.state = {
      error: null,
      isLoaded: false,
      body: [],
      measurementDate: "",
      measurementTime: ""
    }
  }

  componentDidMount() {
    this.fetchData()
    setInterval(async () => {this.fetchData()}, 30000);
  }

  async fetchData() {
    try {
      // Fetch from weather api
      fetch('http://data.jontzi.com/weather/api/1/latest?api_key=' + this.api_key)
      .then(res => res.json())
      .then(
        (result) => {

          var datetime = this.parseDatetime(result.body[0].time)

          this.setState({
            isLoaded: true,
            body: result.body,
            measurementDate: datetime[0],
            measurementTime: datetime[1]
          });
        },
        (error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    } catch (e) {
      console.log(e);
    }
  }

  parseDatetime(datetime) {
    let datetimeData = [];

    let date = new Date(datetime)
    datetimeData[0] = date.toLocaleDateString('en-FI')
    datetimeData[1] = date.toLocaleTimeString('en-FI')

    return datetimeData;
  }

  render () {
    const { error, isLoaded, body, measurementDate, measurementTime } = this.state;

    if (error) {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Error while loading data</h1>
            <p>This might be a problem with the server</p>
          </header>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <h2>Loading...</h2>
          </header>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-temperature">
              {body[0].temperature}°C
            </h1>

            <h2>
              {body[0].humidity}% <br />
              {body[0].pressure} Pa
            </h2>

            <p>
              Measured at {measurementTime} <br /> on {measurementDate}
            </p>
          </header>

          <footer className="App-footer">
            <p>
              Live weather from Herwood measured every minute. <br />
              Made by <a href="https://github.com/Jontzii" target="_blank" rel="noopener noreferrer" className="App-link">Jontzi</a>
            </p>
          </footer>
        </div>
      );
    }
  } 
}

export default App;
