import React, { Component } from 'react';
import "./my.css";
import Block from './Block';

class Board extends Component{
    renderBoard(i){
        return(
            <Block 
            value={this.props.block[i]} 
            click={()=>this.props.click(i)}
            />
        );
    }
   render(){  
    return(
               <div id="board">
               <h1>Tic-Tac-Toe</h1>
                   <div id="board-b1">
                   {this.renderBoard(0)}
                   {this.renderBoard(1)}
                   {this.renderBoard(2)}
                   </div>
                   <div id="board-b2">
                   {this.renderBoard(3)}
                   {this.renderBoard(4)}
                   {this.renderBoard(5)}
                   </div>
                   <div id="board-b3">
                   {this.renderBoard(6)}
                   {this.renderBoard(7)}
                   {this.renderBoard(8)}
                   </div>                                      
               </div>          
    );}
}

export default Board;