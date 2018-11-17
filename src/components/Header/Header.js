
/*** Imports ***/

/* Library imports */
import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Component imports */

/* Style imports */
import './styles.css'
/*** End Imports ***/

class Header extends Component {
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
    let { title } = this.props;
    return (
      <div className="header-container">
          <div className="section-1">
            <img src="/logo.jpg"/>
          </div>
          <div className="section-2"> 
            <div className="item">
            </div>
            <div className="item">
            </div>
            <div className="item">
            </div>
            <div className="item">
            </div>
          </div>
          
      </div>
    );
  }

}

/**
 * all prop types which can be passed to this component
 */
Header.propTypes = {
  title: PropTypes.string,
  // options: PropTypes.arrayOf({
  //   icon : PropTypes.string,
  //   actionCallback: PropTypes.func
  // })
};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Header.defaultProps = {

};

export default Header;