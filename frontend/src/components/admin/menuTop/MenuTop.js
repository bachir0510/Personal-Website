import logo from "../../../assets/logo.png";
import { Button } from "antd";
import { MenuFoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import "./menuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="memu-top__left">
        <img className="menu-top__left__logo" src={logo} alt="bachir" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <MenuFoldOutlined />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">{<PoweroffOutlined />}</Button>
      </div>
    </div>
  );
}
