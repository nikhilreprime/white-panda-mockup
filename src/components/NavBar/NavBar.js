
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */

/* Style imports */
import './styles.css'
/*** End Imports ***/

class NavBar extends Component {
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

  // views to be rendered


  //finally render
  render() {
    let { orientation } = this.props;
    
    let classes = "nav-bar-container"
    if(orientation === "horizantal"){
      classes += "nav-horizantal"
    }else{
      classes += " nav-vertical"
    };
    return (
      <div className={classes}>
        
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
NavBar.propTypes = {
  orientation: PropTypes.string
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
NavBar.defaultProps = {
  orientation: "vertical"
};

export default NavBar;