import React, { Component } from 'react';

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const {nome, livro, preco} = this.state;

        return(

            <div className="container">
                <form>
                    <div className="input-field">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" 
                            id="nome" 
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}>
                        </input>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="livro">Livro</label>
                        <input type="text" 
                            id="livro" 
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}>
                        </input>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="preco">Preço</label>
                        <input type="number" 
                            id="preco" 
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}>        
                        </input>
                    </div>

                    <button type="button" className="btn waves-effect waves-light" onClick={this.submitFormulario}>Salvar</button>
                </form>
            </div>
        )
    }

}