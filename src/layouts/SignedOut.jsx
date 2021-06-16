import "./Central.css";
import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { useHistory } from "react-router";

export default function SignedOut({ signIn }) {
  let history = useHistory()
  return (
    <div>
      <Menu.Item>
        <Button color="green" onClick={()=>{history.push("/register")}}>
          <Icon style={{ marginRight: "1em" }} name="add user" />
          Register
        </Button>

        <Button primary onClick={signIn} style={{marginLeft:'1em'}}>
          <Icon style={{ marginRight: "1em" }} name="sign-in" />
          Sign In
        </Button>
      </Menu.Item>
    </div>
  );
}
