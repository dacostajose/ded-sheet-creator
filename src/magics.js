import React, { Component } from 'react';
import {  ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';

class Spells extends Component {
  constructor(props) {
    super(props);
    this.state={
     spellsArray:[],
     reponse:"",
    };
    this.infoSkills= this.infoSkills.bind(this)
  }

  
  async componentWillMount(){ 
    
    let spells= await fetch('http://www.dnd5eapi.co/api/spells/')
    let jsonspells= await spells.json()



    this.setState({
        spellsArray:jsonspells.results, 
      
    })
   
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
    <div>
        <p>Magias</p>
        <div style={{maxHeight:500, overflowY:'scroll', height:500}}>
          {this.state.spellsArray.map(spellsArray => (
          <ExpansionPanel key={spellsArray.url} onClick={()=>{this.infoSkills(spellsArray.url)}}>
          <ExpansionPanelSummary expandIcon={'+'}>
            <p>{spellsArray.name}</p>  
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails >
              {this.state.reponse}
          
          </ExpansionPanelDetails>
          </ExpansionPanel>
            
          ))}
        </div>
      </div>
    );
  }
}

export default Spells;
