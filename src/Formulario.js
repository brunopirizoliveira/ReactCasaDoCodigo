import React, { Component } from 'react';
import FormValidator from './FormValidator.js';

export default class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: 'false',
                mensagem: 'Coloque um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: 'false',
                mensagem: 'Coloque um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 9999}],
                validoQuando: 'true',
                mensagem: 'Coloque um valor numérico'
            },            
            
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validator.valido()
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
        const validacao = this.validator.valida(this.state);   
        
        if(validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            })
            camposInvalidos.forEach(console.log)
        }

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