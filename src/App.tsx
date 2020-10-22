import React from "react";
import { Component } from "react";
import { Layout, Menu, Switch as SwitchButton } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import "./App.css";
import State from "./Models/state";
import RestService from "./services/restService";
import ChallengeDto from "./Models/challenge.dto";
import { CategoryDto } from "./Models/category.dto";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "wysiwyg.css";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ChallengesGrid from "./components/ChallengesGrid";
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
      "5f87e6bbe094fcd2deebebb6"
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
  changeTheme = (value: boolean) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <Menu
              theme={this.state.theme === "dark" ? "dark" : "light"}
              mode="horizontal"
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Logout</Menu.Item>
              <Menu.Item key="3">
                <SwitchButton
                  checked={this.state.theme === "dark" ? true : false}
                  onChange={this.changeTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />
              </Menu.Item>
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
                theme={this.state.theme === "dark" ? "dark" : "light"}
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
                    <Menu.Item key={index}>
                      <Link to={`/${category.Name}`}>{category.Name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
                <Menu.Item>Logout</Menu.Item>
              </Menu>
            </Sider>

            <Content
              className="wysiwyg"
              style={{
                padding: "24px",
                minHeight: "100vh",
                background: "#fff",
              }}
            >
              <div>
                <Spin indicator={antIcon} />
              </div>
              <Switch>
                {this.state.categories?.map((cat, index) => (
                  <Route
                    key={index}
                    path={`/${cat.Name}`}
                    exact={true}
                    children={
                      <ChallengesGrid title={cat.Name} categoryName={cat.Name} challengeName={''} challenges={[]} />
                    }
                  />
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
