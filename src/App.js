import React, { Component } from "react";
import Game from "./Components/Game";

class App extends Component {
  render() {
    return <Game />;
  }
}
export default App;

//square dead and has three neightbours then it's born
//square alive and has less than 2 neighbours or more than 3 it dies
//otherwise a live cell lives and a dead cell remains dead

// RIGHT
// if (grid[i][j] === 0 && neighbour === 3) {
//     next[i][j] = 1;
//   } else if (grid[i][j] === 1 && (neighbour < 2 || neighbour > 3)) {
//     next[i][j] = 0;
//   } else {
//     next[i][j] = grid[i][j];
//   }

//WRONG
// if (neighbour < 2 || neighbour > 3) {
//     next[i][j] = 0;
//   } else if (neighbour === 2 || neighbour === 3) { -------> === 2 is incorrect. Otherwise its fine
//     next[i][j] = 1;
//   } else {
//     next[i][j] = grid[i][j];
//   }

/*to do:
disable and enable start button / 
change font / 
align text  / 
host the app  / 
write the readme / 
modulo the outside sqaures / 
faster and slower buttons 
*/
