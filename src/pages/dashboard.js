import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "../css/dashboard.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import News from "./news";
import Events from "./events";
const { Sider, Header, Content } = Layout;

export default class Dashboard extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Router>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{ minHeight: "100%" }}
            >
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ position: "sticky", top: 0 }}
              >
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/news">Yangiliklar</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/events">Tadbirlar</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  nav 3
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: "100%",
                }}
              >
                <Routes>
                  <Route path="/news" element={<News />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/">Hello</Route>
                </Routes>
              </Content>
            </Layout>
          </Router>
        </Layout>
      </div>
    );
  }
}
