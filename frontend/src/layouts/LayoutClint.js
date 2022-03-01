import { Layout } from "antd";

export default function LayoutClint(props) {
  const { children } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2> Menu</h2>
      <Layout>
        <Content> {children}</Content>
        <Footer> Footer</Footer>
      </Layout>
    </Layout>
  );
}
