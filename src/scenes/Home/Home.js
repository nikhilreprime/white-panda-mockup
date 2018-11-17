
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */
import CardContent from "./components/CardContent/CardContent";

/* Style imports */
import './styles.css';
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

/*** End Imports ***/

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
    this.homeData = {
      simpleCards : [
        {
          id: 1,
          iconUrl:"",
          title:"Blog Post",
          description:"400 - 500 words",
          cardType: 1
        },
        {
          id: 2,
          iconUrl:"",
          title:"White Paper",
          description:"2500 - 3000 words",
          cardType: 1
        },
        {
          id: 3,
          iconUrl:"",
          title:"Website content",
          description:"250 - 300 words",
          cardType: 1
        },
        {
          id: 4,
          iconUrl:"",
          title:"Press Release",
          description:"350 - 450 words",
          cardType: 1
        },
        {
          id: 5,
          iconUrl:"",
          title:"Blog Post 1",
          description:"400 - 500 words",
          cardType: 1
        },
        {
          id: 6,
          iconUrl:"",
          title:"White Paper 1",
          description:"2500 - 3000 words",
          cardType: 1
        },
        {
          id: 7,
          iconUrl:"",
          title:"Website content 1",
          description:"250 - 300 words",
          cardType: 1
        },
        {
          id: 8,
          iconUrl:"",
          title:"Press Release",
          description:"350 - 450 words",
          cardType: 1
        }
      ],
      specialCards : [
        {
          id: 5,
          iconUrl:"",
          title:"Order from Template",
          description:"You can get orders from templates",
          cardType: 2
        },
        {
          id: 6,
          iconUrl:"",
          title:"Order Via Template",
          description:"Its usefull when giving bulk orders",
          cardType: 2
        }
      ]
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    
  }

  // Server calls

  // helper function

  // listeners

  // views to be rendered



  //finally render
  render() {
    let simpleCardsView = []
    // this.homeData.simpleCards.map((item, index)=>{
    //   return <CardContent {...item}/> 
    // })
    let count = 1;
    let temp = []
    for(let item of this.homeData.simpleCards){
      if(count % 4 === 0){
        temp = []
        temp.push(<CardContent {...item}/> )
        simpleCardsView.push(
          <div style={ {display:"flex"}}>
            {temp}
          </div>
        )
      }else{
        temp.push(<CardContent {...item}/> )
      }
      count++;
    }
    if(temp.length !== 0){
      simpleCardsView.push(
        <div style={ {display:"flex"}}>
          {temp}
        </div>
      )
    }
    let spacialCardsView = this.homeData.specialCards.map((item, index)=>{
      return <CardContent {...item}/> 
    })
    return (
      <div className="home-page-container">
        <Header/>
        <NavBar orientation="vertical"/>
        <div className="content-container">
          {simpleCardsView}
          {spacialCardsView}
        </div>
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
Home.propTypes = {

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Home.defaultProps = {

};

export default Home;