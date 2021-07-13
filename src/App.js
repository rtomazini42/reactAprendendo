//import * as React from 'react';
import React from 'react'



class App extends React.Component {
    render() {
        return (
            <div>
                <p>
                    No React?
                </p>
                <p>
                    Segundo Paragrafo
                </p>
                <h1>
                    {new Date().toLocaleDateString('pt-BR')}
                </h1>
                </div>
            )
    }
}

export default App;
