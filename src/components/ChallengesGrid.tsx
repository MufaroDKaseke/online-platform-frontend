import React from "react";
import { Component } from "react";
import { Row, Col, Layout, Card, Skeleton, Avatar } from "antd";
import State from "../Models/state";
import Meta from "antd/lib/card/Meta";

const { Content } = Layout;
class ChallengesGrid extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  render() {
    return (
      <Layout style={{ background: "#fff" }}>
        <Row gutter={[16, 24]} style={{ background: "#fff" }}>
          <Col xs={{ span: 24 }} md={{span:8}}>
            <Card title="Default size card" style={{width:"100%"}}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{span:8}}>
            <Card title="Default size card" style={{width:"100%"}}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} md={{span:8}}>
            <Card title="Default size card" style={{width:"100%"}}>
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
