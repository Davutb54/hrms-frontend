import React from "react";
import { Image, Dropdown, Menu, Icon } from "semantic-ui-react";
import { useHistory } from "react-router";

export default function SignedIn({signOut}) {
  let history = useHistory()
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="left"
          src="https://image.flaticon.com/icons/png/512/197/197374.png"
          style={{ marginRight: "1em" }}
        />
        <Dropdown pointing="top left" text="England">
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{history.push("/profile")}}>
              <Icon style={{ marginRight: "1em" }} name="info" />
              Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut}>
              <Icon style={{ marginRight: "1em" }} name="sign-out" />
              Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
