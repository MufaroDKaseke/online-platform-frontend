import React from "react";
import { Component } from "react";
import { Row, Col, Layout } from 'antd';
import State from "../Models/state";

const { Content } = Layout;
class ChallengesGrid extends Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = new State();
    }


}

export default ChallengesGrid;