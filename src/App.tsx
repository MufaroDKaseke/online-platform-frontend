import React from "react";
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import axios, { AxiosResponse } from "axios";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./App.css";
import State from "./Models/state";
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

class App extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  componentDidMount = async () => {
    const response: AxiosResponse = await axios.get(
      "http://localhost:1337/challenges/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyNDM0MjMxLCJleHAiOjE2MDUwMjYyMzF9.LkazKPjnOLhjAxhopUKQpqc5knPE8GFDFB3kzj27EIc",
        },
      }
    );

    const state: State = { content: response.data };
    this.setState(state);

    console.log(this.state);
  };
  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
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
            <ReactMarkdown source={this.state.content[0]?.Content} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
