import React, { Component } from 'react';
import './App.css';
import {  Grid, GridItem } from 'grid-dnd';
import uuidv4 from 'uuid/v4';
//gjhgjhgg
class App extends Component {
  render() {
    console.log(Grid)
    console.log(uuidv4())
    let dragItems = [{id: uuidv4(), width: 8}, {id: uuidv4(), width: 4}, {id: uuidv4(), width: 3}, {id: uuidv4(), width: 4}, {id: uuidv4(), width: 12}, {id: uuidv4(), width: 8}, {id: uuidv4(), width: 3}, {id: uuidv4(), width: 16}];//sdfssdf
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Grid columns={24}>
              {dragItems.map(({id, width}) => <GridItem id={id} width={width}> </GridItem>  )}
            </Grid>
        </div>
      </div>
    );
  }
}

export default App;
