import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import logo from "../img/logo.png";
import "../css/dashboard.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import News from "./news";
import Events from "./events";
import Home from "./home";
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
              style={{ height: "100vh", position: "sticky", top: 0 }}
            >
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ position: "sticky", top: 64, marginTop: 64 }}
              >
                <Menu.Item
                  key="0"
                  icon={
                    this.state.collapsed ? (
                      <MenuUnfoldOutlined />
                    ) : (
                      <MenuFoldOutlined />
                    )
                  }
                  onClick={() => this.toggle()}
                ></Menu.Item>
                <Menu.Item key="1" icon={<DesktopOutlined />}>
                  <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  <Link to="/news">Yangiliklar</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                  <Link to="/events">Tadbirlar</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                //   className="site-layout-background"
                style={{ padding: 0, position: "sticky", top: 0 }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", height: 64 }}
                >
                  <img
                    src={logo}
                    alt="#logo"
                    style={{
                      marginLeft: 15,
                      marginRight: 10,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      border: "1px solid white",
                    }}
                  />
                  <h3
                    style={{
                      color: "white",
                      marginLeft: 25,
                      marginBottom: 0,
                    }}
                  >
                    Namangan viloyat xalq ta'limi boshqarmasi
                  </h3>
                </div>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  //   marginBottom: 10,
                  padding: "14px 24px",
                  height: "100%",
                }}
              >
                <Routes>
                  <Route path="/news" element={<News />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Content>
            </Layout>
          </Router>
        </Layout>
      </div>
    );
  }
}
