
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */

/* Style imports */
import './styles.css'
import BtnSolid from "../../../../components/Buttons/BtnSolid/BtnSolid";
/*** End Imports ***/

class CardContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }
  componentDidMount() {

  }

  // Server calls

  // helper function

  // listeners

  //finally render
  render() {
    let { id, iconUrl, title, description, cardType} = this.props;
    if(cardType === 1){

    }else if(cardType === 2){

    }
    
    return (
      <div className="card-container">

          <div className="section-1">
            <div className="logo">
              
            </div>
            <div className="title">
              {title}
            </div>
            <div className="description">
              {description}
            </div>
          </div>
          <BtnSolid 
            onClick = {()=>{ window.alert("order Item "+id)}} 
            title="Order"
            customStyle = {
              {
                width : "50px"
                
              }
            }
            />
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
CardContent.propTypes = {
  id: PropTypes.number,
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string, 
  cardType: PropTypes.number
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
CardContent.defaultProps = {

};

export default CardContent;