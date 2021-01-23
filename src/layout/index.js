import { Layout as AntdLayout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { path } from "../route/path";

const Layout = ({ children }) => {
  return (
    <AntdLayout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key={path.home}>Home</Menu.Item>
          <Menu.Item key={path.bookmark}>Bookmark</Menu.Item>
          <Menu.Item key={path.login}>Login</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Natthaphon Srikong
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
