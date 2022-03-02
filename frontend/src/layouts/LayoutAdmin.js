import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/admin/menuTop/MenuTop";
import MenuSider from "../components/admin/menuSider/MenuSider";
import "./layoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  const style = { marginLeft: menuCollapsed ? "80px" : "200px" };

  return (
    <Layout>
      <MenuSider manuCollapsed={menuCollapsed} />
      <Layout className="l-admin" style={style}>
        <Header className="l-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="l-admin__content"> {children}</Content>
        <Footer className="l-admin__footer"> Footer : Bachir</Footer>
      </Layout>
    </Layout>
  );
}
