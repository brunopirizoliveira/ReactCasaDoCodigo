import React, {Component} from 'react';

const TableHead = () => {

    return(
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    
    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button className="btn waves-effect red" onClick={() => props.removeAutor(index)}>Remover</button></td>
            </tr>
        );
    })

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

export default class Tabela extends Component {

    render() {
        
        const {autores, removeAutor} = this.props;
        // Para declarar desta forma "autores" precisa existir dentro de props, para pegar automatico

        return(
            <div className="container">
                <table className="centered responsive-table">
                    <TableHead />
                    <TableBody autores = {autores} removeAutor = {removeAutor} />
                </table>
            </div>
        )
    }

}