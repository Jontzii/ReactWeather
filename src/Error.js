import React from 'react';

const Error = ({timer}) => {
    return (
        <header className="App-main-error">
            <h1>Error while loading data</h1>
            <p>
                This might be a problem with the server. <br /><br />
                Trying again in {timer} seconds
            </p>   
        </header>
    );
}

export default Error;