import React from "react";
import { Component } from "react";
import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import "./App.css";
import State from "./Models/state";
import RestService from "./services/restService";
import ChallengeDto from "./Models/challenge.dto";
import { CategoryDto } from "./Models/category.dto";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

class App extends Component<any, State> {
  private restService = new RestService();

  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  componentDidMount = async () => {
    const challenge = await this.restService.get<ChallengeDto>(
      "challenges",
      "5f85fb602e8f1639fa578093"
    );
    const categories = await this.restService.query<CategoryDto>("categories");
    if (!!categories && categories.length > 0) {
      this.setState({ content: challenge.content, categories });
      return;
    }
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
                {this.state.categories?.map((category, index) => (
                  <Menu.Item key={index}>{category.Name}</Menu.Item>
                ))}
              </SubMenu>
              <Menu.Item>Logout</Menu.Item>
            </Menu>
          </Sider>

          <Content
            style={{ padding: "24px", minHeight: "100vh", background: "#fff" }}
          >
            <div>
              <Spin indicator={antIcon}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
            {/* {parse(this.state.content, {
              htmlparser2: { recognizeSelfClosing: true, lowerCaseTags: true },
            })} */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
