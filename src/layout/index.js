import { Layout as AntdLayout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { path } from "../route/path";

const Layout = ({ children }) => {
  return (
    <AntdLayout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">
            <Link to={path.home}>Home</Link>
          </Menu.Item>
          <Menu.Item key="bookmark">
            <Link to={path.bookmark}>Bookmark</Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }} key="login">
            <Link to={path.login}>Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {children}
    </AntdLayout>
  );
};

export default Layout;
