import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.api_key = "mB2Oko638Vjt4o0H8m6nwpiIRVrRM4Eh"; // This should not be stored here
    this.state = {
      error: null,
      initialLoaded: false,
      body: [],
      measurementDate: "",
      measurementTime: "",
      timer: 0,
      timerDefault: 60
    }
  }

  componentDidMount() {
    setInterval(async () => {this.timerControl()}, 1000);
  }

  fetchData() {
    const { timerDefault } = this.state;

    try {
      // Fetch from weather api
      fetch('https://data.jontzi.com/weather/api/1/latest?api_key=' + this.api_key)
      .then(res => res.json())
      .then(
        (result) => {
          var datetime = this.parseDatetime(result.body[0].time)

          this.setState({
            initialLoaded: true,
            body: result.body,
            measurementDate: datetime[0],
            measurementTime: datetime[1]
          });
        },
        (error) => {
          console.log(error)
          this.setState({
            initialLoaded: true,
            error
          });
        }
      )
    } catch (e) {
      console.log(e);
    }

    this.setState({
      timer: timerDefault
    })
  }

  parseDatetime(datetime) {
    let datetimeData = [];

    let date = new Date(datetime)
    datetimeData[0] = date.toLocaleDateString('en-FI')
    datetimeData[1] = date.toLocaleTimeString('en-FI')

    return datetimeData;
  }

  async timerControl() {
    const { timer } = this.state;

    if (timer > 0) {
      let time = timer - 1;
      this.setState({
        timer: time
      })
    } else {
      this.fetchData();
    }
  }

  updateNow() {
    this.fetchData();
  }

  render () {
    const { error, initialLoaded, body, measurementDate, measurementTime, timer } = this.state;

    if (error) {
      return (
        <div className="App">
          <header className="App-main-error">
            <h1>Error while loading data</h1>
            <p>This might be a problem with the server</p>
          </header>
        </div>
      );
    } else if (!initialLoaded) {
      return (
        <div className="App">
          <header className="App-main-error">
            <h2>Loading...</h2>
          </header>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-main">
            <h1 className="App-temperature">
              {body[0].temperature}°C
            </h1>
          </header>

          <section className="App-main-bottom">

            <p>
              &darr; More data below &darr;
            </p>

          </section>

          <section className="App-extra">

            <h3>
              Dewpoint: {body[0].dewpoint.toString().substr(0, 5)}°C <br />
              Humidity: {body[0].humidity.toString().substr(0, 5)}% <br />
              Pressure: {body[0].pressure.toString().substr(0, 4)}.{body[0].pressure.toString().substr(4, 2)} hPa <br />
              Air density: {body[0].air_density.toString().substr(0, 4)} kg/m3
            </h3>

            <p>
            <br />
              Measured at {measurementTime} <br /> on {measurementDate} <br /> <br />
              Measurements are updated once per minute.<br />
              Next update in {timer} seconds
            </p>

            <Button variant="outline-light" onClick={this.updateNow.bind(this)}>
              Update now
            </Button>
          </section>

          <footer className="App-footer">
            <p>
              
              Made by <a href="https://github.com/Jontzii" target="_blank" rel="noopener noreferrer" className="App-link">Jontzi</a>
            </p>
          </footer>
        </div>
      );
    }
  } 
}

export default App;
