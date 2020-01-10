import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.css'
import AutentContexto from '../contexto/autent-contexto'


const cockpit = (props) => {
    const toggleBtnRef = useRef(null); 
    

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      /*setTimeout(() => {
        alert('Salvo dado na nuvem!');
      }, 1000); */
      toggleBtnRef.current.click();
      return() => {
        console.log('[Cockpit.js] cleanup trabalha no useEffect');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2º useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup trabalha no 2º useEffect')
      };
    });

    const classesAssinaladas = [];
    let botaoClasse = '';
    if (props.mostrarPessoas) {
      botaoClasse = classes.vermelho;
    }
    
    if (props.pessoasComprimento <= 2) {
      classesAssinaladas.push(classes.vermelho);  
    }
    if (props.pessoasComprimento <= 1) {
      classesAssinaladas.push(classes.negrito);  
    }
   
    return (
     <div className={classes.Cockpit}>  
        <h1>{props.title}</h1>
        <p className={classesAssinaladas.join(' ')}>Isto está funcionando</p>
        <button 
        ref={toggleBtnRef}
        className={botaoClasse}
        onClick={props.clicked}>Alternancia de Pessoas
        </button>
        <AutentContexto>
           {contexto => <button onClick={contexto.login}>Log in</button>}
        </AutentContexto>
     </div>
    );
};

export default React.memo(cockpit);