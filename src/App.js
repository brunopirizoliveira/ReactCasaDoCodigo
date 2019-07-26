import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './HeaderComponent';

class App extends Component {  
  
  state = {

    autores:[
      {
        nome: "Daniel",
        livro: "ES6",
        preco: "50,00"
      },
      {
        nome: "Paulo",
        livro: "Java 8",
        preco: "60,00"
      },
      {
        nome: "Guilheme",
        livro: "Devops",
        preco: "50,00"
      },
      {
        nome: "Gustavo",
        livro: "Laravel",
        preco: "45,00"
      }
    ]
  };

  removeAutor = index => {
    
    const {autores} = this.state;
    
    this.setState({
      autores : autores.filter((autor, posAtual) => {        
        return posAtual !== index;
      })
    });
  }

  escutadorDeSubmit = autor => {
    this.setState({autores: [...this.state.autores, autor]})
  }

  render() {
    return (
      
      <Fragment>
        <Header />
        <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor} />
        <Form escutadorDeSubmit={this.escutadorDeSubmit} />
      </Fragment>       
      
    );

  }
}

export default App;
