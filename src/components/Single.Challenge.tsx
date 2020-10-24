import React, { Component, useState, useEffect } from "react";
import State from "../Models/state";
import { useParams, withRouter } from "react-router-dom";
import RestService from "../services/restService";
import ChallengeDto from "../Models/challenge.dto";

// let { id } = useParams<any>();

class SingleChallenge extends Component<any, any> {
  private id: string;
  private restService = new RestService();

  constructor(props: any) {
    super(props);
    this.id = this.props.match.params.id;
    this.state = new State();
  }

  async componentDidMount() {
    const challenge = await this.restService.get<ChallengeDto>(
      "challenges",
      this.id
    );
    this.setState({ challenge });
  }
  render() {
    return (
      <>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.challenge?.content }}
        ></div>
      </>
    );
  }
}

// let getChallenge = async () => {
//   challenge = await restService.get<ChallengeDto>("challenges", id);
// };

export default withRouter(SingleChallenge);
