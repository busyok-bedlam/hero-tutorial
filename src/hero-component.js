import React,{Component} from 'react';
import HEROES from './heroes.mock';
import './hero-component.css';
class HeroTable  extends Component {
  render(){
       return (
      <div className="act">
        <h2>Our hero is {this.props.ourhero.hero}</h2>
        <p>his index is {this.props.ourhero.id}</p>
      </div>
    )
  }
}
class HeroComponent extends Component {
  render(){
    return(
      <li onClick={this.props.onclick}>
      <span>{this.props.hero.id}</span>
      {this.props.hero.hero}
      </li>
    )
  }
}
class HeroListComponent extends Component {
constructor(props){
  super(props);
  this.state = {
    fixed_hero: +0
  }
}
  render(){
    let hero_table;
    if(this.state.fixed_hero>=0){
      hero_table =
      <div className="table" >
       <HeroTable ourhero = {HEROES[this.state.fixed_hero]} />
       </div>
    }
    return(
      <div>
      <ul>
        {
          HEROES.map((item,index)=>{
            return (<HeroComponent onclick={
              ()=>{
                this.setState({fixed_hero: index});
              }
            }  key={index} hero={item} />)
          })
        }
      </ul>
      {hero_table}
      </div>
    )
  }
}
export default HeroListComponent;
