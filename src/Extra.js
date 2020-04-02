import React from 'react';

const Extra = ({body, extra}) => {
    return (
        <div>
            <h3>
                Dewpoint: {body[0].dewpoint.toString().substr(0, 5)}°C <br />
                Humidity: {body[0].humidity.toString().substr(0, 5)}% <br />
                Pressure: {body[0].pressure.toString().substr(0, 4)}.{body[0].pressure.toString().substr(4, 2)} hPa <br />
                Air density: {body[0].air_density.toString().substr(0, 4)} kg/m3
            </h3>

            <p>
            <br />
                Measured at {extra[0]} <br /> on {extra[1]} <br /> <br />
                Next update in {extra[2]} seconds
            </p>
        </div>
    );
}

export const Footer = () => {
    return (
        <footer className="App-footer">
            <p>
                Made by <a href="https://github.com/Jontzii" target="_blank" rel="noopener noreferrer" className="App-link">Jontzi</a>
            </p> 
        </footer>
    );
}

export default Extra;