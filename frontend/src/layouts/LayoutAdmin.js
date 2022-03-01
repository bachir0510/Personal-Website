import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/admin/menuTop/MenuTop";
import MenuSider from "../components/admin/menuSider/MenuSider";
import "./layoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [manuCollapsed, setMenuCollapsed] = useState(false);
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider manuCollapsed={manuCollapsed} />
      <Layout className="l-admin">
        <Header className="l-admin__header">
          <MenuTop
          // manuCollapsed={manuCollapsed}
          // setManuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="l-admin__content"> {children}</Content>
        <Footer className="l-admin__footer"> Footer : Bachir</Footer>
      </Layout>
    </Layout>
  );
}
