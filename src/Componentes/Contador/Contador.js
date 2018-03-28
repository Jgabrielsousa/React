import React from 'react'



class Contador extends React.Component
{
    //construtor
   constructor(props){
    super(props) 

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)

    this.state ={
        quantidade : props.quantidadeInicial
    }
   }


   //funcoes 
   add(){

    if(this.state.quantidade<this.props.quantidadeInicial)
    {
        this.setState({quantidade :this.state.quantidade+1})
    }
   }
   remove(){

    if(this.state.quantidade>0)
    {
        this.setState({quantidade : this.state.quantidade-1})
    }
    }
    //render GSX
    render(){
        const estilo = {
            color : this.props.cor
        }


        return (
                <div>
                    <button onClick={this.remove}>-1</button>
                    <span style={estilo}>Meu contador {this.state.quantidade}</span>
                    <button onClick={this.add}>+1</button> 
                </div>
                )
    }
}

export default Contador