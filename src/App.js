import React, { Component } from 'react';

import classes from './App.css'
import Pessoas from './Pessoas/Pessoas'; 
import Cockpit from './Cockpit/Cockpit';
import comClasse from './hoc/comClasse';
import Auxiliar from './hoc/Auxiliar'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {  
    pessoas: [
     {id:'1', nome: 'Tom', idade: 21},
     {id:'2', nome: 'Julia', idade: 22},
     {id:'3', nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor',
    mostrarPessoas: false,
    mostrarCockpit: true,
    contadorMudanca: 0
  }  
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
   
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nomeManipuladorAlterado = (event, id) => {
    const pessoaIndex = this.state.pessoas.findIndex(p => {
      return p.id === id;
    });
    
    const pessoa = {
      ...this.state.pessoas[pessoaIndex]
    };

    pessoa.nome = event.target.value;

    const pessoas = [...this.state.pessoas];
    pessoas[pessoaIndex] = pessoa;

    this.setState((prevState, props) => {
       return {
        pessoas: pessoas, contadorMudanca: prevState.contadorMudanca + 1
       }
    })
    
  }

  apagarManipuladorPessoa = (pessoaIndex) => {
    
    const pessoas = [...this.state.pessoas];
    pessoas.splice(pessoaIndex, 1);
    this.setState({pessoas: pessoas});
  }

  toogleManipuladorPessoas = () => {
    const fazerMostrar = this.state.mostrarPessoas;
    this.setState({mostrarPessoas: !fazerMostrar});
  }

  render() {
    console.log('[App.js] render')
    let pessoas = null;
    
    if (this.state.mostrarPessoas) {
      pessoas = 
         <Pessoas 
         pessoas={this.state.pessoas}
         clicked={this.apagarManipuladorPessoa}
         changed={this.nomeManipuladorAlterado} />
       
    }

    return (
      <Auxiliar > 
      <button onClick={() => {this.setState({mostrarCockpit: false})}}>Remover Cockpit</button>
        {this.state.mostrarCockpit ?
        <Cockpit 
        title={this.props.appTitulo}
        mostrarPessoas={this.state.mostrarPessoas} 
        pessoasComprimento={this.state.pessoas.length} 
        clicked={this.toogleManipuladorPessoas} /> : null}
        {pessoas}
      </Auxiliar> 
    ); 
  }
}

export default comClasse(App, classes.App);

