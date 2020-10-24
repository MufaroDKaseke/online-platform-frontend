import React from "react";
import { Component } from "react";
import { Row, Col, Layout, Card } from "antd";
import State from "../Models/state";
import ChallengesProps from "../Models/challenges.props";
import RestService from "../services/restService";
import ChallengeDto from "../Models/challenge.dto";
import { Link } from "react-router-dom";

class ChallengesGrid extends Component<ChallengesProps, any> {
  private restService = new RestService();
  constructor(props: ChallengesProps) {
    super(props);
    this.state = new State();
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const challenges = await this.restService.query("challenges", {
      _where: [{ "category.Name_eq": this.props.categoryName }],
    });
    this.setState({ challenges });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout style={{ background: "#fff" }}>
        <h1>{this.props.title}</h1>
        <Row gutter={[16, 24]} style={{ background: "#fff" }}>
          {!!this.state.challenges && this.state.challenges.length === 0 ? (
            <p style={{ textAlign: "center" }}>No Challenges at the moment</p>
          ) : (
            this.state.challenges?.map(
              (challenge: ChallengeDto, index: number) => {
                return (
                  <Col xs={{ span: 24 }} md={{ span: 8 }} key={index}>
                    <Link to={`/challenge/${challenge.id}`}>
                      <Card
                        title={challenge.title}
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              challenge.content.length >= 310
                                ? challenge.content.substring(0, 310) + "..."
                                : challenge.content,
                          }}
                        />
                      </Card>
                    </Link>
                  </Col>
                );
              }
            )
          )}
        </Row>
      </Layout>
    );
  }
}

export default ChallengesGrid;
