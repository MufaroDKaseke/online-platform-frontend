import React from "react";
import { Component } from "react";
import { Row, Col, Layout, Card } from "antd";
import State from "../Models/state";
import ChallengesProps from "../Models/challenges.props";
import RestService from "../services/restService";

const { Content } = Layout;
class ChallengesGrid extends Component<ChallengesProps, any> {
  private restService = new RestService();
  constructor(props: ChallengesProps) {
    super(props);
    this.state = new State();
  }

  async componentDidMount() {
    const challenges = await this.restService.query("challenges", {
      params: {
        category: this.props.categoryName,
      },
      
      
    });
    console.log(challenges);
  }

  render() {
    return (
      <Layout style={{ background: "#fff" }}>
        <h1>{this.props.title}</h1>
        <Row gutter={[16, 24]} style={{ background: "#fff" }}>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Card title="Default size card" style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Card title="Default size card" style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <Card title="Default size card" style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default ChallengesGrid;
