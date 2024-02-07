import React from "react";
import { Navbar } from "react-bootstrap";
// import { Button, Menu, Dropdown, Avatar } from "antd";
// import {
//   UserOutlined,
//   SettingOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";

const Header = () => {
  // const menu = (
  //   <Menu>
  //     <Menu.Item key="1" icon={<UserOutlined />}>
  //       Profile
  //     </Menu.Item>
  //     <Menu.Item key="2" icon={<SettingOutlined />}>
  //       Settings
  //     </Menu.Item>
  //     <Menu.Item key="3" icon={<LogoutOutlined />}>
  //       Logout
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "white",
        position: "sticky",
        // width: "100%",
        top: 0,
        zIndex: 1,
        // height: 55,
        boxShadow:
          "0 2px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Left side with name */}
      <div style={{ fontSize: "20px", fontWeight: "bold", color: "#FF5612" }}>
        ZEBRALEARN
      </div>
      <div>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">krishna</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
      {/* Right side with links */}
    </header>
  );
};

export default Header;
