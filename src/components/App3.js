import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: '' }
        //this.changeName = this.changeName.bind(this);
    }

//    changeName = function (event) {
//        this.setState({ nome: event.target.value })
//    }
    changeNome = (evt) => {
        this.setState({ nome: evt.target.value });
    }
    render() {
        return (
            <>
                Nome: <input type='text' value={this.state.nome} onChange={this.changeNome} />
                <p>Oiii {this.state.nome}</p>
            </>
        );
    }
}

export default App3;