import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import withAuthorization from '../../components/Session/withAuthorization';

class AdminSchedule extends Component {
  render() {
    return (
      <div>
                <Container fluid>
                    <Row>
                    <div className="col-md-12 containerBox inputBox">
                        <div className="col-lg-3">
                            <h1>Mister Chef</h1>
                        </div>
                        <div className="col-lg-8 ">
                            <p className="aboutText">Lorem ipsum dolor amet cardigan glossier XOXO, twee flexitarian before they sold out squid jianbing PBR&B hammock bespoke DIY. Waistcoat biodiesel affogato four dollar toast tote bag food truck kitsch. Wolf vexillologist celiac migas enamel pin raw denim air plant helvetica truffaut pickled glossier. Whatever disrupt gastropub flexitarian yuccie XOXO, swag hella street art.</p>
                        </div>
                    </div>
                    </Row>
                    <Row>
                    
                    </Row>
                </Container>
            </div>
    )
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AdminSchedule);