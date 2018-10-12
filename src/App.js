import React, { Component } from 'react';
import {TextField, Grid, NativeSelect, FormControl, InputLabel} from '@material-ui/core';

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
      str:'',
      dex:'', 
      con:'', 
      int:'',
      wis:'',
      cha:'',
    };
    this.modifyParamsCalc= this.modifyParamsCalc.bind(this)
  }

  
  async componentWillMount(){ 
    
    let classes= await fetch('http://www.dnd5eapi.co/api/classes/')
    let jsonClasses= await classes.json()

    let raceArray= await fetch('http://www.dnd5eapi.co/api/races/')
    let jsonRaces= await raceArray.json()

    let abilityArray= await fetch('http://www.dnd5eapi.co/api/ability-scores/')
    let jsonability= await abilityArray.json()

    this.setState({
      classes:jsonClasses.results, 
      raceArray: jsonRaces.results,
      abilityArray: jsonability.results,
    })
    console.log(this.state.abilityArray)
  }
  
  modifyParamsCalc(i){
  if(i==1)return (-5);
  if(i==2 || i==3) return(-4);
  if(i==4 || i==5) return(-3);
  if(i==6 || i==7) return(-2);
  if(i==8 || i==9) return(-1);
  if(i==10 || i==11) return(0);
  if(i==12 || i==13) return(1);
  if(i==14 || i==15) return(2);
  if(i==16 || i==17) return(3);
  if(i==18 || i==19) return(4);
  if(i==20 || i==21) return(5);
  if(i==22 || i==23) return(6);
  if(i==24 || i==25) return(7);
  if(i==26 || i==27) return(8);
  if(i==28 || i==29) return(9);
  if(i==30) return(10);

        
   
    
  }

  
  render() {
    return (
      <Grid container spacing={16}>
      <Grid item xs={12}>
        <TextField
          style={{marginRight:10}}
          required
          id="standard-required"
          label="Nome do char"
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
      <Grid item xs={2} style={{height:"50%", minHeight:"50%"}}>
        <p>Pontos de habilidade</p>
        <TextField
          required
          type="number"
          style={{marginRight:10}}
          id="standard-required"
          label="Força"
          margin="normal"
          onChange={(event)=>{this.setState({str: event.target.value});}}
          value={this.state.str}
        />

        <TextField
          required
          style={{marginRight:10}}
          id="standard-required"
          label="Destreza"
          type="number"
          margin="normal"
          onChange={(event)=>{this.setState({dex: event.target.value});}}
          value={this.state.dex}
        />

        <TextField
          required
          type="number"

          style={{marginRight:10}}
          id="standard-required"
          label="Constituição"
          margin="normal"
          onChange={(event)=>{this.setState({con: event.target.value});}}
          value={this.state.con}
        />

        <TextField
          type="number"
          required
          style={{marginRight:10}}
          id="standard-required"
          label="Inteligencia"
          margin="normal"
          onChange={(event)=>{this.setState({int: event.target.value});}}
          value={this.state.int}
        />

        <TextField
          required
          type="number"

          style={{marginRight:10}}
          id="standard-required"
          label="Sabedoria"
          margin="normal"
          onChange={(event)=>{this.setState({wis: event.target.value});}}
          value={this.state.wis}
        />

        <TextField
          required

          type="number"
          style={{marginRight:10}}
          id="standard-required"
          label="Carisma"
          margin="normal"
          onChange={(event)=>{this.setState({cha: event.target.value});}}
          value={this.state.cha}
        />

      </Grid>
            <Grid item xs={1} style={{height:"50%", minHeight:"50%"}}>
            <p>Bonus</p>
              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="bonusstr"
              
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.str)}
              />

              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="standard-required"
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.dex)}
              />

              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="standard-required"
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.con)}
              />

              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="standard-required"
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.int)}
              />

              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="standard-required"
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.wis)}
              />

              <TextField
                required
                style={{marginRight:10, marginTop:32}}
                id="standard-required"
                margin="normal"
                disabled
                value={this.modifyParamsCalc(this.state.cha)}
              />

        </Grid>
      </Grid>
    );
  }
}

export default App;
