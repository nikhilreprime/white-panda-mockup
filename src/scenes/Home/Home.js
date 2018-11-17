
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
      simpleCards: [
        {
          id: 1,
          iconUrl: "",
          title: "Blog Post",
          description: "400 - 500 words",
          cardType: 1
        },
        {
          id: 2,
          iconUrl: "",
          title: "White Paper",
          description: "2500 - 3000 words",
          cardType: 1
        },
        {
          id: 3,
          iconUrl: "",
          title: "Website content",
          description: "250 - 300 words",
          cardType: 1
        },
        {
          id: 4,
          iconUrl: "",
          title: "Press Release",
          description: "350 - 450 words",
          cardType: 1
        },
        {
          id: 5,
          iconUrl: "",
          title: "Product Description",
          description: "400 - 500 words",
          cardType: 1
        },
        {
          id: 6,
          iconUrl: "",
          title: "Social Media",
          description: "2500 - 3000 words",
          cardType: 1
        },
        {
          id: 7,
          iconUrl: "",
          title: "Story Writing",
          description: "250 - 300 words",
          cardType: 1
        },
        {
          id: 8,
          iconUrl: "",
          title: "Video Script",
          description: "350 - 450 words",
          cardType: 1
        },
        {
          id: 9,
          iconUrl: "",
          title: "Newsletter",
          description: "250 - 300 words",
          cardType: 1
        },
        {
          id: 10,
          iconUrl: "",
          title: "Brochure Content",
          description: "350 - 450 words",
          cardType: 1
        },
        {
          id: 11,
          iconUrl: "",
          title: "Custom Content",
          description: "250 - 300 words",
          cardType: 1
        },
        {
          id: 12,
          iconUrl: "",
          title: "Contest",
          description: "350 - 450 words",
          cardType: 1
        }
      ],
      specialCards: [
        {
          id: 5,
          iconUrl: "",
          title: "Order from Template",
          description: "You can get orders from templates",
          cardType: 2
        },
        {
          id: 6,
          iconUrl: "",
          title: "Order Via Template",
          description: "Its usefull when giving bulk orders",
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
  getCardView = (arrayList, rowSize) => {
    let CardsView = []
    let count = 1;
    let temp = {}
    let row = 0;
    for (let item of arrayList) {
      if (count % rowSize === 0) {
        temp[row].push(<CardContent {...item} />)
        row++;
      } else {
        if (temp[row]) {
          temp[row].push(<CardContent {...item} />)
        } else {
          temp[row] = [];
          temp[row].push(<CardContent {...item} />)
        }
      }
      count++;
    }
    for (var key in temp) {
      if (temp.hasOwnProperty(key)) {
        CardsView.push(
          <div style={{ display: "flex" }}>
            {temp[key]}
          </div>
        )

      }
    }
    return CardsView
  }


  //finally render
  render() {

    return (
      <div className="home-page-container">
        <Header />
        <NavBar orientation="vertical" />
        <div className="content-container">
          {this.getCardView(this.homeData.simpleCards, 4)}
          {this.getCardView(this.homeData.specialCards, 2)}
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