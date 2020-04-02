import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setColor, parseDatetime } from './Misc'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Temperature from './Temperature';
import Extra, { Footer } from './Extra';
import Error from './Error';

ReactGA.initialize("UA-131317095-3");

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
      timerDefault: 60,
      color: "#282c34",
      colorDefault: "#282c34",
      prevColor: ""
    }
  }

  componentDidMount() {
    setInterval(async () => {this.timerControl()}, 1000);
  }

  fetchData() {
    const { timerDefault, colorDefault, color } = this.state;
    try {
      // Fetch from weather api
      fetch('https://data.jontzi.com/weather/api/1/latest?api_key=' + this.api_key)
      .then(res => res.json())
      .then(
        (result) => {
          var datetime = parseDatetime(result.body[0].time);
          var colorNew = setColor(result.body[0].temperature);

          this.setState({
            initialLoaded: true,
            body: result.body,
            measurementDate: datetime[0],
            measurementTime: datetime[1],
            color: colorNew,
            prevColor: color
          });
        },
        (error) => {
          console.log(error)
          this.setState({
            initialLoaded: true,
            error,
            color: colorDefault,
            prevColor: color
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
    const { 
      error, 
      initialLoaded, 
      body, 
      measurementDate, 
      measurementTime, 
      timer,
      color,
      prevColor
    } = this.state;

    if (error) {
      return (
        <div className="App">
          <Error timer={timer} />

          <Button 
              variant="outline-light"
              onClick={this.updateNow.bind(this)}
          >
              Try again now
          </Button>
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

      var extra = [measurementTime, measurementDate, timer];

      return (
        <div className="App">
          <Temperature temperature={body[0].temperature} color={color} />
          
          <div className="App-extra">
            <Extra body={body} extra={extra} />

            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400}}
                overlay={
                  <Tooltip id="button-tooltip">
                    Please note that excessive updating will be limited by server
                  </Tooltip>
                }
            >
                <Button variant="outline-light" onClick={this.updateNow.bind(this)}>
                  Update now
                </Button>
            </OverlayTrigger>
          </div>
          <Footer />
        </div>
      );
    }
  } 
}

export default App;
