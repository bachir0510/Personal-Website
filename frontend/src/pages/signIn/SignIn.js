import { Layout, Tabs } from "antd";
import Logo from "../../assets/logo.png";
import RegisterForm from "../../components/admin/registerForms/RegisterForm";
import LoginForm from "../../components/admin/loginForm/LoginForm";
import "./signIn.scss";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="logoSignIn" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs>
            <TabPane tab={<span>Login</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Register</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
