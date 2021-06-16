import "./Central.css";
import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import Languages from "./Languages";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Navi() {
const [isAuthenticated, setisAuthenticated] = useState(false)
let history = useHistory();

function signOut(){
  setisAuthenticated(false)
  history.push("/homepage")
}

function signIn(){
  setisAuthenticated(true)
}

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Menu position="left">
            <Button className="black" onClick={()=>{history.push("/homepage")}}>Home</Button>
            <Button className="black" onClick={()=>{history.push("/aboutus")}}>About Us</Button>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Languages style={{minHeight:'auto'}}/>
            {isAuthenticated?<SignedIn signOut={signOut}/>:<SignedOut signIn={signIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
