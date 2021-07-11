import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
} from "@material-ui/core";


export default function LoginPage() {


  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="space-around"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} md={3}>
          <Box m={4}>
            <Typography align="center" variant="h3">
             404 Not Found
            </Typography>
          </Box>
          </Grid>
      </Grid>
    </div>
  );
}
