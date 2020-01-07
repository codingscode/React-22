
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Pessoa.css'
import Auxiliar from '../hoc/Auxiliar';
import comClasse from '../hoc/comClasse'

class Pessoa extends Component {
   constructor(props) {
     super(props);
     this.inputElementRef = React.createRef();
   }

   componentDidMount() {
      //this.inputElement.focus();  //destaca o 3º
      this.inputElementRef.current.focus();
   }

   render() {
      console.log('[Pessoa.js] rendering...') 
      return (
         <Auxiliar>
            <p key="i1" onClick={this.props.click}>Eu sou {this.props.nome}, Eu sou uma Pessoa e tenho {this.props.idade} anos !</p>
            <p key="i2" >{this.props.children}</p>
            <input key="i3" ref={this.inputElementRef} type='text' onChange={this.props.changed} value={this.props.nome}></input>
         </Auxiliar>
      );
   }
   
}

Pessoa.propTypes = {
   click: PropTypes.func,
   nome: PropTypes.string,
   idade: PropTypes.number,
   changed: PropTypes.func
};

export default comClasse(Pessoa, classes.Pessoa);
