import React, { Component } from 'react';
import {TextField, Grid, NativeSelect, FormControl} from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      antecedente:"",
      classes:[],
      raceArray:[], 
      classSelected:"",
      raceSelected:"",
    };

  }

   
  
  async componentWillMount(){
    let classes= await fetch('http://www.dnd5eapi.co/api/classes/')
    let jsonClasses= await classes.json()

    let raceArray= await fetch('http://www.dnd5eapi.co/api/races/')
    let jsonRaces= await raceArray.json()
    this.setState({
      classes:jsonClasses.results, 
      raceArray: jsonRaces.results,
    })
    console.log(this.state.classes)
  }
  

  
  render() {
    return (
      <Grid container spacing={16}>
      <Grid item xs={12}>
        <TextField
          style={{marginRight:10}}
          required
          id="standard-required"
          label="Name of your char"
          margin="normal"
          onChange={(event)=>{this.setState({name: event.target.value});}}
          value={this.state.name}
        />

        <TextField
          required
          style={{marginRight:10}}
          id="standard-required"
          label="Antecedente"
          margin="normal"
          onChange={(event)=>{this.setState({antecedente: event.target.value});}}
          value={this.state.antecedente}
        />
        <FormControl style={{minWidth: 120, }}>
          <label>Selecione a classe</label>
          
          <NativeSelect
            value={this.state.classSelected}
            
            onChange={(event)=>{this.setState({classSelected: event.target.classSelected})}}
          >

            {this.state.classes.map(classes => (
                <option key={classes.url} value={classes.name}>{classes.name}</option>
            ))}
         
           
            
          </NativeSelect>
          </FormControl>

          <FormControl style={{minWidth: 120, marginLeft:10 }}>
              <label>Selecione a Raça</label>
              
              <NativeSelect
                value={this.state.raceSelected}
                onChange={(event)=>{this.setState({raceSelected: event.target.raceSelected})}}
              >

                {this.state.raceArray.map(raceArray => (
                    <option key={raceArray.url} value={raceArray.name}>{raceArray.name}</option>
                ))}
            
              
                
              </NativeSelect>
          </FormControl>
      </Grid>
     
      </Grid>
    );
  }
}

export default App;
