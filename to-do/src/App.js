import "./App.css";
import {useState} from "react"
import Todoform from "./components/Todoform";
import { Layout, Menu, Breadcrumb } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Colaps from "./components/Colaps";

function App() {
  const { Header, Content, Footer } = Layout;
const [tasks ,setTasks] = useState(["nadia"]);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <p style={{ fontSize: "40px", margin: "30px auto", color: "white" }}>
            <Avatar
              style={{
                color: "black",
                backgroundColor: "wgite",
                marginRight: "30px",
              }}
              icon={<UserOutlined />}
            />{" "}
            What the plan for today ?{" "}
          </p>
        </Menu>
      </Header>
      <Content style={{ padding: "60px 100px" }}>
        <Breadcrumb
          style={{ margin: "16px 0", fontSize: "30px", color: "black" }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Todoform tasks = {tasks}  setTasks={setTasks} />
          <Colaps tasks={tasks} setTasks={setTasks} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
