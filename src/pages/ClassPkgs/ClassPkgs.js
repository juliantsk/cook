import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import MenuCard from "../../components/MenuCard";
import { db } from '../../firebase';
import "./ClassPkgs.css"

class ClassPkgs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: {}
    };
  }

  componentDidMount() {
    db.onceGetClasses().then(snapshot =>
      this.setState(() => ({ classes: snapshot.val() }))
    );
  }

  render() {
    const { classes } = this.state;
    return (
      <Container fluid>
            <Row>
                <Jumbotron />
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="col-sm-12 selectClass">
                        <h2>Choose From Our Selection of Packages</h2>
                        <hr className="line" />
                    </div>
                </Col>
            </Row>
    { !!classes && <ProductList classes={classes} /> }
            </Container>
    )
  }
}

const ProductList = ({ classes }) =>
  <Row>
    <div id="menuCardDiv">
     {Object.keys(classes).map(key => 
     (classes[key].category === "Package") ? 
     <MenuCard key={key} title={classes[key].title} description={classes[key].description} price={classes[key].price}/> : ""
     )}
     </div>
    </Row>

export default ClassPkgs;