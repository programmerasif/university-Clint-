import { Button, Layout } from "antd";
const { Header, Content} = Layout;
import { Outlet } from "react-router-dom";
import Sidebr from "./Sidebr";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSice";

const MainLayout = () => {
  const dispatch = useAppDispatch()
  const handelLogout = () =>{
    dispatch(logOut())
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebr />
      <Layout>
        <Header >
          <Button onClick={handelLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
