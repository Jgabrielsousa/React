import React from 'react'



class Contador extends React.Component
{

   constructor(props){
    super(props) 
    this.state ={
        quantidade : props.quantidadeInicial
    }
   }


    render(){
        const estilo = {
            color : this.props.cor
        }


        return (
                <div>
                    <button onClick={()=> this.setState({quantidade : this.state.quantidade-1})}>-1</button>
                    <span style={estilo}>Meu contador {this.state.quantidade}</span>
                    <button onClick={()=>this.setState({quantidade :this.state.quantidade+1}) }>+1</button> 
                </div>
                )
    }
}

export default Contador