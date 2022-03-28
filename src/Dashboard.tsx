import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";

function Dashboard() {
  return (
    <Grid padded="vertically" stretched>
      <Grid.Column width={4}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column width={12}>Dashboard</Grid.Column>
    </Grid>
  );
}

export default Dashboard;
