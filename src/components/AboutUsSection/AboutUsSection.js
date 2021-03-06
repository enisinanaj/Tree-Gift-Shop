import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Plattform } from '../../illustrations/undraw_data_trends_b0wg.svg';
import Adrian from '../../illustrations/undraw_team_ih79_treeduce_3-01.svg';
import Yiulia from '../../illustrations/undraw_team_ih79_treeduce_3-02.svg';
import Morgane from '../../illustrations/undraw_team_ih79_treeduce_3-04.svg';
import Johanna from '../../illustrations/undraw_team_ih79_treeduce_3-03.svg';

import {
  Card, CardBody, CardTitle, CardText, CardImg,
} from 'reactstrap';
import MissionJumbotron from './MissionJumbotron';
import './AboutUsSection.css';

import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({});


function AboutUs() {
  return (
    <div>
      <Container>
        <Row className="mt-20">
          <Col
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
            lg={12} md={12}>
            <h1>About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="400" 
            lg={6} md={12} sm={12}>
            <Plattform />
          </Col>
          <Col 
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="400" 
            lg={6} md={12}>
            <h3>Our History</h3>
            <p>
              Treeduce is the only online platform in the world where you can have someone plant a tree for you and then follow it online.
              Since its foundation in 2021 in Vienna, more than 1.000.000 trees have been planted in Austria, Africa, South America and Italy.
              All trees are planted directly by local farmers and bring environmental, social and financial benefits to their communities.
              Thanks to its business model, in 2021 Treereduce became part of the Certified B Corporations,
              a network of companies that stand out for high environmental and social performance.
              Every tree on Treeduce is geo-localized and photographed and has its online page, it can be kept or virtually gifted to others.
              Thanks to these features, Treeduce's tree engages people and at the same time it represents a great communication and marketing tool for companies.
            </p>
          </Col>
        </Row>
      </Container>
      <MissionJumbotron />
      <Container className="TeamMembers">
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            md={12}>
            <h4>Our Team</h4>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Card 
              data-aos="fade-up-right" id="TeamMembersCard">
              <CardBody>
                <CardImg src={Adrian} id="picTeam" alt="tree" />
                <CardTitle tag="h5">Adrian</CardTitle>
                <CardText>Head of Backend</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Card data-aos="fade-up-right" id="TeamMembersCard">
              <CardBody>
                <CardImg src={Yiulia} id="picTeam" alt="tree" />
                <CardTitle tag="h5">Yuliya</CardTitle>
                <CardText>Developer</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Card data-aos="fade-up-left" id="TeamMembersCard">
              <CardBody>
                <CardImg src={Morgane} id="picTeam" alt="tree" />
                <CardTitle tag="h5">Morgane</CardTitle>
                <CardText>Creative Director</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Card data-aos="fade-up-left" id="TeamMembersCard">
              <CardBody>
                <CardImg src={Johanna} id="picTeam" alt="tree" />
                <CardTitle tag="h5">Johanna</CardTitle>


                <CardText>hdhdh</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default AboutUs;
