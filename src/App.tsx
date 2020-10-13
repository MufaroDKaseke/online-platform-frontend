import React from "react";
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import "./App.css";
import State from "./Models/state";
import RestService from "./services/restService";
import ChallengeDto from "./Models/challenge.dto";
const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  componentDidMount = async () => {
    const restService = new RestService();
    const challenge = await restService.get<ChallengeDto>("challenges", "5f85fb602e8f1639fa578093");
    console.log(challenge);
    this.setState({ content: challenge.content });
  };
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider
            width={300}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="Weekly Challenges"
              >
                <Menu.Item key="5">ReactJs</Menu.Item>
                <Menu.Item key="6">Spark AR</Menu.Item>
                <Menu.Item key="7">Messenger Platform</Menu.Item>
                <Menu.Item key="8">Wit AI</Menu.Item>
              </SubMenu>
              <Menu.Item>Logout</Menu.Item>
            </Menu>
          </Sider>

          <Content
            style={{ padding: "24px", minHeight: "100vh", background: "#fff" }}
          >
            <ReactMarkdown source={this.state.content} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
