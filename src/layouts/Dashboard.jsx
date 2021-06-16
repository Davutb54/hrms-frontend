import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import JobAdvertisements from "../pages/JobAdvertisements";
import Employers from "../pages/Employers";
import SideBar from "./Sidebar";
import Cvs from "../pages/Cvs";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route
              exact
              path="/jobadvertisements"
              component={JobAdvertisements}
            />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/cvs" component={Cvs} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
