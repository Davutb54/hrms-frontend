import React from "react";
import { useHistory } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function SideBar() {
  let history = useHistory()
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical inverted>
        <Menu.Item onClick={()=>{history.push("/jobadvertisements")}}>
          <Icon name="announcement"/>
          Job Advertisements
        </Menu.Item>

        <Menu.Item onClick={()=>{history.push("/employers")}}>
          <Icon name="factory" />
          Employers
        </Menu.Item>

        <Menu.Item onClick={()=>{history.push("/cvs")}}>
          <Icon name="id card" />
          Cvs
        </Menu.Item>
      </Menu>
    </div>
  );
}
