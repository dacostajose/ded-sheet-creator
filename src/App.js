import React, { Component } from 'react';
import {TextField, Grid, NativeSelect, FormControl, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      antecedente:"",
      classes:[],
      raceArray:[],
      skillsArray:[],
      reponse:"",
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
    this.infoSkills= this.infoSkills.bind(this)
  }

  
  async componentWillMount(){ 
    
    let classes= await fetch('http://www.dnd5eapi.co/api/classes/')
    let jsonClasses= await classes.json()

    let raceArray= await fetch('http://www.dnd5eapi.co/api/races/')
    let jsonRaces= await raceArray.json()

    let skillsArray= await fetch('http://www.dnd5eapi.co/api/skills')
    let jsonSkills= await skillsArray.json()


    this.setState({
      classes:jsonClasses.results, 
      raceArray: jsonRaces.results,
      skillsArray: jsonSkills.results,
    })
   
  }

  
  modifyParamsCalc(i){
      // eslint-disable-next-line
    if(i==1)return (-5);
    // eslint-disable-next-line
    if(i==2 || i==3) return(-4);
    // eslint-disable-next-line
    if(i==4 || i==5) return(-3);
    // eslint-disable-next-line
    if(i==6 || i==7) return(-2);
    // eslint-disable-next-line
    if(i==8 || i==9) return(-1);
    // eslint-disable-next-line
    if(i==10 || i==11) return(0);
    // eslint-disable-next-line
    if(i==12 || i==13) return(1);
    // eslint-disable-next-line
    if(i==14 || i==15) return(2);
    // eslint-disable-next-line
    if(i==16 || i==17) return(3);
    // eslint-disable-next-line
    if(i==18 || i==19) return(4);
    // eslint-disable-next-line
    if(i==20 || i==21) return(5);
    // eslint-disable-next-line
    if(i==22 || i==23) return(6);
    // eslint-disable-next-line
    if(i==24 || i==25) return(7);
    // eslint-disable-next-line
    if(i==26 || i==27) return(8);
    // eslint-disable-next-line
    if(i==28 || i==29) return(9);
    // eslint-disable-next-line
    if(i==30) return(10);


   
    
  }

  
  
  async infoSkills(url){
    console.log("asd") 
    this.setState({
      reponse:"Carregando..."
    })
    let reponse= await fetch(url)
    let jsonreponse= await reponse.json()
   
    this.setState({
      reponse:jsonreponse.desc
    })

   
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
      
        <Grid  item xs={6} >
        <p>Pericias</p>

        <div style={{maxHeight:"30%", overflowY:'scroll', height:"30%"}}>
          {this.state.skillsArray.map(skillsArray => (

          <ExpansionPanel key={skillsArray.url} onClick={()=>{this.infoSkills(skillsArray.url)}}>
          <ExpansionPanelSummary expandIcon={'+'}>
            <p>{skillsArray.name}</p>  
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails >
              {this.state.reponse}
          
          </ExpansionPanelDetails>
          </ExpansionPanel>
            
          ))}
        </div>
        </Grid>

      </Grid>
    );
  }
}

export default App;
