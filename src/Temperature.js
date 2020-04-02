import React from 'react';

const Temperature = ({temperature, color}) => {
    return (
        <div>
            <header 
                className="App-main"
                style={{
                    backgroundColor: color
                }}
            >
                <h1 className="App-temperature">
                    {temperature}°C
                </h1>
            </header>

            <section 
                className="App-main-bottom"
                style={{ 
                backgroundColor: color 
                }}  
            >
                <p>
                    &darr; More data below &darr;
                </p>
            </section>
        </div>
    );
}

export default Temperature;