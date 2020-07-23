import React, { Component } from 'react';
import "./my.css";
import Board from './Board';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
             history:[{
                 page:Array(9).fill(null)
             }],
             xIsNext:true,
             stepNo:0,
        };
    }

    clickEffect(i) {
        const h = this.state.history.slice(0, this.state.stepNo + 1);
         const curPage = h[h.length - 1];
         const p = curPage.page.slice();
         if (getWinner(p) || p[i]) {
           return;
         }
         p[i] = this.state.xIsNext ? 'X' : 'O';
         this.setState({
           history: h.concat([{
             page: p
           }]),
           stepNo: h.length,   
           xIsNext: !this.state.xIsNext,

         });
    }
      jumpTo(step){
        this.setState({
          stepNo:step,
          xIsNext:(step%2)===0
        });
     } 

    render() {
      const h = this.state.history;
      const curPage = h[this.state.stepNo];  
      const winner = getWinner(curPage.page);
      const moves=h.map((step,mov)=>{
        const val = mov ? "Go To Turn :" + mov : "Go To Start";
      return(  
      <li key={mov}>
          <h3 id="move" onMouseDown={()=>this.jumpTo(mov)}>{val}</h3>
      </li>  
      );
      });

      let msg;
      if(winner){
      msg= "Congo! " + winner + " is Winner";
      }
      else
      msg="Next Player : " + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div id="game-panel">
            {/*game board */}
                   <Board
                   block={curPage.page}
                   click={(i)=>this.clickEffect(i)}
                   />
             {/*menu board */}
                   <div id="me-board">
                       <h1>Menu</h1>
                       <h1>{msg}</h1>
                       <ul>{moves}</ul>   
                   </div>          
              </div>
        )
    }
}

function getWinner(page) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (page[a] && page[a] === page[b] && page[a] === page[c]) {
        return page[a];
      }
    }
    return null;
  }